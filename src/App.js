import "./App.css";
import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import ylyticlogo from "./assets/ylytic-logo.png";
function App() {
  return (
    <div className="container">
      <div className="heading">
        <h1>Weekly Subscribers Gain and Loss</h1>
        <img src={ylyticlogo} width={"150px"} height={"70px"} />
      </div>
      <div className="subheading">
        <h2>
          Takeaway : Majority of Subscribers are gained in spike (viral) events
          that mostly occured in Apr-Jun '22
        </h2>
      </div>

      <Chart />
    </div>
  );
}
export default App;
