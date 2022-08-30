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
  maintainAspectRatio: false,
};

export const AreaChartOptions = (position) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: position,
      },
      title: {
        display: true,
        text: "Line Chart",
      },
    },
    maintainAspectRatio: false,
  };
  return options;
};

export const PolarOptions = (position, display) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: position,
      },
      title: {
        display: true,
        text: "Polar Chart",
      },
    },

    animation: {
      animateRotate: true,
    },
    borderColor: display ? "black" : "transparent",
  };
  return options;
};
