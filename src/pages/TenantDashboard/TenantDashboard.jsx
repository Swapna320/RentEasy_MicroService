import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TenantDashboard.css";

function TenantDashboard() {

const navigate = useNavigate();

const [applications] = useState(() => {
return JSON.parse(localStorage.getItem("applications")) || [];
});

const [saved] = useState(() => {
return JSON.parse(localStorage.getItem("savedProperties")) || [];
});
return(

<div className="tenant-dashboard">

<h1 className="dashboard-title">Tenant Dashboard</h1>


{/* SUMMARY CARDS */}

<div className="dashboard-cards">

<div className="dashboard-card">
<h3>Saved</h3>
<p>{saved.length}</p>
</div>

<div 
className="dashboard-card clickable"
onClick={()=>navigate("/applications")}
>
<h3>Applications</h3>
<p>{applications.length}</p>
</div>

<div className="dashboard-card">
<h3>Approved</h3>
<p>
{applications.filter(app=>app.status==="Approved").length}
</p>
</div>

<div className="dashboard-card">
<h3>Rent Due</h3>
<p>₹12,000</p>
</div>

</div>


{/* SAVED PROPERTIES */}

<div className="dashboard-section">

<h2>Saved Properties</h2>

<div className="property-list">

{saved.length === 0 ? (

<p>No saved properties</p>

) : (

saved.map((property,index)=>(

<div key={index} className="property-item">

<h4>{property.title}</h4>
<p>Location: {property.location}</p>
<p>Rent: ₹{property.rent}</p>

</div>

))

)}

</div>

</div>


{/* PAYMENT DETAILS */}

<div className="dashboard-section">

<h2>Payment Details</h2>

<div className="payment-box">

<p><strong>Monthly Rent:</strong> ₹12,000</p>

<p><strong>Next Due Date:</strong> 5 Aug 2026</p>

<p><strong>Status:</strong> Pending</p>

<button
className="pay-btn"
onClick={()=>navigate("/payment")}
>
Pay Rent
</button>

</div>

</div>


{/* APPLICATION STATUS */}

<div className="dashboard-section">

<h2>Application Status</h2>

<div className="application-status">

{applications.length === 0 ? (
<p>No applications yet</p>
) : (

applications.map((app,index)=>(

<div
key={index}
className={`status ${app.status==="Approved" ? "approved":"pending"}`}
>

{app.property} — {app.status}

</div>

))

)}

</div>

</div>


{/* CONTACT */}

<div className="dashboard-section">

<h2>Contact Support</h2>

<p>If you have issues with rent or applications.</p>

<button
className="contact-btn"
onClick={()=>navigate("/contact")}
>
Contact Us
</button>

</div>

</div>

);

}

export default TenantDashboard;