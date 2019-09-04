// class App {
//   constructor() {
//     this.userBlock = null
//     this.userAvatar = null
//     this.userName = null
//     this.userButton = null

//     this.form = null
//     this.fieldMail = null
//     this.fieldPassword = null
//     this.formButton = null

//     this.userData = {
//       name: '',
//       photoUrl: ''
//     }

//     this.mail = ''
//     this.password = ''

//     this.init()
//   }

//   onChange = (event, nameValue) => {
//     this[nameValue] = event.target.value
//   }
  
//   login = (event) => {
//     event.preventDefault();
//     this.formButton.setAttribute("disabled", true)
    

//     fetch("https://us-central1-mercdev-academy.cloudfunctions.net/login", {
//       "method": "POST",
//       "headers": {
//         "content-type": "application/json"
//       },
//       "body": JSON.stringify(
//         {
//           "email": "user@example.com",
//           "password": "mercdev"
//         }
//       )
//     })
//       .then(response => {
//         if (response.status === 200) {
//           response.json().then(
//             ({ name, photoUrl }) => {
//               this.userData = {
//                 name,
//                 photoUrl
//               }
//               this.userAvatar.setAttribute("src", this.userData.photoUrl)
//               this.userAvatar.setAttribute("alt", this.userData.name)
//               this.userName.innerText = this.userData.name
//             }
//           )
//           // работа с формой
//           this.form.classList.add("form--hide")
//           this.formButton.removeAttribute("disabled")
//           this.fieldMail.value = ''
//           this.fieldPassword.value = ''
//           this.mail = ''
//           this.password = ''

//           // работа с UserBlock
//           this.userBlock.classList.add("user--show")
//         } else {
//           this.formButton.removeAttribute("disabled")
//         }
//       })
//       .catch(err => console.log(err));
//   };

//   logout = () => {
//     this.form.classList.remove("form--hide")
  
//     this.userBlock.classList.remove("user--show")
//     // возможно нужно убрать
//     this.userData = {
//       name: '',
//       photoUrl: ''
//     }
//   }

//   initForm = () => {
//     this.form = document.getElementById("form");
//     this.fieldMail = document.getElementById("mail");
//     this.fieldPassword = document.getElementById("password");
//     this.formButton = document.getElementById("btn-login");

//     this.form.addEventListener("submit", this.login);
//     this.fieldMail.addEventListener("change", (event) => this.onChange(event, 'mail'));
//     this.fieldPassword.addEventListener("change", (event) => this.onChange(event, 'password'));
//   }

//   initUserBlock = () => {
//     this.userBlock = document.getElementById("user");
//     this.userAvatar = document.getElementById("user-avatar");
//     this.userName = document.getElementById("user-name");
//     this.userButton = document.getElementById("btn-logout");

//     this.userButton.addEventListener("click", this.logout);
//   }

//   init = () => {
//     this.initForm()
//     this.initUserBlock()
//   }
// }



// // TODO: просмотреть запятые и всё всё всё
