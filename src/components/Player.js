import React from 'react';
// import { connect } from 'react-redux';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      btn: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkForm = this.checkForm.bind(this);
    // this.ableButton = this.ableButton.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.checkForm();
  }

  checkForm() {
    const { name, email } = this.state;
    if (!name && !email) {
      this.setState({ btn: false });
    }
  }
  
  render() {
    // const { myState, myFunction } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="name"
          data-testid="input-player-name"
          name="name"
          onChange={this.handleChange}
        />
        <input
          type="email"
          placeholder="email" data-testid="input-gravatar-email"
          name="email"
          onChange={this.handleChange}
        />
        <button className="btn-play" type="button" data-testid="btn-play" disabled={this.state.btn}>Jogar</button>
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
