import "bootstrap/dist/css/bootstrap.min.css";
import { Films } from "./components/films/Films";
import CustomNavbar from "./components/navbar/CustomNavbar";
import { ThemeProvider } from "./ThemeProvider";
import { Routes, Route } from "react-router-dom";
import { Details } from "./components/films/Details";
import {Contact} from "./pages/Contact";
import {About} from "./pages/About";
import React from "react";
import './App.scss';
import { News } from "./pages/News";
import Portfolio from "./components/Portfolio";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Films/>}></Route>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
