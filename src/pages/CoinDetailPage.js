import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CoinChart from "../components/CoinChart";
import CoinGeckoApi from "../api/CoinGeckoApi";

const CoinDetailPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [day, week, year, detail] = await Promise.all([
        CoinGeckoApi.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "jpy",
            days: "1",
          },
        }),
        CoinGeckoApi.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "jpy",
            days: "7",
          },
        }),
        CoinGeckoApi.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "jpy",
            days: "365",
          },
        }),
        CoinGeckoApi.get("/coins/markets/", {
          params: {
            vs_currency: "jpy",
            ids: id,
          },
        }),
      ]);
      console.log(day);

      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        detail: detail.data[0],
      });
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const renderData = () => {
    if (isLoading) {
      return (
        <div className="text-white m-3">
          <h3 className="text-center">読み込み中です。。。</h3>
        </div>
      );
    }
    return <CoinChart data={coinData} />;
  };

  return renderData();
};

export default CoinDetailPage;
