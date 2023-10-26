import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";

function PersonalCenter() {
  const [order, setOrders] = useState([]);
  const bearerToken = localStorage.getItem("token");

  const getData = () => {
    axios
      .post(
        "https://flowerapi.azurewebsites.net/api/Order/GetOrder",
        { id: 0, type: 1 },
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        setOrders(response.data.result);
      });
  };
  useEffect(() => getData(), []);
  return (
    <div>
      {order != null &&
        order.map((item) => {
          return (
            <MDBListGroup horizontal className="d-flex justify-content-center">
              <MDBListGroupItem className="d-flex justify-content-center">
                {item.orderNumber}
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-center">
                {item.price}
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-center">
                {item.orderDate}
              </MDBListGroupItem>
            </MDBListGroup>
          );
        })}
    </div>
  );
}

export default PersonalCenter;
