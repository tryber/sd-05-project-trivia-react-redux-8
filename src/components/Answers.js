import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MD5 } from 'crypto-js';
import { answeredAction, playerScoreAction } from '../actions';

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.answered = this.answered.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
    this.storage = this.storage.bind(this);
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
    // calculate points to add to score
    // let difficulty = 0;
    // if (level === 'easy') {
    //   difficulty += 1;
    // } else if (level === 'medium') {
    //   difficulty += 2;
    // } else if (level === 'hard') {
    //   difficulty += 3;
    // };
    const difficulty = {
      easy: 1,
      medium: 2,
      hard: 3,
    }
    const totalScore = 10 + (timecount * difficulty[level]);
    // PR Felipe, melhor jeito de calcular sem callback e if
    const { getScore } = this.props;
    getScore(totalScore);
    // at the end, take care of localstorage, has to be done live:
    this.storage();
  }
  // 22/08 noite: isso finalmente calcula certo desde a primeira pergunta E acumulando. Revisar reducer para boa pratica.

  storage() {
    const { name, assertions, score, email, hash } = this.props;
    const playerState = {
      player: {
        name: {name},
        assertions: {assertions},
        score: {score},
        gravatarEmail: {email},
      },
    };
    localStorage.setItem('state', JSON.stringify(playerState));
    const getIntoRanking = {
      name: {name},
      score: {score},
      picture: `https://www.gravatar.com/avatar/${hash}`
    };
    localStorage.setItem('ranking', JSON.stringify(getIntoRanking));
  }

  // JSON.stringify https://www.w3schools.com/js/js_json_stringify.asp
  // 22/08 noite: isso n passa no teste, tem uma questao de estado
  // previo e proximo estado para ser resolvida.

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
  name: state.dataPlayerReducer.name,
  email: state.dataPlayerReducer.email,
  hash: MD5(state.dataPlayerReducer.email).toString(),
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
  level: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
