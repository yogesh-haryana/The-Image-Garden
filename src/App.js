import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ApiCall from "./Components/ApiCall";
import NavItem from "./Components/NavItem";
import Search from "./Components/Search";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <ApiCall>
      <Header />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/mountain" element={<NavItem query="mountain" />} />
        <Route path="/" element={<NavItem to="/mountain" query="mountain" />} />
        <Route path="/beaches" element={<NavItem query="beaches" />} />
        <Route path="/birds" element={<NavItem query="birds" />} />
        <Route path="/food" element={<NavItem query="food" />} />
        <Route path="/search/:Input" element={<Search />} />
      </Routes>
    </ApiCall>
  );
}

export default App;
