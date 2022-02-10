import React from "react";
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import { Image } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfileDetail from "./components/ProfileDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="contanier">
        <Header />
        <Image src="./img/BG.svg" style={{ zIndex: "-1", width: "100%" }} />
        <div className="d-flex justify-content-center" style={{ marginTop: "-350px" }}>
          <div className="contanier-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/post/:id/users/:userId" element={<ProfileDetail />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default React.memo(App);
