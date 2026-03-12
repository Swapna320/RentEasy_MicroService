import React from "react";
import { useNavigate } from "react-router-dom";
import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
CartesianGrid,
ResponsiveContainer,
PieChart,
Pie,
Cell
} from "recharts";

import "./LandlordDashboard.css";

function LandlordDashboard(){

const navigate = useNavigate();

/* RENT DATA */

const rentData = [
{month:"Jan", rent:12000},
{month:"Feb", rent:18000},
{month:"Mar", rent:16000},
{month:"Apr", rent:22000},
{month:"May", rent:20000},
{month:"Jun", rent:25000},
{month:"Jul", rent:27000},
{month:"Aug", rent:24000},
{month:"Sep", rent:26000},
{month:"Oct", rent:30000},
{month:"Nov", rent:32000},
{month:"Dec", rent:35000}
];

/* PROPERTY STATUS */

const propertyStatus = [
{name:"Occupied", value:8},
{name:"Vacant", value:2}
];

const COLORS = ["#22c55e","#ef4444"];

const tenantRequests = [
{name:"Jayasree", unit:"2BHK"},
{name:"Lakshmi", unit:"1BHK"},
{name:"Sofiya", unit:"3BHK"}
];

const activities = [
"Tenant Jayasree paid rent",
"New tenant request received",
"Lease expiring soon",
"Rent reminder sent"
];

/* NAVIGATION FUNCTIONS */

const goToAddProperty = () => navigate("/add-property");
const goToApplications = () => navigate("/applications");
const goToReports = () => navigate("/reports");

return(

<div className="landlord-dashboard">

<h1 className="dashboard-title">Landlord Dashboard</h1>

{/* ACTION BUTTONS */}

<div className="dashboard-actions">

<button onClick={goToAddProperty}>
Add Property
</button>

<button onClick={goToApplications}>
View Applications
</button>

<button onClick={goToReports}>
View Reports
</button>

</div>


{/* SUMMARY CARDS */}

<div className="summary-cards">

<div className="summary-card">
<h3>Total Rent Collected</h3>
<p>₹2,40,000</p>
</div>

<div className="summary-card">
<h3>Pending Rent</h3>
<p>₹15,000</p>
</div>

<div className="summary-card">
<h3>Total Tenants</h3>
<p>12</p>
</div>

<div className="summary-card">
<h3>Top Property</h3>
<p>4BHK Villa</p>
</div>

</div>


{/* GRID */}

<div className="dashboard-grid">

{/* RENT GRAPH */}

<div className="dashboard-card">

<h3>Monthly Rent Income</h3>

<ResponsiveContainer width="100%" height={250}>

<LineChart data={rentData}>

<CartesianGrid strokeDasharray="3 3" stroke="#ffffff20"/>

<XAxis dataKey="month" stroke="#fff"/>

<YAxis stroke="#fff"/>

<Tooltip/>

<Line
type="monotone"
dataKey="rent"
stroke="#38bdf8"
strokeWidth={3}
dot={{r:4}}
/>

</LineChart>

</ResponsiveContainer>

</div>


{/* OCCUPANCY PIE */}

<div className="dashboard-card">

<h3>Occupied vs Vacant</h3>

<ResponsiveContainer width="100%" height={250}>

<PieChart>

<Pie
data={propertyStatus}
dataKey="value"
outerRadius={90}
label
>

{propertyStatus.map((entry,index)=>(
<Cell key={index} fill={COLORS[index]} />
))}

</Pie>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>


{/* TENANT REQUESTS */}

<div className="dashboard-card">

<h3>Tenant Requests</h3>

{tenantRequests.map((tenant,index)=>(

<div key={index} className="tenant-row">

<div>
<strong>{tenant.name}</strong>
<p>{tenant.unit}</p>
</div>

<button className="view-btn">
View
</button>

</div>

))}

</div>


{/* ACTIVITY */}

<div className="dashboard-card">

<h3>Recent Activity</h3>

{activities.map((a,index)=>(
<p key={index} className="activity-item">
{a}
</p>
))}

</div>

</div>

</div>

)

}

export default LandlordDashboard;