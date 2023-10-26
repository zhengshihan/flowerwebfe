import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import BreadcrumbComponent from "./BreadcrumbComponent";

function FlowerDetails() {
  const [flower, setFlower] = useState([]);
  const { id } = useParams();
  const getData = () => {
    axios
      .post("https://flowerapi.azurewebsites.net/api/Flower/GetFlowers", {
        id: id,
        type: 0,
      })
      .then(function (response) {
        console.log(response);
        setFlower(response.data.result[0]);
      });
  };
  useEffect(() => getData(), []);
  return (
    <div>
      <BreadcrumbComponent id={id} />
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="12" xl="10">
            <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image rounded hover-zoom hover-overlay"
                    >
                      <MDBCardImage
                        src={flower.image}
                        fluid
                        className="w-100"
                      />
                    </MDBRipple>
                  </MDBCol>

                  <MDBCol md="6">
                    <h5 className="d-flex flex-row ">{flower.title}</h5>
                    <div className="d-flex flex-row ">
                      <div className="text-danger mb-1 me-2">
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                      </div>
                      <span>310</span>
                    </div>
                    <div className="mt-1 mb-0 text-muted small d-flex flex-row">
                      {flower.description}
                    </div>
                    <div className="d-flex flex-row">{flower.language}</div>
                  </MDBCol>
                  <MDBCol
                    md="6"
                    lg="3"
                    className="border-sm-start-none border-start"
                  >
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1">¥{flower.price}</h4>
                      <span className="text-danger">
                        <s>¥{flower.price + 50}</s>
                      </span>
                    </div>
                    <h6 className="text-success">Free shipping</h6>
                    <div className="d-flex flex-column mt-4">
                      <MDBBtn
                        outline
                        color="primary"
                        size="sm"
                        className="mt-2"
                      >
                        <a href={`/pay/${id}`}>Buy it</a>
                      </MDBBtn>

                      <MDBBtn
                        outline
                        color="primary"
                        size="sm"
                        className="mt-2"
                      >
                        Add to cart
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBRow>
        <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
          <h4>Best seller</h4>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image rounded hover-zoom hover-overlay"
          >
            <MDBCardImage
              src="/images/content/a1.jpg"
              fluid
              className="w-100"
            />
            <h6>Beautiful flower</h6>
            <h6>Price:</h6>

            <MDBCardImage
              src="/images/content/a2.jpg"
              fluid
              className="w-100"
            />
            <h6>Beautiful flower</h6>
            <h6>Price:</h6>
          </MDBRipple>
        </MDBCol>
        <MDBCol>
          <h4>Flower Detail</h4>
          <MDBCardImage
            src={flower.image}
            fluid
            style={{ width: "500px", height: "500px" }}
          />
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default FlowerDetails;
