import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYZA3jXdDFmuSVOLH5Qgf3k29MyJxe8lI",
  authDomain: "alaintransport-bec56.firebaseapp.com",
  databaseURL: "https://alaintransport-bec56.firebaseio.com",
  projectId: "alaintransport-bec56",
  storageBucket: "alaintransport-bec56.appspot.com",
  messagingSenderId: "639059404036"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);
export default firebase;
