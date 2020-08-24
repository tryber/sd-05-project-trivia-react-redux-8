import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { answeredAction, playerScoreAction } from '../actions';

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.answered = this.answered.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
  }

  answered(event, timecount, level) {
    // first send globally state of answeredOne true
    const { answerRedux } = this.props;
    answerRedux();
    // then calculate score, only if answer was correct
    if (event.target.id === 'correct') {
      this.calculateScore(timecount, level);
    }
  }

  calculateScore(timecount, level) {
    const difficulty = {
      easy: 1,
      medium: 2,
      hard: 3,
    };
    const totalScore = 10 + (timecount * difficulty[level]);
    const { getScore } = this.props;
    getScore(totalScore);
    // Now send it all to local storage
    const { name, assertions, score, email } = this.props;
    const newPlayerState = {
      player: {
        name,
        assertions: assertions + 1,
        score: score + totalScore,
        gravatarEmail: email,
      },
    };
    localStorage.setItem('state', JSON.stringify(newPlayerState));
  }

  // [HA]{Game - R6} Ajuda - (objeto difficulty + storage, Felipe Vieira, Grupo 2, PR: https://github.com/tryber/sd-05-project-trivia-react-redux-2/pull/4/files ).
  // JSON.stringify https://www.w3schools.com/js/js_json_stringify.asp

  render() {
    const { correct, incorrect, answeredOne, timecount, level } = this.props;
    return (
      <div>
        <p>Choose between one of these answer options:</p>
        <button
          data-testid="correct-answer"
          id="correct"
          onClick={(e) => this.answered(e, timecount, level)}
          disabled={answeredOne}
          className={answeredOne ? 'green-border' : null}
        >
          {correct}
        </button>
        {incorrect.map((answer, index) => (
          <button
            key={answer}
            id="incorrect"
            className={answeredOne ? 'red-border' : null}
            data-testid={`wrong-answer-${index}`}
            onClick={(e) => this.answered(e, timecount, level)}
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
  score: state.dataPlayerReducer.score,
  assertions: state.dataPlayerReducer.assertions,
  name: state.dataPlayerReducer.name,
  email: state.dataPlayerReducer.email,
});

const mapDispatchToProps = (dispatch) => ({
  answerRedux: (e) => dispatch(answeredAction(e)),
  getScore: (pts) => dispatch(playerScoreAction(pts)),
});

Answers.propTypes = {
  correct: PropTypes.string.isRequired,
  incorrect: PropTypes.arrayOf(PropTypes.string).isRequired,
  answeredOne: PropTypes.bool.isRequired,
  answerRedux: PropTypes.func.isRequired,
  getScore: PropTypes.func.isRequired,
  timecount: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
