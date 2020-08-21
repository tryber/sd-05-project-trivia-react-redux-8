import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import Answers from './Answers';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
    }
    this.next = this.next.bind(this);
  }

  next() {
    const { i } = this.state;
    this.setState = ({i: (i+1)});
  }

  render() {
    const { dataGame, isFetching } = this.props;
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
            />
            <br />
            <button data-testid="btn-next" onClick={this.next}>Próxima</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataGame: state.fetchApis.dataGame,
  isFetching: state.fetchApis.isFetching,
});

// const mapDispatchToProps = (dispatch) => ({
//   // myFunction: (e) => dispatch(myAction(e))
// });

Game.propTypes = {
  dataGame: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(Game);
// export default Game;
