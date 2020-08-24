import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearPlayerAction } from '../actions';
import Header from './Header';

class Score extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     assertions: 0,
  //     score: 0,
  //   };
  //   this.storageIntoObject = this.storageIntoObject.bind(this);
  // }

  // componentDidMount() {
  //   this.storageIntoObject();
  // }

  // storageIntoObject() {
  //   const newData = JSON.parse(localStorage.getItem('state'));
  //   this.setState({
  //     assertions: newData.player.assertions,
  //     score: newData.player.score,
  //   });
  // }

  render() {
    const { clearPlayer, assertions, score } = this.props;
    // const { assertions, score } = this.state;
    return (
      <div>
        <Header />
        <section>
          <h3>Feedback message:</h3>
          {(assertions >= 3) && <p data-testid="feedback-text">Mandou bem!</p>}
          {(assertions < 3) && <p data-testid="feedback-text">Podia ser melhor...</p>}
        </section>
        <section>
          <h3>See your results:</h3>
          <p>Your total score is <span data-testid="feedback-total-score">{score}</span> points</p>
          <p>
            You got
            <span data-testid="feedback-total-question">{assertions}</span>
            answers right.
          </p>
        </section>
        <Link to="/">
          <button type="button" data-testid="btn-play-again" onClick={() => clearPlayer('', '', 0, 0)}>
            Jogar novamente
          </button>
        </Link>
        <Link to="/ranking">
          <button type="button" data-testid="btn-ranking">
            Ver ranking
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.dataPlayerReducer.score,
  assertions: state.dataPlayerReducer.assertions,
});

const mapDispatchToProps = (dispatch) => ({
  clearPlayer: (n, e, s, a) => dispatch(clearPlayerAction(n, e, s, a)),
});

Score.propTypes = {
  score: propTypes.number.isRequired,
  assertions: propTypes.number.isRequired,
  clearPlayer: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Score);
