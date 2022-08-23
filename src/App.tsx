import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(function () {
    fetch("https://www.arbeitnow.com/api/job-board-api")
      .then((resp) => resp.json())
      .then((a) => console.log(a.data[0]));
  }, []);

  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

export default App;
