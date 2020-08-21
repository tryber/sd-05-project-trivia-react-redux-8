import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answeredOne: false,
    }
    this.answered = this.answered.bind(this);
  }

  answered() {
    this.setState({ answeredOne: true });
  }

  render() {
    const { correct, incorrect } = this.props;
    const { answeredOne } = this.state;
    return (
      <div>
        <p>Choose between one of these answer options:</p>
        <button
          data-testid="correct-answer"
          onClick={this.answered}
          disabled={answeredOne}
        >
          {correct}
        </button>
        {incorrect.map((answer, index) => (
          <button
            key={answer}
            data-testid={`wrong-answer-${index}`}
            onClick={this.answered}
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
