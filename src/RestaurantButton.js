import React from "react";

function RestaurantButton({ orders, setOrders }) {
  //    const {orders, setOrders} = props;
  //    const orders = props.orders;
  //    const setOrders = props.setOrders;

  return (
    <button
      onClick={() => {
        setOrders(orders + 1);
      }}
      className="btn btn-primary"
    >
      Add
    </button>
  );
}

export default RestaurantButton;
