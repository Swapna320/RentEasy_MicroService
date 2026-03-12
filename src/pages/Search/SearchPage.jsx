import React, { useState } from "react";
import "./SearchPage.css";

import img1 from "../../assets/2BHK.jpg";
import img2 from "../../assets/luxuryvilla.avif";
import img3 from "../../assets/studioroom.jpg";
import img4 from "../../assets/3BHK.webp";
import img5 from "../../assets/1BHK.webp";
import img6 from "../../assets/beachsidevilla.webp";
import img7 from "../../assets/penthouse.jpg";
import img8 from "../../assets/4BHK.jpg";
import img9 from "../../assets/2BHKfamily.avif";

function SearchPage() {

const properties = [

{ id: 1, title: "2BHK Apartment", location: "Hyderabad", price: 12000, image: img1 },
{ id: 2, title: "Luxury Villa", location: "Bangalore", price: 25000, image: img2 },
{ id: 3, title: "Studio Room", location: "Chennai", price: 8000, image: img3 },
{ id: 4, title: "3BHK House", location: "Mumbai", price: 20000, image: img4 },
{ id: 5, title: "1BHK Apartment", location: "Delhi", price: 9000, image: img5 },
{ id: 6, title: "Beachside Villa", location: "Goa", price: 30000, image: img6 },
{ id: 7, title: "Penthouse", location: "Mumbai", price: 50000, image: img7 },
{ id: 8, title: "4BHK Luxury House", location: "Bangalore", price: 18000, image: img8 },
{ id: 9, title: "2BHK Family Flat", location: "Kolkata", price: 35000, image: img9 }

];

const [searchText,setSearchText] = useState("");

const filteredProperties = properties.filter((property)=>
property.title.toLowerCase().includes(searchText.toLowerCase()) ||
property.location.toLowerCase().includes(searchText.toLowerCase())
);

return(

<div className="search-container">

<h2>Search Properties</h2>

<input
type="text"
placeholder="Search by location or property name..."
value={searchText}
onChange={(e)=>setSearchText(e.target.value)}
className="search-input"
/>

<div className="search-results">

{filteredProperties.map((property)=>(
<div key={property.id} className="result-card">

<img
src={property.image}
alt={property.title}
className="property-image"
/>

<h3>{property.title}</h3>
<p>{property.location}</p>
<p>₹{property.price}</p>

</div>
))}

</div>

</div>

);

}

export default SearchPage;