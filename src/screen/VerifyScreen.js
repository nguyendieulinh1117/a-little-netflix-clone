import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Nav from "../Nav";
import "./VerifyScreen.css";
function VerifyScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="verifyScreen">
      <Nav />
      <div className="verifyScreen__body">
        <div className="verifyScreen__report">
          <h1>Verify your email address!!!</h1>
          <p>
            You've entered <strong>{user.email}</strong> as the email address
            for your account. Please verify this email address
          </p>
        </div>
      </div>
    </div>
  );
}

export default VerifyScreen;
