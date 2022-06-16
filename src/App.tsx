import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/netflex-clone" element={<Home />} />
        <Route path="/netflex-clone/movies/:movieId" element={<Home />} />
        <Route path="/netflex-clone/tv/" element={<Tv />} />
        <Route path="/netflex-clone/search/" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
