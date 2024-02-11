import { csv, scaleBand, scaleLinear, max } from "d3";
import { useState, useEffect } from "react";

const BarChart = () => {
  const url =
    "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv";

  const [data, setData] = useState(null);

  useEffect(() => {
    csv(url, row).then((data) => {
      setData(data.slice(0, 10));
    });
  }, []);

  const row = (d) => {
    d.Population = +d["2020"];
    return d;
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const width = 960;
  const height = 500;
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;
  const yscale = scaleBand()
    .domain(data.map((d) => d.Country))
    .range([0, innerHeight]);
  const xscale = scaleLinear()
    .domain([0, max(data, (d) => d.Population)])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {data.map((d, index) => (
          <rect
            key={index}
            x={0}
            y={yscale(d.Country)}
            width={xscale(d.Population)}
            height={yscale.bandwidth()}
          />
        ))}
      </g>
    </svg>
  );
};

export default BarChart;
