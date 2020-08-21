import React from 'react';
// import propTypes from 'prop-types'
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './Header';

class Score extends React.Component {
  render() {
    // const { score, correct } = this.props;
    return (
      <div>
        <Header />
        <section>
          <h3>Feedback message:</h3>
          {/* {(correct >= 3) && <p data-testid="feedback-text">Mandou bem!</p>}
          {(correct < 3) && <p data-testid="feedback-text">Podia ser melhor...</p>} */}
        </section>
        <section>
          <h3>See your results:</h3>
          {/* <p data-testid="feedback-total-score">
          Your total score is {score} points</p>
          <p data-testid="feedback-total-question">
          ...Because you got {correct} answers right.</p> */}
        </section>
        <Link to="/">
          <button type="button" data-testid="btn-play-again">
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

// const mapStateToProps = (state) => ({
//   score: state.someReducer.name,
//   correct: state.someReducer.email,
// });

// Score.propTypes = {
//   score: PropTypes.number.isRequired,
//   correct: PropTypes.number.isRequired,
// };

// export default connect(mapStateToProps, null)(Score);

export default Score;
