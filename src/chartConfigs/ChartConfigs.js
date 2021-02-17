export const chartOptions = {
  legend: {
    labels: {
      fontSize: 17,
      fontColor: "#bbbbbb",
    },
    lineHeightAnnotation: {
      always: true,
      hover: false,
      lineWeight: 1,
    },
  },
  animation: {
    duration: 2000,
  },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    xAxes: [
      // X軸設定
      {
        type: "time",
        distribution: "linear",
        gridLines: {
          color: "#222222",
          zeroLineColor: "#222222",
        },
      },
    ],
    yAxes: [
      // Ｙ軸設定
      {
        gridLines: {
          color: "#333333",
          zeroLineColor: "#333333",
        },
      },
    ],
  },
};
