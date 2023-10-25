import React from "react";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBNavbar,
} from "mdb-react-ui-kit";
function BreadcrumbComponent(props) {
  var flowertype;
  if (props.id <= 8) {
    flowertype = "LoveFlower";
  } else if (props.id <= 16) {
    flowertype = "BirthdayFlower";
  } else if (props.id <= 24) {
    flowertype = "FriendFlower";
  } else if (props.id <= 32) {
    flowertype = "WeddingFlower";
  }
  return (
    <div>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
              <a href="/">Home</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <a href={`/${flowertype}`}>{flowertype}</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>
              <a href={`/${flowertype}/${props.id}`}>{flowertype} Detail</a>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default BreadcrumbComponent;
