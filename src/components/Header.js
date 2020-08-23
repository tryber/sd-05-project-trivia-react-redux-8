import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { MD5 } from 'crypto-js';

class Header extends React.Component {
  render() {
    const { name, email, score } = this.props;
    const hash = MD5(email).toString();
    return (
      <div>
        <img
          data-testid="header-profile-picture"
          alt=""
          src={`https://www.gravatar.com/avatar/${hash}`}
        />
        {/* a imagem default do gravatar jà vai naturalmente */}
        <p data-testid="header-player-name">{name}</p>
        <p data-testid="header-score">Placar: {score}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.dataPlayerReducer.name,
  email: state.dataPlayerReducer.email,
  score: state.dataPlayerReducer.score,
});

Header.propTypes = {
  name: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  score: propTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
