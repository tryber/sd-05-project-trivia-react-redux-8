import React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './Header';

class Score extends React.Component {
  render() {
    // const { myState, myFunction } = this.props
    return (
      <div>
        <Header />
        <section data-testid="feedback-text">Aqui vai aparecer mensagem de feedback</section>
        {/* A mensagem deve ser "Podia ser melhor..." caso a pessoa acerte menos de 3 perguntas
        (estado: nota da pessoa que vai estar no score)
        A mensagem deve ser "Mandou bem!" caso a pessoa acerte 3 perguntas ou mais */}
        <section>
          Informações relacionadas aos resultados obtidos
          {/* Placar / Perguntas acertadas */}
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
//   // myState: state.myReducer.key,
// })

// const mapDispatchToProps = (dispatch) => ({
//   // myFunction: (e) => dispatch(myAction(e))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Score);

export default Score;
