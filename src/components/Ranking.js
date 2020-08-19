import React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Ranking extends React.Component {
  render() {
    // const { myState, myFunction } = this.props
    return (
      <div>
        <h1 data-testid="ranking-title">Here is the Great Trivia Ranking!</h1>
        <Link to="/">
          <button type="button" data-testid="btn-go-home">
            Voltar para o inicio
          </button>
        </Link>
        {/* Apresentação do ranking
        Lista criada via map: cada <li> com infos dos Headers de II e III. 
        Ou seja Gravatar, Nome (data-testid=”player-name-${index}”) 
        e pontuaçao (data-testid⁼”player-score-${index}”)
        Ranking no localStorage. */}
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

// export default connect(mapStateToProps, mapDispatchToProps)(Ranking);

export default Ranking;
