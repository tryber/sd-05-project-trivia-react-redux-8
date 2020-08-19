import React from 'react';
// import { connect } from 'react-redux';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.ableButton = this.ableButton.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.checkForm();
    this.ableButton();
  }

  checkForm() {
    const { name, email } = this.state;
    if (!name && !email) {
      this.setState({ checked: true });
    }
  }

  ableButton() {
    const btnPlay = document.getElementsByClassName('btn-play')[0];
    if (this.state.checked === false) {
      btnPlay.disabled = true;
    } else {
      btnPlay.disabled = false;
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
        <button className="btn-play" type="button" data-testid="btn-play" disabled>Jogar</button>
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
