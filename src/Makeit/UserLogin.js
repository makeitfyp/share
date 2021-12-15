import React, { useState } from "react";
import "./UserLogin.css";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";


import { useNavigate } from "react-router-dom";

function UserLogin() {
  /* const logintoApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoUrl,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Name is Required");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilepic,
          })

          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilepic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  }; */
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  return (

    <div className="login">
      <img src="./logo.png" alt="" />
      <h1>WELCOME TO MAKEIT</h1>
      <form>
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email"
          type="email"
        ></input>
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
          type="password"
        ></input>
        <button type="submit" onClick={() => navigate("/Home")}>
          Login
        </button>
      </form>
      <button className="button2" type="submit">
        Login With Google
      </button>
      <span className="forgot" onClick={() => navigate("/Forgetpass")}>Forgot Password?</span>

      <p>
        Not a Member?{" "}
        <span onClick={() => navigate("/UserRegister")} className="login_register">
          Register now
        </span>
      </p>
    </div>
  );
}
export default UserLogin;
