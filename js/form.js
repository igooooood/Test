class Form {
  constructor(loogin) {
    this.element = null
    this.fieldMail = null
    this.fieldPassword = null
    this.formButton = null
    this.caption = null

    this.mail = ''
    this.password = ''

    this.loogin = loogin

    this.init()
  }

  onChangeField = (event, nameValue) => {
    this[nameValue] = event.target.value
  }

  hide = () => {
    this.element.classList.add("form--hide")
  }

  show = () => {
    this.element.classList.remove("form--hide")
  }

  clear = () => {
    this.formButton.removeAttribute("disabled")
    this.fieldMail.value = ''
    this.fieldPassword.value = ''
    this.mail = ''
    this.password = ''
  }

  disableButton = () => {
    this.formButton.setAttribute("disabled", true)
  }

  enableButton = () => {
    this.formButton.removeAttribute("disabled")
  }

  addErrorStatusFields = () => {
    this.fieldMail.classList.add("field--error")
    this.fieldPassword.classList.add("field--error")
  }

  removeErrorStatusFields = () => {
    this.fieldMail.classList.remove("field--error")
    this.fieldPassword.classList.remove("field--error")
  }

  showCaption = () => {
    this.caption.classList.add("caption--show")
  }

  hideCaption = () => {
    this.caption.classList.remove("caption--show")
  }

  init = () => {
    this.element = document.getElementById("form");
    this.fieldMail = document.getElementById("mail");
    this.fieldPassword = document.getElementById("password");
    this.formButton = document.getElementById("btn-login");
    this.caption = document.getElementById("caption");

    this.element.addEventListener("submit", this.loogin);
    this.fieldMail.addEventListener("change", (event) => this.onChangeField(event, 'mail'));
    this.fieldPassword.addEventListener("change", (event) => this.onChangeField(event, 'password'));
  }
}
