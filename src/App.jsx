/* eslint-disable no-unused-vars */
import "./App.css";
import Header from "./Header";
import React from "react";
import Sidebar from "./Sidebar";
import MiddleSec from "./MiddleSec";
import Right from "./Right";

function App() {
  return (
    <div className="app">
     <Header></Header>
<div className="app-body">
<Sidebar></Sidebar>
<MiddleSec></MiddleSec>
<Right></Right>
</div>

    </div>
  )
}

export default App
