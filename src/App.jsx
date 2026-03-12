import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
import PropertyListPage from "./pages/Properties/PropertyListPage";
import SearchPage from "./pages/Search/SearchPage";
import FilterPage from "./pages/Filters/FilterPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";

import TenantDashboard from "./pages/TenantDashboard/TenantDashboard";
import LandlordDashboard from "./pages/LandlordDashboard/LandlordDashboard";
import MyProperties from "./pages/LandlordDashboard/MyProperties";
import AgentDashboard from "./pages/AgentDashboard/AgentDashboard";

import AddPropertyPage from "./pages/AddProperty/AddPropertyPage";
import ApplicationsPage from "./pages/Applications/ApplicationsPage";
import LeaseManagement from "./pages/Lease/LeaseManagement";
import ReportsPage from "./pages/Reports/ReportsPage";
import ContactPage from "./pages/contact/ContactPage";

import TenantPropertyListPage from "./pages/tenant/PropertyListPage";
import PropertyDetailPage from "./pages/tenant/PropertyDetailPage";

import ApplicationFormPage from "./pages/Applications/ApplicationFormPage";
import ConfirmationPage from "./pages/Applications/ConfirmationPage";

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (

    <BrowserRouter>

      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className={`main-content ${sidebarOpen ? "expanded" : ""}`}>

        <Routes>

          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* General pages */}
          <Route path="/properties" element={<PropertyListPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/filters" element={<FilterPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Authentication */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Dashboards */}
          <Route path="/tenant-dashboard" element={<TenantDashboard />} />
          <Route path="/landlord-dashboard" element={<LandlordDashboard />} />
          <Route path="/agent-dashboard" element={<AgentDashboard />} />

          {/* Landlord features */}
          <Route path="/my-properties" element={<MyProperties />} />
          <Route path="/add-property" element={<AddPropertyPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/lease" element={<LeaseManagement />} />
          <Route path="/reports" element={<ReportsPage />} />

          {/* Tenant property browsing */}
          <Route path="/tenant/properties" element={<TenantPropertyListPage />} />
          <Route path="/tenant/properties/:id" element={<PropertyDetailPage />} />

          {/* Application flow */}
          <Route path="/apply/:id" element={<ApplicationFormPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />

        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;