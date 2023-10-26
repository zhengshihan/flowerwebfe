import React, { useState } from "react";
import axios from "axios";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

export default function () {
  const [showNavRight, setShowNavRight] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginSuccessModal, setLoginSuccessModal] = useState(false);
  const [registerSuccessModal, setRegisterSuccessModal] = useState(false);
  const [isLogined, setIsLogined] = useState(false);
  const [captchaImageUrl, setCaptchaImageUrl] = useState("");
  const [Captcha, setCaptcha] = useState("");
  const [key, setKey] = useState("");
  const [userData, setUserData] = useState({
    Id: "10002",
    NickName: "",
    UserName: "admin",
    UserType: "1",
    aud: "http://localhost:5015",
    exp: 1696781351,
    iss: "http://localhost:5015",
  });
  const guid = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  const formatToken = (res) => {
    const modifiedRes = res.replace("-", "+").replace("_", "/");
    const decodedToken = decodeURIComponent(
      escape(window.atob(modifiedRes.split(".")[1]))
    );
    return decodedToken;
  };
  const handleRegister = () => {
    axios
      .post("https://flowerapi.azurewebsites.net/api/Login/Register", {
        userName: userName,
        nickName: nickName,
        password: password,
        ValidateKey: key,
        ValidateCode: Captcha,
      })
      .then(function (response) {
        console.log(response);
        if (response.data.isSuccess == true) {
          toggleRegisterModal(true);
        }
        setUserName("");
        setPassword("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleLogin = () => {
    axios
      .post("https://flowerapi.azurewebsites.net/api/Login/Check", {
        userName: userName,
        password: password,
        ValidateKey: key,
        ValidateCode: Captcha,
      })
      .then((response) => {
        if (response.data.isSuccess == true) {
          toggleLoginSuccessModal(true);
          setIsLogined(true);
          var userInfo = JSON.parse(formatToken(response.data.result));
          setUserData(userInfo);
          localStorage.setItem("userName", userName);
          localStorage.setItem("token", response.data.result);
          console.log(localStorage.getItem("token"));
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleLoginOut = () => {
    setIsLogined(false);
    localStorage.clear();
  };

  const toggleShow = () => {
    getCaptcha();
    setBasicModal(!basicModal);
  };
  const getCaptcha = () => {
    var t = guid();
    setKey(t);
    axios
      .get(
        `https://flowerapi.azurewebsites.net/api/Login/GetValidateCodeImages?t=${t}`,
        {
          responseType: "arraybuffer", // Set the response type to arraybuffer
        }
      )
      .then((response) => {
        console.log(response);
        const blob = new Blob([response.data], {
          type: "image/jpeg",
        });
        const imageUrl = URL.createObjectURL(blob);
        setCaptchaImageUrl(imageUrl);
        console.log(captchaImageUrl);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const toggleLoginModal = () => {
    getCaptcha();
    setShowLoginModal(!showLoginModal);
  };
  const toggleRegisterModal = () =>
    setRegisterSuccessModal(!registerSuccessModal);
  const toggleLoginSuccessModal = () =>
    setLoginSuccessModal(!loginSuccessModal);

  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBCollapse navbar show={showNavRight}>
            <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
              {/* login  */}
              <MDBNavbarItem>
                {!isLogined && (
                  <MDBNavbarLink
                    active
                    aria-current="page"
                    href="#"
                    onClick={toggleLoginModal}
                  >
                    Login
                  </MDBNavbarLink>
                )}
              </MDBNavbarItem>

              {/* register */}
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="#"
                  onClick={toggleShow}
                >
                  Register
                </MDBNavbarLink>
              </MDBNavbarItem>
              {/* user name */}
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  {userData.NickName}
                </MDBNavbarLink>
              </MDBNavbarItem>
              {isLogined && (
                <MDBNavbarItem>
                  <MDBNavbarLink
                    active
                    aria-current="page"
                    href="flowerwebfe.vercel.app/personalcenter/"
                    onClick={getCaptcha}
                  >
                    User Center
                  </MDBNavbarLink>
                </MDBNavbarItem>
              )}

              <MDBNavbarItem>
                {isLogined && (
                  <MDBNavbarLink
                    active
                    aria-current="page"
                    href="#"
                    onClick={handleLoginOut}
                  >
                    Log out
                  </MDBNavbarLink>
                )}
              </MDBNavbarItem>

              {/* <MDBNavbarItem>
                <MDBNavbarLink href="#">Link</MDBNavbarLink>
              </MDBNavbarItem> */}

              {/* <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link">
                    Dropdown
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem> */}
              {/* <MDBNavbarItem>
                <MDBNavbarLink
                  disabled
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Disabled
                </MDBNavbarLink>
              </MDBNavbarItem> */}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      {/* register form */}
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog size="xl">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              {" "}
              <MDBContainer fluid>
                <MDBCard
                  className="text-black m-5"
                  style={{ borderRadius: "25px" }}
                >
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol
                        md="10"
                        lg="6"
                        className="order-2 order-lg-1 d-flex flex-column align-items-center"
                      >
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Sign up
                        </p>

                        <div className="d-flex flex-row align-items-center mb-4 ">
                          <MDBIcon fas icon="user me-3" size="lg" />
                          <MDBInput
                            label="Your Name"
                            id="registerform1"
                            type="text"
                            className="w-100"
                            onChange={(e) => setUserName(e.target.value)}
                          />
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <MDBIcon fas icon="envelope me-3" size="lg" />
                          <MDBInput
                            label="Your NickName"
                            id="registerform2"
                            type="text"
                            className="w-100"
                            onChange={(e) => setNickName(e.target.value)}
                          />
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <MDBIcon fas icon="lock me-3" size="lg" />
                          <MDBInput
                            label="Password"
                            id="registerform3"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <MDBIcon fas icon="key me-3" size="lg" />
                          <MDBInput
                            label="Captcha"
                            id="registerform4"
                            type="text"
                            onChange={(e) => setCaptcha(e.target.value)}
                          />
                        </div>

                        <MDBCardImage
                          src={captchaImageUrl}
                          fluid
                          onClick={getCaptcha}
                        />
                        {/* <div className="mb-4">
                          <MDBCheckbox
                            name="flexCheck"
                            value=""
                            id="flexCheckDefault"
                            label="Subscribe to our newsletter"
                          />
                        </div> */}

                        <MDBBtn
                          className="mb-4"
                          size="lg"
                          onClick={handleRegister}
                        >
                          Register
                        </MDBBtn>
                      </MDBCol>

                      <MDBCol
                        md="10"
                        lg="6"
                        className="order-1 order-lg-2 d-flex align-items-center"
                      >
                        <MDBCardImage
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          fluid
                        />
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBContainer>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <MDBModal
        show={registerSuccessModal}
        setShow={setRegisterSuccessModal}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              {/* <MDBModalTitle>Modal title</MDBModalTitle> */}
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleRegisterModal}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>Register Successfully</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleRegisterModal}>
                OK
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      {/* Login Modal */}
      <MDBModal show={showLoginModal} setShow={setShowLoginModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              {/* <MDBModalTitle>Modal title</MDBModalTitle> */}
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleLoginModal}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Username"
                  id="form1"
                  type="email"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form2"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size="lg" />
                  <MDBInput
                    label="Captcha"
                    id="form4"
                    type="text"
                    onChange={(e) => setCaptcha(e.target.value)}
                  />
                </div>

                <MDBCardImage
                  src={captchaImageUrl}
                  fluid
                  onClick={getCaptcha}
                />
                <div className="d-flex justify-content-between mx-3 mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Remember me"
                  />
                  <a href="!#">Forgot password?</a>
                </div>

                <MDBBtn className="mb-4" onClick={handleLogin}>
                  Log in
                </MDBBtn>

                <div className="text-center">
                  <p>
                    Not a member? <a href="#!">Register</a>
                  </p>
                  <p>or sign up with:</p>

                  <div
                    className="d-flex justify-content-between mx-auto"
                    style={{ width: "40%" }}
                  >
                    <MDBBtn
                      tag="a"
                      color="none"
                      className="m-1"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="facebook-f" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="m-1"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="twitter" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="m-1"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="google" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="m-1"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="github" size="sm" />
                    </MDBBtn>
                  </div>
                </div>
              </MDBContainer>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleLoginModal}>
                OK
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <MDBModal
        show={loginSuccessModal}
        setShow={setLoginSuccessModal}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              {/* <MDBModalTitle>Modal title</MDBModalTitle> */}
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleLoginSuccessModal}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>Login Successfully</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleLoginSuccessModal}>
                OK
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
