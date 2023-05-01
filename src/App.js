import React from "react";
import ReactDOM from "react-dom";
import classes from "./App.module.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import Section3 from "./Components/Section3/Section3";
import Section4 from "./Components/Section4/Section4";
import Section5 from "./Components/Section5/Section5";
import Section7 from "./Components/Section7/Section7";
import Section8 from "./Components/Section8/Section8";
function App() {
  return (
    <div className={classes.default}>
      <Header></Header>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      {/* <Section4></Section4> */}
      {/* <Section5></Section5> */}
      <Section7></Section7>
      <Section8></Section8>
      <Footer></Footer>
    </div>
  );
}

export default App;
