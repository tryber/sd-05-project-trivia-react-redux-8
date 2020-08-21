import React from 'react';
import { connect } from 'react-redux';

class Answers extends React.Component {
  render() {
    const { correct, incorrect } = this.props;
    return (
      <div>
        <p>See answer options:</p>
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

export default connect(mapStateToProps, null)(Answers);
// export default Answers;
