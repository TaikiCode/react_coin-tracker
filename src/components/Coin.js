import React from "react";

const Coin = ({ coin }) => {
  return (
    <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
      <img className="coinlist-image" src={coin.image} alt="" />
      <span>{coin.name}</span>
      <span className="text-decoration-none">¥{coin.current_price}</span>

      <span
        className={
          coin.price_change_percentage_24h < 0
            ? "text-danger mr-2"
            : "text-success mr-2"
        }
      >
        {" "}
        {coin.price_change_percentage_24h < 0 ? (
          <i className="fas fa-sort-down align-middle mr-1"></i>
        ) : (
          <i className="fas fa-sort-up align-middle mr-1"></i>
        )}
        {coin.price_change_percentage_24h}
      </span>
    </li>
  );
};

export default Coin;