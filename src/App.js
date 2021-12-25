import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import {Aim} from "./Components/Aim";
import {AboutUs} from "./Components/AboutUs";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
      <Aim/>
      <AboutUs/>
    </>
  );
}

export default App;
