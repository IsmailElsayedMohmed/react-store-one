import firebase from "firebase";
import axios from "axios";
const firebaseConfig = {
  apiKey: "AIzaSyD1M_hctW-heDq1hZynoPrn_ypvNZ-4XIc",
  authDomain: "first-e-commerce-33108.firebaseapp.com",
  projectId: "first-e-commerce-33108",
  storageBucket: "first-e-commerce-33108.appspot.com",
  messagingSenderId: "291644143618",
  appId: "1:291644143618:web:c35254a064bcc829f94f1b",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const Provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, Provider, storage };
export default db;

// const som3a = async (params) => {
//   const { data } = await axios("https://course-api.com/react-store-products");
//   await db.collection("prodcuts").add({
//     data,
//   });
// };
// som3a();
