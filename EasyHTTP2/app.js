const http = new EasyHTTP();

//Get Users
// http.get("https://jsonplaceholder.typicode.com/users")
//   .then(data => {
//      console.log(data)
//     })
//   .catch( err => {
//      console.log(err)
//     });

// Create DATA
const data = {
  name: "John Doe",
  username: "JD",
  email: "johnD@gmail.com",
};

//POST Users
// http.post("https://jsonplaceholder.typicode.com/users" , data)
//   .then(data => {
//      console.log(data)
//     })
//   .catch( err => {
//      console.log(err)
//     });

//PUT (PATCH) (update) Users
// http
//   .put("https://jsonplaceholder.typicode.com/users/3", data)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//DELETE User
http
.delete("https://jsonplaceholder.typicode.com/users/1")
.then((data) => {
  console.log(data);
})
.catch((err) => {
  console.log(err);
});
