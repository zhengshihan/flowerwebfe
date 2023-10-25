import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import LoveFlower from "./LoveFlower";
import BirthdayFlower from "./BirthdayFlower";

export default function MenuBar() {
  return (
    <div className="mt-2 mb-2 ">
      <NavLink to="/">
        <MDBBtn className="me-1" color="success">
          HomePage
        </MDBBtn>
      </NavLink>
      <NavLink to="/birthdayflower">
        <MDBBtn className="me-1" color="danger">
          BirthdayFlower
        </MDBBtn>
      </NavLink>
      <NavLink to="/friendflower">
        <MDBBtn className="me-1" color="warning">
          FriendFlower
        </MDBBtn>
      </NavLink>

      <NavLink to="/weddingflower">
        <MDBBtn className="me-1" color="warning">
          WeddingFlower
        </MDBBtn>
      </NavLink>

      <NavLink to="/loveflower">
        <MDBBtn color="info">LoveFlower</MDBBtn>
      </NavLink>

      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loveflower" element={<LoveFlower />} />
        <Route path="/birthdayflower" element={<BirthdayFlower />} />
      </Routes> */}
    </div>
  );
}
