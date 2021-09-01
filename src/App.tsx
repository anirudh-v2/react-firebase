/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./module/Auth/Components/signIn-component";
import firebase from "firebase/app";
import "firebase/firestore";
import { Provider } from "react-redux";
import store from "./module/core/store/store";
import CustomDialog from "./module/Auth/Components/dialogue";
import About from "./module/Auth/Components/about-component";
import HelloWorld from "./module/Auth/Components/hello-world";
import Counter from "./module/Auth/Components/counter";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Users from "./module/Auth/Components/user";
import UserProfile from "./module/Auth/Components/user-profile";

var firebaseConfig = {
  apiKey: "AIzaSyAlGWPuXbNChZcbyV5ktZoEXFrBCayBDvA",
  authDomain: "firestore-dfcc6.firebaseapp.com",
  projectId: "firestore-dfcc6",
  storageBucket: "firestore-dfcc6.appspot.com",
  messagingSenderId: "37885547461",
  appId: "1:37885547461:web:f420d86c89d9aa1f0171ac",
  measurementId: "G-PWNZG4J4P5",
};

firebase.initializeApp(firebaseConfig);

function App() {
  const aboutRef = React.useRef<any>();

  function handleClick() {
    console.log(aboutRef.current.inputValue());
    aboutRef.current.focus();
  }

  return (
    <Router>
      <Provider store={store}>
        <nav>
          <Link to="/">Login </Link>
          <Link to="/Counter">Counter </Link>
          <Link to="/CustomDialog">CustomDialog </Link>
          <Link to="/Users">Users</Link>
        </nav>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Counter" component={Counter} />
            <Route path="/CustomDialog" component={CustomDialog}/>
            <Route path="/Users" exact component={Users}/>
            <Route path="/Users/:id" component={UserProfile}/>
            <Route />
          </Switch>

          {/* <button onClick={handleClick}>getData</button>
        <About ref={aboutRef}></About> */}
        </div>
      </Provider>
    </Router>
  );
}

export default App;
