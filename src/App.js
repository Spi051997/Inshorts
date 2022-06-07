import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/NavC/Nav";
import Newcontent from "./components/Newcontent/newcontent";
import apikey from "./data/config";

function App() {
  const [category, setcategory] = useState("general");
  const [newsarray, setnewsarray] = useState([]);
  const [newresults, setnewsresults] = useState();
  const [loadmore,setloadmore]=useState(20);

  const newsapi = async () => {
    try {
      // axios.get("")
      const proxyurl='https://cors-anywhere.herokuapp.com/';
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}&pageSize=${loadmore}`
      );
      setnewsarray(news.data.articles);
      setnewsresults(news.data.totalResults);

      // console.log(news.data);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log("newsarray",newsarray.push,category);
  // console.log("newstotalresults",newresults)

  useEffect(() => {
    newsapi();
    //eslint-disable-next-line
  }, [setnewsresults,category,loadmore]);
  return (
    <div className="App">
      {/* Sending the setcategory so that it can manuplate the state */}
      <Nav setcategory={setcategory} />
      <Newcontent newsarray={newsarray}
       newresults={newresults}
       loadmore={loadmore}
       setloadmore={setloadmore} />
    </div>
  );
}

export default App;
