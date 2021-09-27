import axios from "axios";
import { Link } from 'react-router-dom'
import { useRef } from "react";
import "./login.css";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
  let isFetching = false;

  const handleClick = async(e) => {
    e.preventDefault();
    const userCredential =
        { email: email.current.value, password: password.current.value };

    isFetching = true;
    try {
        // const res = await axios.post("/auth/login", userCredential);
        localStorage.setItem("user", userCredential.email);
        window.location.href = "/";
    } catch (err) {
        window.alert(err);
    }
    isFetching = false;
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Travel With</h3>
          <span className="loginDesc">
            Travel around the world with witty Travel With.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox1" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register" className="loginLink">
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
