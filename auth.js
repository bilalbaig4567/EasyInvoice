import {
  auth,
  provider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "./firebase.js";

window.signUp = async function () {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  let confirm = document.getElementById("confirmPassword").value;

  if (email === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("✅ Account Created Successfully!");
  } catch (error) {
    alert(error.message);
  }
};

window.loginUser = async function () {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  if (email === "" || password === "") {
    alert("Please enter email and password");
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("✅ Login Successful!");
  } catch (error) {
    alert(error.message);
  }
};
