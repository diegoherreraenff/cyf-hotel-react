import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(1);
  return (
    <li>
      {props.orderType}: {orders}{" "}
      <RestaurantButton orders={orders} setOrders={setOrders} />
    </li>
  );
};

export default Order;
