import React, { useState } from "react";
import "./ReportsPage.css";

function ReportsPage(){

const [properties] = useState(
JSON.parse(localStorage.getItem("properties")) || []
);

const [applications] = useState(
JSON.parse(localStorage.getItem("applications")) || []
);

const [leases] = useState(
JSON.parse(localStorage.getItem("leases")) || []
);

const totalProperties = properties.length;
const totalApplications = applications.length;
const activeLeases = leases.length;

const availableProperties = Math.max(
totalProperties - activeLeases,
0
);

return(

<div className="reports-container">

<h2 className="reports-title">Reports</h2>

<div className="reports-cards">

<div className="report-card">
<h3>Total Properties</h3>
<p>{totalProperties}</p>
</div>

<div className="report-card">
<h3>Total Applications</h3>
<p>{totalApplications}</p>
</div>

<div className="report-card">
<h3>Active Leases</h3>
<p>{activeLeases}</p>
</div>

<div className="report-card">
<h3>Available Properties</h3>
<p>{availableProperties}</p>
</div>

</div>

</div>

);

}

export default ReportsPage;