import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";

import { auth } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { UseStateValue } from "./StateProvider";

//we need a listener to keep track of who is signed in at the current instance
function App() {
  const [{}, dispatch] = UseStateValue();
  useEffect(() => {
    //will only run once when the app component loads ( ==> [])
    onAuthStateChanged(auth, (authUser) => {
      console.log("The user is -> ", authUser);
      if (authUser) {
        //the user just logged in / was already logged in

        dispatch({
          //it will dispatch the user into the data layer everytime they log in
          //remove the user from the data layer every time they log out
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is not logged in/logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  //[user, basket] will load in case of any change to either of these, [] will work only once though

  return (
    <BrowserRouter>
      {/* //bem convention */}
      <div className="app">
        {/* Render the home and header based on the route they are in */}

        {/* <h1>Hello there</h1> */}
        {/* <Header /> */}
        <Routes>
          {/* Header */}
          {/* <Route path='/' element={<Home/>} /> */}
          {/* <Route path = '/' element = {<Header/>}/> */}
          {/* <Route path="/test">
          <Route path="/:testNo" element={} />
        
        </Route> */}
          <Route path="/login" element={<Login />}></Route>
          {/* how to pass html element in the element */}
          {/* <Route
            path="/checkout"
            element={
              // <h1>Checkout pe hai bhai</h1>

              <Checkout />
            } */}
          {/* /> */}

          <Route
            path="/checkout"
            element={
              //this method of wrapping up everything in <></> is very important
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          {/* Home */}
          {/* Default route should be at the bottom */}
          {/* <Route path = '/'> */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

          {/* </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
