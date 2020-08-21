import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class Game extends React.Component {
  render() {
    // const { dataCategory, dataQuestion, dataCorrectAnswer, dataWrongAnswer, fetchTrivia } = this.props;
    const { dataGame } = this.props;
    return (
      <div>
        <Header />
        <section>
          {/* <p data-testid="question-category">{dataCategory}</p>
          <p data-testid="question-text">{dataQuestion}</p>
          <div>
            {dataWrongAnswer.map((answer, index) => (<button data-testid={`wrong-answer-${index}`}>{dataWrongAnswer[index]}</button>))}
          </div>
          <button data-testid="correct-answer">{dataCorrectAnswer}</button> */}
          {dataGame}
        </section>
      </div>
    );
  }
}

// para acessar o objeto do reducer fetchTrivia
// que tem a chave dataGame cujo valor é recebido pela api
// sabendo que dataGame é um array de 5 objetos dentro dos quais tem perguntas e respostas
// Sugestao:
const mapStateToProps = (state) => ({
  dataGame: state.fetchTrivia.dataGame,
  // dataCategory: state.fetchTrivia.dataGame.results.category,
  // dataQuestion: state.fetchTrivia.dataGame.results.question,
  // dataCorrectAnswer: state.fetchTrivia.dataGame.results.correct_answer,
  // dataWrongAnswer: state.fetchTrivia.dataGame.results.incorrect_answer[0]
});

// const mapDispatchToProps = (dispatch) => ({
//   // myFunction: (e) => dispatch(myAction(e))
// });

export default connect(mapStateToProps, null)(Game);
// export default Game;