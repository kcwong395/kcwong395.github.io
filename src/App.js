import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./component/Nav/Navbar.js"
import Home from "./component/Home/Home.js"
import Intro from "./component/Intro/Intro.js"
import Profile from "./component/Profile/Profile.js"
import Contact from "./component/Contact/Contact.js"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Intro />
      <Profile />
      {/*
      <Project />
      */}
      <Contact />
    </div>
  )
}

export default App