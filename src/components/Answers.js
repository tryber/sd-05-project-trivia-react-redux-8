import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { answeredAction, playerScoreAction } from '../actions';
import decodeEntities from '../services/decodeEntities';
import shuffleArray from '../services/shuffleArray';

class Answers extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        randomAnswers: [],
      }
    this.shuffle = this.shuffle.bind(this);
    this.answered = this.answered.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
  }

  componentDidMount() {
    this.shuffle();
  }

  // shuffle has to be done via next button in Game or componentdidmount here, so as to be fixed and not rendered at every update (second).
  shuffle() {
    const { correct, incorrect } = this.props;
    const allAnswers = [...incorrect, correct];
    const randomAllAnswers = shuffleArray(allAnswers);
    console.log(randomAllAnswers);
    // was ok
    this.setState({ randomAnswers: randomAllAnswers });
    console.log(this.state.randomAnswers); 
    // was but did appear on screen when state forced ['bla','blou']
    // problem: same answers for each questions! unpaired.
    // keep trying but with index consideration!! maybe joining Game and Answers to make it easier, here it seemed like index should already work...
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
    const { correct, answeredOne, timecount, level } = this.props;
    // 05.09 where I left it.
    // Goal: be able to keep this following map and render.
    // Challenge: access randomAllAnswers being created as fixed outside render.
    // How?
    // 1. tried local state, failed, index reason, stayed the same. Try a bit more this before smthg else!
    // 2. actually div must be outside too so as to get index of the question. 
    // 3. Creating object? in this case, everything in one component, Game, possible for CC because render will be short.
    // See inspirations: http://dontpad.com/shuffleoutsiderender .
    // Last step: maybe even after the shuffle fix, there could be Timer to consider too.
    return (
      <div className="answers-button">
        {/* this was the state tentative, broken: */}
        {this.state.randomAnswers.map((answer, index) => 
         (answer === correct ? (
          <button
          key={answer}
          data-testid="correct-answer"
          id="correct"
          onClick={(e) => this.answered(e, timecount, level)}
          disabled={answeredOne}
          className={answeredOne ? 'green-border' : 'answ'}
        >
          {decodeEntities(answer)}
        </button>
        ) : (
          <button
            key={answer}
            id="incorrect"
            className={answeredOne ? 'red-border' : 'answ'}
            data-testid={`wrong-answer-${index}`}
            onClick={(e) => this.answered(e, timecount, level)}
            disabled={answeredOne}
          >
            {decodeEntities(answer)}
          </button>
        )),
      )}
        
        {/* <div className="answers-button">
        <button
          data-testid="correct-answer"
          id="correct"
          onClick={(e) => this.answered(e, timecount, level)}
          disabled={answeredOne}
          className={answeredOne ? 'green-border' : 'answ'}
          >
          {decodeEntities(correct)}
          </button>
          {incorrect.map((answer, index) => (
            <button
            key={answer}
            id="incorrect"
            className={answeredOne ? 'red-border' : 'answ'}
            data-testid={`wrong-answer-${index}`}
            onClick={(e) => this.answered(e, timecount, level)}
            disabled={answeredOne}
            >
            {decodeEntities(answer)}
            </button>
            ))}
          </div> */}
          </div>
    );
  }
}

// allAnswers put into the shuffle function
// randomAllAnswers rendering: map and condition to render all the logic and events above.

const mapStateToProps = (state) => ({
  dataGame: state.fetchApis.dataGame,
  answeredOne: state.answeredReducer.answeredOne,
  score: state.dataPlayerReducer.score,
  assertions: state.dataPlayerReducer.assertions,
  name: state.dataPlayerReducer.name,
  email: state.dataPlayerReducer.email,
  // timecount: state.timeReducer.count,
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
