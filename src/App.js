import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screen/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screen/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screen/ProfileScreen";
import VerifyScreen from "./screen/VerifyScreen";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
            verify: userAuth.emailVerified,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubcribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : !user.verify ? (
          <VerifyScreen />
        ) : (
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/profile" component={ProfileScreen} />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
