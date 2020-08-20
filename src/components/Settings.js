import React from 'react';
// import { connect } from 'react-redux';

class Settings extends React.Component {
  render() {
    // const { myState, myFunction } = this.props
    return (
      <div>
        <h1 data-testid="settings-title">Trivia Settings</h1>
        {/* Aqui jà veremos se desenvolvemos mais fundo os settings
        no final do projeto (opcional) */}
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

export default Settings;
