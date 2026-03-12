import React, { useState } from "react";
import "./ApplicationsPage.css";

function ApplicationsPage(){

const [applications] = useState(() => {
  const saved = localStorage.getItem("applications");
  return saved ? JSON.parse(saved) : [];
});

return(

<div className="applications-container">

<h2>Tenant Applications</h2>

{applications.length === 0 ? (

<p>No applications submitted yet.</p>

) : (

<table className="applications-table">

<thead>
<tr>
<th>ID</th>
<th>Tenant</th>
<th>Property</th>
<th>Status</th>
</tr>
</thead>

<tbody>

{applications.map((app)=>(
<tr key={app.id}>
<td>{app.id}</td>
<td>{app.tenant}</td>
<td>{app.property}</td>
<td>{app.status}</td>
</tr>
))}

</tbody>

</table>

)}

</div>

);

}

export default ApplicationsPage;