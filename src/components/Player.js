import React from 'react';
// import { connect } from 'react-redux';

class Player extends React.Component {
  render() {
    // const { myState, myFunction } = this.props;
    return (
      <div>
        <input type="text" placeholder="name" data-testid="input-player-name" />
        <input type="email" placeholder="email" data-testid="input-gravatar-email" />
        <button type="button" data-testid="btn-play">Jogar</button>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//  myState: state.myReducer.key,
// })

// const mapDispatchToProps = (dispatch) => ({
//  myFunction: (e) => dispatch(myAction(e))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Player);

export default Player;
