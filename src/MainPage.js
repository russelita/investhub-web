import React from "react";
import NoMatch from "./pages/NoMatchScreen/NoMatch";
import Home from "./pages/HomeScreen/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";

function MainPage() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<NoMatch />} />
        <Route path="/" element={<Home />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MainPage;
