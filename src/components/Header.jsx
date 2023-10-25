import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBNavbar light bgColor="light" style={{ marginTop: "50px" }}>
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <img
            src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp"
            height="30"
            alt=""
            loading="lazy"
          />
        </MDBNavbarBrand>
        <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
          <input
            className="form-control"
            placeholder="Type query"
            aria-label="Search"
            type="Search"
          />
          <MDBBtn outline>Search</MDBBtn>
        </MDBInputGroup>

        <h6>
          <i className="fas fa-phone-flip"></i>Customer Service
        </h6>
      </MDBContainer>
    </MDBNavbar>
  );
}
