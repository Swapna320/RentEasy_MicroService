import React from "react";
import { Link } from "react-router-dom";
import { getRole } from "../../lib/auth";
import "./Sidebar.css";

function Sidebar() {

  const role = getRole();

  return (
    <div className="sidebar">

      <h2>RentEasy</h2>

      {role === "tenant" && (
        <>
          <Link to="/tenant-dashboard">Dashboard</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/lease">Lease</Link>
        </>
      )}

      {role === "landlord" && (
        <>
          <Link to="/landlord-dashboard">Dashboard</Link>
          <Link to="/add-property">Add Property</Link>
          <Link to="/reports">Reports</Link>
        </>
      )}

      {role === "agent" && (
        <>
          <Link to="/agent-dashboard">Dashboard</Link>
          <Link to="/applications">Applications</Link>
          <Link to="/search">Search</Link>
        </>
      )}

    </div>
  );
}

export default Sidebar;