import { csv } from "d3";

import { useState, useEffect } from "react";

const FetchDataGithubGist = () => {
  const url =
    "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv";

  const [data, setData] = useState(null);

  useEffect(() => {
    csv(url).then(setData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  // const message = data => {
  //     let message = '';
  //     message += Math.round(csvFormat(data).length / 1024) + ' kB\n';
  //     message += data.length + ' rows\n';
  //     message += data.columns.length + ' columns';
  //     return message;
  // }

  return data.map((d, index) => (
    <div
      key={index}
      style={{
        backgroundColor: d["RGB hex value"],
        width: "960px",
        height: "4px",
      }}
    />
  ));
};

export default FetchDataGithubGist;
