import React from 'react';
// import { connect } from 'react-redux';
// import alguma action from actions;

class Header extends React.Component {
  render() {
    // const { myState, myFunction } = this.props
    return (
      <div>
        <img data-testid="header-profile-picture" alt="" />
        <p data-testid="header-player-name">Aqui integrar nome</p>
        <div data-testid="header-score">Aqui integrar placar</div>
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

export default Header;
