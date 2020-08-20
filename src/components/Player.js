import React from 'react';
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { dataPlayerAction, fetchTokenThunk, fetchTriviaThunk } from '../actions';
import LinkSettings from './LinkSettings';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      goToGame: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.provokeApis = this.provokeApis.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  provokeApis() {
    const { getDataPlayer, getToken, getTrivia } = this.props;
    // const { token } = this.props;
    const { name, email } = this.state;
    getDataPlayer(name, email);
    // getToken();
    // getTrivia(token);
    getToken().then(({ token }) => {
      getTrivia(token);
      localStorage.setItem('token', token);
    });
  }

  render() {
    const { name, email, goToGame } = this.state;
    return (
      <div>
        {goToGame && <Redirect to="/game" />}
        <input
          type="text"
          placeholder="name"
          data-testid="input-player-name"
          name="name"
          onChange={this.handleChange}
        />
        <input
          type="email"
          placeholder="email"
          data-testid="input-gravatar-email"
          name="email"
          onChange={this.handleChange}
        />
        <button
          type="button"
          data-testid="btn-play"
          disabled={!(name && email)}
          onClick={this.provokeApis}
        >
          Jogar
        </button>
        <LinkSettings />
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   token: state.fetchToken.token,
// });
// o fetch de APIs dentro da function disparada pelo botao jogar tem que ocorrer para varios jogadores, portanto, escrevemos a promise sem usar esse estado para maior flexibilidade.

const mapDispatchToProps = (dispatch) => ({
  getDataPlayer: (name, email) => dispatch(dataPlayerAction(name, email)),
  getToken: (e) => dispatch(fetchTokenThunk(e)),
  getTrivia: (tokn) => dispatch(fetchTriviaThunk(tokn)),
});

Player.propTypes = {
  token: propTypes.string.isRequired,
  getDataPlayer: propTypes.func.isRequired,
  getToken: propTypes.func.isRequired,
  getTrivia: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Player);
