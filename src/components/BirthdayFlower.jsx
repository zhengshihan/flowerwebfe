import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBRow,
  MDBCol,
  MDBBadge,
  MDBListGroup,
  MDBListGroupItem,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
function BirthdayFlower() {
  const [flowers, setFlowers] = useState([]);
  const getData = () => {
    axios
      .post("https://flowerapi.azurewebsites.net/api/Flower/GetFlowers", {
        id: 0,
        type: 2,
      })
      .then(function (response) {
        console.log(response);
        setFlowers(response.data.result);
      });
  };
  useEffect(() => getData(), []);
  return (
    <>
      <div>
        <MDBRow>
          {/* Left side */}
          <MDBCol md="4">
            <MDBListGroup light numbered style={{ minWidth: "22rem" }}>
              <MDBListGroupItem className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>Cras justo odio
                </div>
                <MDBBadge pill light>
                  14
                </MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>Cras justo odio
                </div>
                <MDBBadge pill light>
                  14
                </MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>Cras justo odio
                </div>
                <MDBBadge pill light>
                  14
                </MDBBadge>
              </MDBListGroupItem>
            </MDBListGroup>
            <MDBListGroup light numbered style={{ minWidth: "22rem" }}>
              <MDBListGroupItem className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>Cras justo odio
                </div>
                <MDBBadge pill light>
                  14
                </MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>Cras justo odio
                </div>
                <MDBBadge pill light>
                  14
                </MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>Cras justo odio
                </div>
                <MDBBadge pill light>
                  14
                </MDBBadge>
              </MDBListGroupItem>
            </MDBListGroup>
            <MDBListGroup light numbered style={{ minWidth: "22rem" }}>
              <MDBListGroupItem className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>Cras justo odio
                </div>
                <MDBBadge pill light>
                  14
                </MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>Cras justo odio
                </div>
                <MDBBadge pill light>
                  14
                </MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>Cras justo odio
                </div>
                <MDBBadge pill light>
                  14
                </MDBBadge>
              </MDBListGroupItem>
            </MDBListGroup>
            <MDBListGroup light numbered style={{ minWidth: "22rem" }}>
              <MDBListGroupItem className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>Cras justo odio
                </div>
                <MDBBadge pill light>
                  14
                </MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>Cras justo odio
                </div>
                <MDBBadge pill light>
                  14
                </MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>Cras justo odio
                </div>
                <MDBBadge pill light>
                  14
                </MDBBadge>
              </MDBListGroupItem>
            </MDBListGroup>
            <MDBListGroup light numbered style={{ minWidth: "22rem" }}>
              <MDBListGroupItem className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>Cras justo odio
                </div>
                <MDBBadge pill light>
                  14
                </MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>Cras justo odio
                </div>
                <MDBBadge pill light>
                  14
                </MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>Cras justo odio
                </div>
                <MDBBadge pill light>
                  14
                </MDBBadge>
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBCol>

          <MDBCol md="8">
            {/* left picture  */}
            <div className="pb-3">
              <img src="/images/theme/flower_bannerLove_190906.jpg" alt="" />
            </div>
            {/* display flower */}
            <MDBRow>
              {flowers.map((item) => {
                const dynamicURL = `flowerwebfe.vercel.app/birthdayflower/${item.id}`;

                return (
                  <MDBCol md="3" className="mb-4">
                    <MDBCard>
                      <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image rounded hover-zoom"
                      >
                        <MDBCardImage
                          src={item.image}
                          fluid
                          className="w-100"
                        />
                        <a href={dynamicURL}>
                          <div className="mask">
                            <div className="d-flex justify-content-start align-items-end h-100">
                              <h5>
                                <span className="badge bg-primary ms-2">
                                  New
                                </span>
                              </h5>
                            </div>
                          </div>
                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                            ></div>
                          </div>
                        </a>
                      </MDBRipple>
                      <MDBCardBody>
                        <a href="#!" className="text-reset">
                          <h5 className="card-title mb-4">{item.title}</h5>
                        </a>
                        <a href="#!" className="text-reset">
                          <p>Category</p>
                        </a>
                        <h6 className="mb-4">￥{item.price}</h6>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                );
              })}
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
}

export default BirthdayFlower;
