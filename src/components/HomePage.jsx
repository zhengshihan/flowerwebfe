import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  const [flowers, setFlowers] = useState([]);
  const getData = () => {
    axios
      .post("https://flowerapi.azurewebsites.net/api/Flower/GetFlowers", {
        id: 0,
        type: 1,
      })
      .then(function (response) {
        console.log(response);
        setFlowers(response.data.result);
      });
  };
  useEffect(() => getData(), []);

  return (
    <div>
      {/* 轮播图 */}
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="/images/banners/21_birthday_banner_pc.jpg"
          alt="..."
        ></MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="/images/banners/21_brand_banner_pc.jpg"
          alt="..."
        ></MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="/images/banners/21_syz_banner_pc.jpg"
          alt="..."
        ></MDBCarouselItem>
      </MDBCarousel>

      <div>
        {/* 鲜花展示 */}
        <MDBRow>
          <MDBCol>爱情鲜花</MDBCol>
          <MDBCol>送·让你怦然心动的人</MDBCol>
          <MDBCol>更多爱情鲜花</MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="3">
            <img
              src="/images/content/home_floor_lover.png"
              className="img-fluid shadow-4"
              alt="..."
              style={{ height: "900px" }}
            />
          </MDBCol>
          <MDBCol md="9">
            <MDBContainer fluid className=" text-center">
              <MDBRow>
                {flowers.map((item) => {
                  return (
                    <MDBCol md="3" className="mb-4">
                      <MDBCard>
                        <a href={`/loveflower/${item.id}`}>
                          <MDBRipple
                            rippleColor="light"
                            rippleTag="div"
                            className="bg-image rounded hover-zoom"
                          >
                            <NavLink to={`/loveflower/${item.id}`}>
                              {" "}
                              <MDBCardImage
                                src={item.image}
                                fluid
                                className="w-100"
                              />
                            </NavLink>

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
                          </MDBRipple>
                        </a>
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
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
}
