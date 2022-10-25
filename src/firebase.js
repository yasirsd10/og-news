import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


export const firebaseConfig = {
    apiKey: "AIzaSyAC04ZphOPvjj8ghW2gnbAcbas3Aso3ntQ",
    authDomain: "ognews-67cee.firebaseapp.com",
    projectId: "ognews-67cee",
    storageBucket: "ognews-67cee.appspot.com",
    messagingSenderId: "824274324726",
    appId: "1:824274324726:web:9346f8855fd108719d30d7",
    measurementId: "G-S4846VSLE3"
  };

  export  const firebaseApp = initializeApp(firebaseConfig);
  export const db = getFirestore(firebaseApp);