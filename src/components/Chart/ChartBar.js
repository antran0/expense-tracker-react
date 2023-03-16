import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  // style prop in React takes an object as a value with key-value pairs
  // css properties with hyphens should be strings or typed in lower camel case:
  //    background-color: red => 'background-color': red OR backgroundColor: red
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="char-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
