import { useEffect, useState } from "react";
import "./MyProperties.css";

function MyProperties(){

const [properties,setProperties] = useState([]);

useEffect(()=>{

const savedProperties =
JSON.parse(localStorage.getItem("properties")) || [];

setProperties(savedProperties);

},[]);

return(

<div className="my-properties">

<h2>My Properties</h2>

{properties.length === 0 ? (

<p>No properties added yet</p>

):( 

<div className="property-grid">

{properties.map(property => (

<div key={property.id} className="property-card">

<h3>{property.title}</h3>

<p>Type: {property.propertyType}</p>

<p>Rent: ₹{property.rent}</p>

<p>Bedrooms: {property.bedrooms}</p>

<p>Bathrooms: {property.bathrooms}</p>

<p className={property.available ? "available" : "occupied"}>

{property.available ? "Available" : "Occupied"}

</p>

</div>

))}

</div>

)}

</div>

);

}

export default MyProperties;