import React, { useState, useEffect } from "react";
import CoinGeckoApi from "../api/CoinGeckoApi";
import Coin from "./Coin";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const availableCoins = [
    "bitcoin",
    "ethereum",
    "tether",
    "cardano",
    "ripple",
    "litecoin",
    "bitcoin-cash",
    "eos",
    "tezos",
    "okb",
  ];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await CoinGeckoApi.get("/coins/markets/", {
        params: {
          vs_currency: "jpy",
          ids: availableCoins.join(","),
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const renderCoins = () => {
    if (isLoading) {
      return <div>読み込み中です。。。</div>;
    }
    return (
      <ul className="coinlist list-group mt-2">
        {coins.map((coin) => {
          return <Coin key={coin.id} coin={coin} />;
        })}
      </ul>
    );
  };
  return <div>{renderCoins()}</div>;
};

export default CoinList;
