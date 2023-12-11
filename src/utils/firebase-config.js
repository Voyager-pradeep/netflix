import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDcZ3o2KQrr9TtOdhcptnI6Zx8p1tCUkTQ",
  authDomain: "netflix-9a372.firebaseapp.com",
  projectId: "netflix-9a372",
  storageBucket: "netflix-9a372.appspot.com",
  messagingSenderId: "314286819886",
  appId: "1:314286819886:web:30ac9c5c60b45f7fd32dbf",
  measurementId: "G-NKM6W5NXWX",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
