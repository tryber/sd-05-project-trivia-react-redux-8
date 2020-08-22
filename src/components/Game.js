import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Answers from './Answers';
import { clearAction, answeredAction } from '../actions';

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

  beginTimer() {
    this.myInterval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }, 1000);
  }

  // [HA]{Tela Game, R5: timer} Modelo - https://www.youtube.com/watch?v=NAx76xx40jM .

  componentDidUpdate() {
    const { count } = this.state;
    const { answeredOne, answerRedux } = this.props;
    if (count === 0 || answeredOne) {
      clearInterval(this.myInterval);
      answerRedux();
    }
  }

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
          <div>
            <Header />
            <p>Hi there! You are in for exactly 5 questions.</p>
            <p data-testid="question-category">Category - {dataGame[i].category}</p>
            <p data-testid="question-text">Question - {dataGame[i].question}</p>
            <Answers
              correct={dataGame[i].correct_answer}
              incorrect={dataGame[i].incorrect_answers}
              i={i}
            />
            <p>Time you have left to answer: {count}</p>
          </div>
        )}
        {answeredOne && (
          <button data-testid="btn-next" onClick={this.next}>
            Próxima
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
