// class App {
//   constructor() {
//     this.form = new Form(this.login.bind(this)),
//     this.user = new User(this.logout.bind(this))
//   }

//   logout = () => {
//     this.form.show()
//     this.user.hide()
//     this.user.clear()
//   }

//   login = (event) => {
//     event.preventDefault();
//     this.form.disableButton()
    

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
//               this.user.userData = {
//                 name,
//                 photoUrl
//               }
//               console.log('200')
//               this.user.putData()
//               this.user.show()
//             }
//           )

//           this.form.hide()
//           this.form.clear()
//         } else {
//           this.form.enableButton()
//         }
//       })
//       .catch(err => console.log(err));
//     }
// }


// new App()
