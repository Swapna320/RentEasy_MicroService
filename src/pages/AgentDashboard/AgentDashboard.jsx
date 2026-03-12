import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

import "./AgentDashboard.css";

function AgentDashboard(){

const navigate = useNavigate();

/* CASH FLOW DATA JAN → DEC */

const cashFlowData = [
  { month: "Jan", income: 12000 },
  { month: "Feb", income: 18000 },
  { month: "Mar", income: 14000 },
  { month: "Apr", income: 22000 },
  { month: "May", income: 19000 },
  { month: "Jun", income: 25000 },
  { month: "Jul", income: 27000 },
  { month: "Aug", income: 23000 },
  { month: "Sep", income: 26000 },
  { month: "Oct", income: 30000 },
  { month: "Nov", income: 32000 },
  { month: "Dec", income: 35000 }
];

/* OCCUPANCY DATA */

const occupancyData = [
  { name: "Occupied", value: 7 },
  { name: "Vacant", value: 3 }
];

const COLORS = ["#22c55e", "#f87171"];

/* COMMISSION */

const commission = 8500;

return(

<div className="agent-dashboard">

<h1 className="agent-title">Agent Dashboard</h1>


{/* STAT CARDS */}

<div className="agent-stats">

<div className="stat-card">
<h3>Total Properties</h3>
<p>10</p>
</div>

<div className="stat-card">
<h3>Active Tenants</h3>
<p>7</p>
</div>

<div className="stat-card">
<h3>Commission Earned</h3>
<p>₹{commission}</p>
</div>

</div>


{/* CHART SECTION */}

<div className="charts-container">


{/* CASH FLOW LINE GRAPH */}

<div className="chart-card">

<h3>Property Cash Flow</h3>

<ResponsiveContainer width="100%" height={260}>

<LineChart data={cashFlowData}>

<CartesianGrid strokeDasharray="3 3" stroke="#ffffff20"/>

<XAxis dataKey="month" stroke="#ffffff"/>

<YAxis stroke="#ffffff"/>

<Tooltip
contentStyle={{
background:"#0f172a",
border:"none",
borderRadius:"10px",
color:"#fff"
}}
/>

<Line
type="monotone"
dataKey="income"
stroke="#38bdf8"
strokeWidth={3}
dot={{ r:5 }}
activeDot={{ r:8 }}
/>

</LineChart>

</ResponsiveContainer>

</div>


{/* OCCUPANCY PIE CHART */}

<div className="chart-card">

<h3>Occupied vs Vacant</h3>

<ResponsiveContainer width="100%" height={260}>

<PieChart>

<Pie
data={occupancyData}
dataKey="value"
outerRadius={90}
label
>

{occupancyData.map((entry,index)=>(
<Cell key={index} fill={COLORS[index]} />
))}

</Pie>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>

</div>


{/* ACTION BUTTONS */}

<div className="agent-actions">

<button onClick={()=>navigate("/properties")}>
Browse Properties
</button>

<button onClick={()=>navigate("/applications")}>
View Applications
</button>

<button onClick={()=>navigate("/reports")}>
Reports
</button>

</div>

</div>

)

}

export default AgentDashboard;