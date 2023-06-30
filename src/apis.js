// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore/lite";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSJAbhydwUSrptIc9iCaY9NywBbHfDHMs",
  authDomain: "vanlife-b0b5a.firebaseapp.com",
  projectId: "vanlife-b0b5a",
  storageBucket: "vanlife-b0b5a.appspot.com",
  messagingSenderId: "444724953980",
  appId: "1:444724953980:web:f785790b2e8cf890e45af9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getVans = async () => {
  const collectionRef = collection(db, "vans");
  const colRefSnapshot = await getDocs(collectionRef);
  const vansData = colRefSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vansData;
};

export const getVan = async (id) => {
  const docRef = doc(db, "vans", id);
  const docRefSnapshot = await getDoc(docRef);
  return {
    ...docRefSnapshot.data(),
    id: docRefSnapshot.id,
  }
};

export const getHostVans = async () => {
  const collectionRef = collection(db, "vans");
  const colectionQuery = query(collectionRef, where("hostId", "==", "123"));
  const colRefSnapshot = await getDocs(colectionQuery);
  const hostVansData = colRefSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return hostVansData;
}

export const loginUser = async (credentials) => {
  const response = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  if(!response.ok) {
    throw {
      message: data.message,
      status: response.status,
      statusText: response.statusText,
    };
  }
  return null
}

// export const loginUser = (credentials) => {
//   const { email, password } = credentials;
//   if (email !== "a@a.com" && password !== "aqwx") {
//     throw { message: "No account matching those credentials!" };
//   }
//   return null;
// };
