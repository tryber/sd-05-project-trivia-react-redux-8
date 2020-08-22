import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { answeredAction, playerScoreAction } from '../actions';

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      assertions: 0,
    };
    this.answered = this.answered.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
  }

  answered(wasCorrect, timecount, level) {
    // first send globally state of answeredOne true
    const { answerRedux } = this.props;
    answerRedux();
    // then calculate score, only if answer was correct
    if (wasCorrect) return this.calculateScore(timecount, level);
  }
  
  calculateScore(timecount, level) {
    const { assertions, score } = this.state;
    // add one assertion
    this.setState({ assertions: assertions + 1 })
    // calculate points to add to score
    const base = 10;
    let difficulty = 0;
    if (level === 'easy') difficulty = 1;
    else if (level === 'medium') difficulty = 2;
    else if (level === 'hard') difficulty = 3;
    let totalScore = base + (timecount * difficulty);
    this.setState({ score: score + totalScore });
    // now send both to redux global store state
    const { getScore } = this.props;
    getScore(score, assertions);
  }

  //localStorage.setItem('state', player: { name, assertions, score, gravatarEmail })
  //localStorage.setItem('ranking', { name: nome-da-pessoa, score: 10, picture: url-da-foto-no-gravatar });

  render() {
    const { correct, incorrect, answeredOne, timecount, level } = this.props;
    return (
      <div>
        <p>Choose between one of these answer options:</p>
        <button
          data-testid="correct-answer"
          onClick={() => this.answered(true, timecount, level)}
          disabled={answeredOne}
          className={answeredOne ? 'green-border' : null}
        >
          {correct}
        </button>
        {incorrect.map((answer, index) => (
          <button
            key={answer}
            className={answeredOne ? 'red-border' : null}
            data-testid={`wrong-answer-${index}`}
            onClick={() => this.answered(false)}
            disabled={answeredOne}
          >
            {answer}
          </button>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataGame: state.fetchApis.dataGame,
  answeredOne: state.answeredReducer.answeredOne,
});

const mapDispatchToProps = (dispatch) => ({
  answerRedux: (e) => dispatch(answeredAction(e)),
  getScore: (points, assertions) => dispatch(playerScoreAction(points, assertions)),
});

Answers.propTypes = {
  correct: PropTypes.string.isRequired,
  incorrect: PropTypes.arrayOf(PropTypes.string).isRequired,
  answeredOne: PropTypes.bool.isRequired,
  answerRedux: PropTypes.func.isRequired,
  getScore: PropTypes.func.isRequired,
  timecount: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
// export default Answers;
