import React,{useState} from "react";
import "./LeaseManagement.css";

function LeaseManagement(){

const [leases,setLeases] = useState(
JSON.parse(localStorage.getItem("leases")) || []
);

const createLease=(property)=>{

const savedLeases=JSON.parse(localStorage.getItem("leases")) || [];

const newLease={
id:Date.now(),
tenant:"Tenant User",
property,
duration:"12 Months"
};

savedLeases.push(newLease);

localStorage.setItem("leases",JSON.stringify(savedLeases));

setLeases(savedLeases);

};


/* DELETE LEASE */

const deleteLease=(id)=>{

const updatedLeases=leases.filter((lease)=>lease.id!==id);

localStorage.setItem("leases",JSON.stringify(updatedLeases));

setLeases(updatedLeases);

};


return(

<div className="lease-container">

<h2>Lease Management</h2>

<button onClick={()=>createLease("Sample Property")}>
Create Lease
</button>

{leases.length===0 ? (

<p>No active leases yet.</p>

):( 

<table className="lease-table">

<thead>
<tr>
<th>ID</th>
<th>Tenant</th>
<th>Property</th>
<th>Duration</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{leases.map((lease)=>(
<tr key={lease.id}>
<td>{lease.id}</td>
<td>{lease.tenant}</td>
<td>{lease.property}</td>
<td>{lease.duration}</td>

<td>
<button
className="delete-btn"
onClick={()=>deleteLease(lease.id)}
>
Delete
</button>
</td>

</tr>
))}

</tbody>

</table>

)}

</div>

);

}

export default LeaseManagement;