import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Answers extends React.Component {
  render() {
    const { correct, incorrect } = this.props;
    return (
      <div>
        <p>Choose between one of these answer options:</p>
        <button data-testid="correct-answer">{correct}</button>
        {incorrect.map((answer, index) => (
          <button
            key={answer}
            data-testid={`wrong-answer-${index}`}
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
});

// const mapDispatchToProps = (dispatch) => ({
//   // myFunction: (e) => dispatch(myAction(e))
// });

Answers.propTypes = {
  correct: PropTypes.string.isRequired,
  incorrect: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(Answers);
// export default Answers;
