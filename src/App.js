import Game from "./tictactoe";
import FetchApi from "./fetchAPI";
import Navbar from "./navbar";
import Home from "./home";
import {Route, Routes} from "react-router-dom"

export default function App() {
  return (
    <>
      <Navbar />
      <div className = "container">
        <Routes>
          <Route path ="/" element = {<Home />} />
          <Route path ="/Game" element = {<Game />} />
          <Route path ="/API" element = {<FetchApi />} />
        </Routes>

      </div>

    </>

  );
}
