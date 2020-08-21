import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import Answers from './Answers';
import { clearAction } from '../actions';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
    };
    this.next = this.next.bind(this);
  }

  next() {
    const { clearAnswered } = this.props;
    clearAnswered();
    const { i } = this.state;
    if (i < 4) {
      return this.setState({ i: (i + 1) });
    } else if (i === 4) {
      return this.setState({ i: 0 });
    }
    return this.setState({ i });
  }

  render() {
    const { dataGame, isFetching, answeredOne } = this.props;
    const { i } = this.state;
    return (
      <div>
        {isFetching && <p>Loading...</p>}
        {!isFetching && dataGame.length > 0 && (
          <div>
            <Header />
            <p data-testid="question-category">Category - {dataGame[i].category}</p>
            <p data-testid="question-text">Question - {dataGame[i].question}</p>
            <Answers
              correct={dataGame[i].correct_answer}
              incorrect={dataGame[i].incorrect_answers}
              i={i}
            />
            </div>
        )}
        {answeredOne && (
        <button
          data-testid="btn-next"
          onClick={this.next}
        >
          Próxima
        </button>
        )}
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
});

Game.propTypes = {
  dataGame: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  answeredOne: PropTypes.bool.isRequired,
  clearAnswered: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
// export default Game;
