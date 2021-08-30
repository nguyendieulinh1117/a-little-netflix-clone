import React, { useRef, useState } from "react";
import { auth, providerGoogle } from "../firebase";
import "./SignupScreen.css";
function SignupScreen() {
  const [hasAccount, setHasAccount] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const fullnameRef = useRef(null);
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const clearErrors = () => {
    setEmailErr("");
    setPasswordErr("");
  };
  const register = (e) => {
    e.preventDefault();
    clearErrors();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        auth.currentUser
          .updateProfile({ displayName: fullnameRef.current.value })
          .then(() => {
            auth.currentUser.sendEmailVerification();
          })
          .catch((error) => {});
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailErr(err.message);
            break;
          case "auth/weak-password":
            setPasswordErr(err.message);
            break;
          default:
            break;
        }
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    clearErrors();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {})
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailErr(err.message);
            break;
          case "auth/wrong-password":
            setPasswordErr(err.message);
            break;
          default:
            break;
        }
      });
  };

  const signInWithGoogle = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(providerGoogle)
      .then((result) => {
        let credential = result.credential;
        let token = credential.accessToken;
        var user = result.user;
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signupScreen">
      {hasAccount ? (
        <form>
          <h1>Sign In</h1>
          <input ref={emailRef} type="email" placeholder="Email" />
          <p>{emailErr}</p>
          <input ref={passwordRef} type="password" placeholder="Password" />
          <p>{passwordErr}</p>
          <button onClick={signIn} type="submit">
            Sign In
          </button>
          <button onClick={signInWithGoogle} className="signupScreen__google">
            Sign In with Google
          </button>
          <h4>
            <span className="signupScreen__gray">New to Netflix? </span>
            <span
              className="signupScreen__link"
              onClick={() => {
                setHasAccount(!hasAccount);
              }}
            >
              Sign Up now.
            </span>
          </h4>
        </form>
      ) : (
        <form>
          <h1>Sign Up</h1>
          <input ref={fullnameRef} type="text" placeholder="Full name" />
          <p></p>
          <input ref={emailRef} type="email" placeholder="Email" />
          <p>{emailErr}</p>
          <input ref={passwordRef} type="password" placeholder="Password" />
          <p>{passwordErr}</p>
          <button onClick={register} type="submit">
            Create Account
          </button>
          <h4>
            <span className="signupScreen__gray">
              Already have an account?{" "}
            </span>
            <span
              className="signupScreen__link"
              onClick={() => {
                setHasAccount(!hasAccount);
              }}
            >
              Sign In now.
            </span>
          </h4>
        </form>
      )}
    </div>
  );
}

export default SignupScreen;
