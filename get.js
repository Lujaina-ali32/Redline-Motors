import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAQsdKOlG6fcFAw1UxXA4qBSL3_OrjUCEI",
  authDomain: "real-time-database-4c3c2.firebaseapp.com",
  projectId: "real-time-database-4c3c2",
  storageBucket: "real-time-database-4c3c2.firebasestorage.app",
  messagingSenderId: "811874664813",
  appId: "1:811874664813:web:26044f50e365eeeb845a64",
  measurementId: "G-T4WJZQ2YYL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function popup(type, message) {
  Swal.fire({
    icon: type,
    title: message,
    timer: 1800,
    showConfirmButton: false,
    background: "#1a1a1a",
    color: "#fff",
  });
}

const email = document.getElementById("email");
const password = document.getElementById("password");

document.getElementById("signup").addEventListener("click", signupUser);
document.getElementById("login").addEventListener("click", loginUser);
document.getElementById("google-btn").addEventListener("click", googleLogin);


async function signupUser() {
  if (!email.value || !password.value) {
    return popup("error", "Enter email & password");
  }

  try {
    const result = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const username = email.value.split("@")[0];

    await updateProfile(result.user, { displayName: username });

    popup("success", `Welcome ${username}!`);
    setTimeout(() => (window.location.href = "index.html"), 1200);

  } catch (e) {
    popup("error", e.message);
  }
}

async function loginUser() {
  if (!email.value || !password.value) {
    return popup("error", "Enter email & password");
  }

  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);

    const username = email.value.split("@")[0];
    popup("success", `Welcome ${username}!`);
    
    setTimeout(() => (window.location.href = "index.html"), 1200);

  } catch (e) {
    popup("error", e.message);
  }
}

async function googleLogin() {
  const provider = new GoogleAuthProvider();

  try {
    const res = await signInWithPopup(auth, provider);

    popup("success", `Welcome ${res.user.displayName}!`);
    setTimeout(() => (window.location.href = "index.html"), 1200);

  } catch (e) {
    popup("error", e.message);
  }
}

onAuthStateChanged(auth, (user) => {
console.log("User status:", user ? "Logged in" : "No user");
});
