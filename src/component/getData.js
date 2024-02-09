import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/curran/805413fb3b2efaada1ce/raw/f030ce7bd9a46f3d4c09b4c8db1729fab885cc33/religionByCountryTop5.csv";

export const getData = async () => {
  const data = await csv(csvUrl);
  console.log(data[1]);
  return data;
};
