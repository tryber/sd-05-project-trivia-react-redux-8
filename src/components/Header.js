import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { MD5 } from 'crypto-js';
// import alguma action from actions;

class Header extends React.Component {
  render() {
    const { hash, name } = this.props;
    return (
      <div>
        <img
          data-testid="header-profile-picture"
          alt=""
          src={`https://www.gravatar.com/avatar/${hash}`}
        />
        {/* a imagem default do gravatar jà vai naturalmente */}
        <p data-testid="header-player-name">{name}</p>
        {/* <p data-testid="header-score">Aqui vai ser {score} quando tivermos</p> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hash: MD5(state.dataPlayerReducer.email).toString(),
  name: state.dataPlayerReducer.name,
});

// const mapDispatchToProps = (dispatch) => ({
//   // myFunction: (e) => dispatch(myAction(e))
// });

Header.propTypes = {
  hash: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
