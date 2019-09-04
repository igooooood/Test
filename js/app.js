class App {
  constructor() {
    this.form = new Form(this.login.bind(this)),
    this.user = new User(this.logout.bind(this))
  }

  login = (event) => {
    event.preventDefault();
    this.form.disableButton()
    

    fetch("https://us-central1-mercdev-academy.cloudfunctions.net/login", {
      "method": "POST",
      "headers": {
        "content-type": "application/json"
      },
      "body": JSON.stringify(
        {
          "email": this.form.mail,
          "password": this.form.password
        }
      )
    })
      .then(response => {
        if (response.status === 200) {
          response.json().then(
            ({ name, photoUrl }) => {
              this.user.userData = {
                name,
                photoUrl
              }
              this.user.putData()
              this.user.show()
            }
          )
          this.form.removeErrorStatusFields()
          this.form.hideCaption()
          this.form.hide()
          this.form.clear()
        } else {
          this.form.enableButton()
          this.form.addErrorStatusFields()
          this.form.showCaption()
        }
      })
      .catch(err => console.log(err));
    }

    logout = () => {
      this.form.show()
      this.user.hide()
      this.user.clear()
    }  
}

new App();
