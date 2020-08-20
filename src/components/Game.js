import React from 'react';
// import { connect } from 'react-redux';
import Header from './Header';

class Game extends React.Component {
  render() {
    // const { myState, myFunction } = this.props
    return (
      <div>
        <Header />
        {/* Pergunta e suas alternativas (todo interdependente até 8.)
        Recebidas da API do Trivia em ordem aleatoria, usar button para alternativas.
        Só deve ser possível escolher uma resposta correta por pergunta
        Ao clicar em uma resposta, a resposta correta deve ficar verde e as incorretas, vermelhas
        A pessoa que joga tem 30 segundos para responder cada pergunta
        Ao clicar na resposta correta, pontos devem ser somados no placar da pessoa que está jogando
        Após a resposta ser dada, o botão "Próxima" deve aparecer
        A pessoa que joga deve responder 5 perguntas no total  */}
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   // myState: state.myReducer.key,
// })

// const mapDispatchToProps = (dispatch) => ({
//   // myFunction: (e) => dispatch(myAction(e))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Game);

export default Game;
