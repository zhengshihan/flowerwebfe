import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function PayComponent() {
  const navigate = useNavigate();
  let { id } = useParams();
  const bearerToken = localStorage.getItem("token");
  const handlePay = () => {
    axios
      .post(
        "http://localhost:5015/api/Order/CreateOrder",
        { flowerId: id },
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        navigate("/personalcenter");
      });
  };
  return (
    <>
      <h3>Please scan the QR code</h3>
      <div>
        <img src="/images/pay/测试二维码.png" alt="" />
      </div>

      <button onClick={handlePay}>pay</button>
    </>
  );
}

export default PayComponent;
