import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBHjJbax_nwNNjyF_0WRNw_4FnH2u5f0Y0",
  authDomain: "photo-tagging-bd319.firebaseapp.com",
  projectId: "photo-tagging-bd319",
  storageBucket: "photo-tagging-bd319.appspot.com",
  messagingSenderId: "339072887144",
  appId: "1:339072887144:web:6319941c2af743c0230edd",
  measurementId: "G-NTF690V1RP",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;
