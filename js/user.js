class User {
  constructor(logout) {
    this.element = null
    this.userAvatar = null
    this.userName = null
    this.userButton = null

    this.userData = {
      name: '',
      photoUrl: ''
    }

    this.logout = logout

    this.init()
  }

  hide = () => {
    this.element.classList.remove("user--show")
  }

  show = () => {
    this.element.classList.add("user--show")
  }

  clear = () => {
    this.userData = {
      name: '',
      photoUrl: ''
    }
  }

  putData = () => {
    this.userAvatar.setAttribute("src", this.userData.photoUrl)
    this.userAvatar.setAttribute("alt", this.userData.name)
    this.userName.innerText = this.userData.name
  }

  init = () => {
    this.element = document.getElementById("user");
    this.userAvatar = document.getElementById("user-avatar");
    this.userName = document.getElementById("user-name");
    this.userButton = document.getElementById("btn-logout");

    this.userButton.addEventListener("click", this.logout);
  }
}
