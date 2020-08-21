import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { answeredAction } from '../actions';

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // answeredOne: false,
    }
    this.answered = this.answered.bind(this);
  }

  answered() {
    const { answerRedux } = this.props;
    answerRedux();
    // this.setState({ answeredOne: true });
  }

  render() {
    const { correct, incorrect, answeredOne } = this.props;
    return (
      <div>
        <p>Choose between one of these answer options:</p>
        <button
          data-testid="correct-answer"
          onClick={this.answered}
          disabled={answeredOne}
          className={answeredOne ? "green-border" : null}
        >
          {correct}
        </button>
        {incorrect.map((answer, index) => {
          const { answeredOne } = this.props;
          return (
          <button
            key={answer}
            className={answeredOne ? "red-border" : null}
            data-testid={`wrong-answer-${index}`}
            onClick={this.answered}
            disabled={answeredOne}
          >
            {answer}
          </button>
        )}
        )}
        </div>
      )}
  }

const mapStateToProps = (state) => ({
  dataGame: state.fetchApis.dataGame,
  answeredOne: state.answeredReducer.answeredOne,
});

const mapDispatchToProps = (dispatch) => ({
  answerRedux: (e) => dispatch(answeredAction(e)),
});

Answers.propTypes = {
  correct: PropTypes.string.isRequired,
  incorrect: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
// export default Answers;
