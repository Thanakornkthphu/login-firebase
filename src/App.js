import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Album from "./components/album/Album";
import { UserAuthContextProvider } from "./context/UserAuthContext";
// import { signInWithGoogle, auth } from './services/firebase/firebase'

function App() {
  return (
    <UserAuthContextProvider>
      <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/album" element={<Album />} />
        </Routes>
      </Router>
      </div>
    </UserAuthContextProvider>
  );
}

export default App;
