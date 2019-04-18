import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyD3C5QBVa7HBsbJz8FprS_PQ1KegTD98Fw",
  authDomain: "agtrack-acfe6.firebaseapp.com",
  databaseURL: "https://agtrack-acfe6.firebaseio.com",
  projectId: "agtrack-acfe6",
  storageBucket: "agtrack-acfe6.appspot.com",
  messagingSenderId: "1076199094064"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// //child_removed
// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_added fires once for all children already stored, then reruns when something new is added
// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];

//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref("expenses").push({
//   description: "Rent",
//   note: "Due within first 5 days of the month",
//   amount: 350,
//   createdAt: 1
// });

// database.ref("notes").push({
//   title: "Course Topics",
//   body: "React Native, Angular, Python"
// });

//database.ref("notes/-LcSOj-Rw0xILJ-c0W4L").remove();

// database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company} `);
// });

// const onValueChange = database.ref().on(
//   "value",
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => {
//     console.log("Error with data fetching", e);
//   }
// );

// setTimeout(() => {
//   database.ref("age").set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange); //use off to unsubscribe to pages
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(30);
// }, 10500);

// database
//   .ref("location/city")
//   .once("value") //fetch data once
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log("error fetching data", e);
//   });

// database
//   .ref()
//   .set({
//     //set returns a promise!
//     name: "Emily Bossiere",
//     age: 23,
//     isSingle: false,
//     job: {
//       title: "software developer",
//       company: "Google"
//     },
//     location: {
//       city: "Merced",
//       country: "USA"
//     }
//   })
//   .then(() => {
//     console.log("data is saved");
//   })
//   .catch(e => {
//     console.log("This failed.", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("data was removed");
//   })
//   .catch(e => {
//     console.log("Did not remove data", e);
//   });
