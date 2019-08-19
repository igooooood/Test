import React, { Component } from 'react';

import App from './App'

class AppCoontainer extends Component {
  state = {
    mail: '',
    password: '',
    isErrorRequest: false,
    isButtonDisabled: false,
    isLoginSuccessful: false,
    user: {
      name: '',
      photoUrl: ''
    },
  };

  login = (event) => {
    event.preventDefault();
    this.setState({
      isButtonDisabled: true
    });
    

    fetch("https://us-central1-mercdev-academy.cloudfunctions.net/login", {
      "method": "POST",
      "headers": {
        "content-type": "application/json"
      },
      "body": JSON.stringify(
        {
          "email": this.state.mail,
          "password": this.state.password
        }
      )
    })
      .then(response => {
        if (response.status === 200) {
          response.json().then(
            ({ name, photoUrl }) => {
              this.setState({
                user: {
                  name,
                  photoUrl
                },
              });
            }
          )
          this.setState({
            isLoginSuccessful: true,
            isButtonDisabled: false,
            isErrorRequest: false,
            mail: '',
            password: ''
          });
        } else {
          this.setState({
            isErrorRequest: true,
            isButtonDisabled: false
          });
        }
      })
      .catch(err => console.log(err));
  };

  logout = () => {
    this.setState({
      isLoginSuccessful: false,
      user: {
        name: '',
        photoUrl: ''
      },
    });
  }

  handleChangeName = (event) => {
    this.setState({
      mail: event.target.value
    });
  }

  handleChangePassword = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    const { mail, password, isErrorRequest, isLoginSuccessful, isButtonDisabled, user } = this.state;
    return (
      <App
        userData={user}
        valueFieldMail={mail}
        valueFieldPassword={password}
        isLoginSuccessful={isLoginSuccessful}
        isErrorRequest={isErrorRequest}
        isButtonDisabled={isButtonDisabled}
        handleLogin={this.login}
        handleLogout={this.logout}
        handleChangeName={this.handleChangeName}
        handleChangePassword={this.handleChangePassword}
      />
    );
  }
}


export default AppCoontainer;
