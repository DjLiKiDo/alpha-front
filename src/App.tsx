import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./views/HomePage/HomePage";
import ServicesPage from "./views/ServicesPage/ServicesPage";
import ContactPage from "./views/ContactPage/ContactPage";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Aquí puedes agregar más rutas en el futuro */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
