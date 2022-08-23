import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { JobPage } from "./components/JobPage";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/job/:slug" element={<JobPage />} />
    </Routes>
  );
}

export default App;
