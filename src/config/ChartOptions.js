import { colors } from "./ColorPalette";

export const BarOptions = (position, display) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: position,
      },
      title: {
        display: true,
        text: "Bar Chart",
      },
    },
    scales: {
      y: {
        grid: {
          borderWidth: 1,
          borderColor: colors.blue,
          display: display,
        },
      },
      x: {
        grid: {
          lineWidth: 1,
          display: display,
          borderWidth: 1,
          borderColor: colors.blue,
        },
      },
    },
  };
  console.log("options", options);
  return options;
};

export const bubbleChartOptions = {
  scales: {
    y: {
      beginAtZero: true,
      offset: true,
    },
    x: {
      grid: {
        drawBorder: false,
      },
    },
  },
};
