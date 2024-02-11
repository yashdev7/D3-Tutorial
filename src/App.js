//import FetchDataGithubGist from "./component/FetchDataGithubGist";
//import BarChart from "./component/BarChart";
//import data from "./data/flare-2.json";
//import TreeChart from "./component/TreeChart";
//import VegaLiteApi from "./component/VegaLiteApi";
import WordTree from "./component/WordTree";
import data from "./data/word";

function App() {
  return (
    <div className="App">
       
       {/*<TreeChart data={data} />*/}
       <WordTree data={data} />
    </div>
  );
}

export default App;
