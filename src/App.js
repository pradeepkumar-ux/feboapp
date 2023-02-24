import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./MainPage";
import GuestListPage from "./GuestListPage";
import AddGuestPage from "./AddGuestPage";
import logo from "../src/newyork.jpg";
import {FaRegAddressBook, FaUserFriends} from  "react-icons/fa";
import "../src/App.css";

function App() {
  return (
    <Router>
      <div className="APP">
        <div className="APP-order">
          <div className="home-card">
            <img src={logo} alt="card pic"></img>
            <h1 style={{ color: "white" }}>Name | Surname</h1>
            <h2 style={{ color: "lightblue" }}>Add Wedding Date +</h2>
            <button>Upload Photo</button>
          </div>
          <div className="App-header">
            <ul>
              <div className="vendors">
                <li>
                <div className="addressBook"><FaRegAddressBook/></div> 
                <h5>20</h5>
                <p>Vendors Shortlisted</p>
                  <button className="btn2"><Link to="/home">View All {">"}</Link></button>
                </li>
              </div>
              <div className="vendors">
                <li>
                <FaUserFriends></FaUserFriends>
                <h5>13</h5>
                <p>Wedding Guests</p>
                  <button className="btn2"><Link to="/guest-list"> Add Guest List{">"}</Link></button>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <Routes>
          <Route exact path="/home" element={<MainPage></MainPage>}></Route>
          <Route path="/guest-list" element={<GuestListPage />}></Route>
          <Route path="/add-guest" element={<AddGuestPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
