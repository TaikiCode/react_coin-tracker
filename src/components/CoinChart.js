import React, { useState, useEffect, useRef } from "react";
import Chartjs from "chart.js";
import { chartOptions } from "../chartConfigs/ChartConfigs";

const CoinChart = ({ data }) => {
  const chartRef = useRef();
  const [timeFormat, setTimeFormat] = useState("24h");
  const { day, week, year, detail } = data;

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };


  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      console.log("ok");
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: detail.name,
              data: determineTimeFormat(),
              backgroundColor: "transparent",
              borderColor: "red",
              pointRadius: 0,
            },
          ],
        },
        options: {
          ...chartOptions,
        },
      });
    }
  });

  const renderPrice = () => {
    if (detail) {
      const to_jpy = Number(detail.current_price).toLocaleString("ja-JP", {
        style: "currency",
        currency: "JPY",
      });

      console.log(detail.current_price);
      return (
        <>
          <p className="chart-price my-0 text-white">{to_jpy}</p>
          <p
            className={
              detail.price_change_24h < 0
                ? "text-danger my-0"
                : "text-success my-0"
            }
          >
            {detail.price_change_percentage_24h.toFixed(2)}%
          </p>
        </>
      );
    }
  };

  return (
    <div className="text-white border mt-2 rounded p-3">
      <div className="text-end">{renderPrice()}</div>

      <div>
        <canvas ref={chartRef} id="myChart" width={200} height={400}></canvas>
      </div>
      <div className="text-end mt-2">
        <button
          onClick={() => setTimeFormat("24h")}
          className="btn btn-outline-secondary btn-sm"
        >
          24h
        </button>
        <button
          onClick={() => setTimeFormat("7d")}
          className="btn btn-outline-secondary btn-sm mx-2"
        >
          7d
        </button>
        <button
          onClick={() => setTimeFormat("1y")}
          className="btn btn-outline-secondary btn-sm"
        >
          1y
        </button>
      </div>
    </div>
  );
};

export default CoinChart;
