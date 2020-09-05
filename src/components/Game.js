import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Answers from './Answers';
import { clearAction, answeredAction } from '../actions';
import decodeEntities from '../services/decodeEntities';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      count: 30,
      numberQuestions: 1,
    };
    this.next = this.next.bind(this);
    this.beginTimer = this.beginTimer.bind(this);
  }

  componentDidMount() {
    this.beginTimer();
  }

  componentDidUpdate() {
    const { count } = this.state;
    const { answeredOne, answerRedux } = this.props;
    if (count === 0 || answeredOne) {
      clearInterval(this.myInterval);
      answerRedux();
    }
  }

  beginTimer() {
    this.myInterval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }, 1000);
  }
  // [HA]{Tela Game, R5: timer} Modelo - https://www.youtube.com/watch?v=NAx76xx40jM .

  next() {
    const { clearAnswered } = this.props;
    clearAnswered();
    this.setState({ count: 30 });
    this.beginTimer();
    const { numberQuestions } = this.state;
    this.setState({ numberQuestions: numberQuestions + 1 });
    const { i } = this.state;
    if (i < 4) {
      return this.setState({ i: i + 1 });
    } else if (i === 4) {
      return this.setState({ i: 0 });
    }
    return this.setState({ i });
  }

  render() {
    const { dataGame, isFetching, answeredOne } = this.props;
    const { i, count, numberQuestions } = this.state;
    return (
      <div>
        {isFetching && <p>Loading...</p>}
        {!isFetching && dataGame.length > 0 && (
          <section className="game">
            <div>
            <Header />
            <div className="question">
            <h3 data-testid="question-category">CATEGORY - {decodeEntities(dataGame[i].category)}</h3>
            <h3 data-testid="question-text">QUESTION - {decodeEntities(dataGame[i].question)}</h3>
            </div>
            <Answers
              correct={dataGame[i].correct_answer}
              incorrect={dataGame[i].incorrect_answers}
              // allAnswers={[...dataGame[i].incorrect_answers, dataGame[i].correct_answer]}
              i={i}
              timecount={count}
              level={dataGame[i].difficulty}
            />
            </div>
            <h3 className="timer">Time left: {count}</h3>
          </section>
        )}
        {answeredOne && (
          <button className="transition-button" data-testid="btn-next" onClick={this.next}>
            NEXT
          </button>
        )}
        {numberQuestions === 6 && <Redirect to="/score" />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataGame: state.fetchApis.dataGame,
  isFetching: state.fetchApis.isFetching,
  answeredOne: state.answeredReducer.answeredOne,
});

const mapDispatchToProps = (dispatch) => ({
  clearAnswered: (e) => dispatch(clearAction(e)),
  answerRedux: (e) => dispatch(answeredAction(e)),
});

Game.propTypes = {
  dataGame: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  answeredOne: PropTypes.bool.isRequired,
  clearAnswered: PropTypes.func.isRequired,
  answerRedux: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
