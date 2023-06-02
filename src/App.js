import "bootstrap/dist/css/bootstrap.min.css";
import { Films } from "./components/films/Films";
import CustomNavbar from "./components/navbar/CustomNavbar";
import { ThemeProvider } from "./ThemeProvider";
import { Routes, Route } from "react-router-dom";
import { Details } from "./components/films/Details";

import React from "react";

function App() {
  return (
    <ThemeProvider>
      <div>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Films/>}></Route>
          <Route path="/details/:id" element={<Details/>}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
