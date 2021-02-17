import React from "react";
import { Link } from "react-router-dom";

const Coin = ({ coin }) => {
  const to_jpy = Number(coin.current_price).toLocaleString("ja-JP", {
    style: "currency",
    currency: "JPY",
  });

  //   console.log(to_jpy);

  return (
    <Link to={`/coins/${coin.id}`} className="text-decoration-none">
      <li className="coinlist-item list-group-item d-flex justify-content-between align-items-center text-white mb-1 rounded">
        <img className="coinlist-image" src={coin.image} alt="" />

        <span className="coinlist-price coin-name text-light">{coin.name}</span>

        <span className="coinlist-price">{to_jpy}</span>

        <span
          className={
            coin.price_change_percentage_24h < 0
              ? "text-danger mr-2 coinlist-price"
              : "text-success mr-2 coinlist-price"
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
    </Link>
  );
};

export default Coin;
