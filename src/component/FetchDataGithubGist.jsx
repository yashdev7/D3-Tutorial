import { csv, arc, pie } from "d3";

import { useState, useEffect } from "react";

const FetchDataGithubGist = () => {
  const url =
    "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv";

  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;

  const pieArc = arc().innerRadius(0).outerRadius(width);

  const [data, setData] = useState(null);

  useEffect(() => {
    csv(url).then(setData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {pie().value(1)(data).map(d => (
          <path
            fill={d.data["RGB hex value"]}
            d={pieArc(d)}
            
          /> ))
        }
      </g>
    </svg>

  // const message = data => {
  //     let message = '';
  //     message += Math.round(csvFormat(data).length / 1024) + ' kB\n';
  //     message += data.length + ' rows\n';
  //     message += data.columns.length + ' columns';
  //     return message;
  // }

  // return (
  //   <svg width={width} height={height}>
  //     <g transform={`translate(${centerX},${centerY})`}>
  //       {data.map((d, i) => (
  //         <path
  //           fill={d["RGB hex value"]}
  //           d={pieArc({
  //             startAngle: (i / data.length) * 2 * Math.PI,
  //             endAngle: ((i + 1) / data.length) * 2 * Math.PI,
  //           })}
  //         />
  //       ))}
  //     </g>
  //   </svg>
  );
};

export default FetchDataGithubGist;
