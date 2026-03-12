import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
FaHome,
FaSearch,
FaBuilding,
FaClipboardList,
FaFileContract,
FaSignOutAlt,
FaFileAlt
} from "react-icons/fa";

import "./Navbar.css";

function Navbar({sidebarOpen,setSidebarOpen}){

const navigate = useNavigate();
const role = localStorage.getItem("userRole");

const toggleSidebar = ()=>{
setSidebarOpen(!sidebarOpen);
};

const handleLogout = ()=>{
localStorage.removeItem("userRole");
navigate("/login");
};

return(

<div className={`sidebar ${sidebarOpen ? "open" : ""}`}>

<div className="logo" onClick={toggleSidebar}>
★
</div>

<ul className="sidebar-links">

<li>
<Link to="/">
<FaHome/>
{sidebarOpen && <span>Home</span>}
</Link>
</li>

<li>
<Link to="/properties">
<FaBuilding/>
{sidebarOpen && <span>Properties</span>}
</Link>
</li>

<li>
<Link to="/search">
<FaSearch/>
{sidebarOpen && <span>Search</span>}
</Link>
</li>

{role === "TENANT" && (
<>
<li>
<Link to="/tenant-dashboard">
<FaClipboardList/>
{sidebarOpen && <span>Dashboard</span>}
</Link>
</li>

<li>
<Link to="/apply/1">
<FaFileAlt/>
{sidebarOpen && <span>Applications</span>}
</Link>
</li>

<li>
<Link to="/lease">
<FaFileContract/>
{sidebarOpen && <span>Lease</span>}
</Link>
</li>
</>
)}

{role === "LANDLORD" && (
<>
<li>
<Link to="/add-property">
<FaBuilding/>
{sidebarOpen && <span>Add Property</span>}
</Link>
</li>

<li>
<Link to="/reports">
<FaClipboardList/>
{sidebarOpen && <span>Reports</span>}
</Link>
</li>
</>
)}

<li onClick={handleLogout}>
<FaSignOutAlt/>
{sidebarOpen && <span>Logout</span>}
</li>

</ul>

</div>

);

}

export default Navbar;