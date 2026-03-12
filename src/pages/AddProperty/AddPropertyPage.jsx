import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddressAutocomplete from "../../pages/Properties/AddressAutocomplete";
import ImageUploader from "../../pages/Properties/ImageUploader";
import "./AddPropertyPage.css";

function AddPropertyPage() {

const navigate = useNavigate();

const [formData,setFormData] = useState({
title:"",
description:"",
propertyType:"",
bedrooms:"",
bathrooms:"",
rent:"",
deposit:"",
available:true,
amenities:[]
});

const handleChange=(e)=>{
const {name,value,type,checked}=e.target;

setFormData({
...formData,
[name]: type==="checkbox" ? checked : value
});
};


const handleAmenityChange=(e)=>{

const {value,checked}=e.target;

if(checked){
setFormData({
...formData,
amenities:[...formData.amenities,value]
});
}else{
setFormData({
...formData,
amenities:formData.amenities.filter(a=>a!==value)
});
}

};


const handleSubmit = (e) => {

e.preventDefault();

try{

// get existing properties
const existingProperties =
JSON.parse(localStorage.getItem("properties")) || [];

// create property object
const newProperty = {
id: Date.now(),
...formData
};

// add new property
const updatedProperties = [...existingProperties,newProperty];

// save to localStorage
localStorage.setItem("properties",JSON.stringify(updatedProperties));

alert("Property Added Successfully");

// go to my properties
navigate("/my-properties");

}catch(error){

console.error(error);
alert("Failed to add property");

}

};


return(

<div className="container">

<h1>List Your Property</h1>

<form onSubmit={handleSubmit} className="form">

<input
type="text"
name="title"
placeholder="Property Title"
onChange={handleChange}
required
/>

<textarea
name="description"
placeholder="Description"
onChange={handleChange}
/>

<select name="propertyType" onChange={handleChange} required>
<option value="">Select Property Type</option>
<option value="Apartment">Apartment</option>
<option value="House">House</option>
<option value="Villa">Villa</option>
</select>

<div className="row">

<input
type="number"
name="bedrooms"
placeholder="Bedrooms"
onChange={handleChange}
/>

<input
type="number"
name="bathrooms"
placeholder="Bathrooms"
onChange={handleChange}
/>

</div>

<div className="row">

<input
type="number"
name="rent"
placeholder="Monthly Rent"
onChange={handleChange}
/>

<input
type="number"
name="deposit"
placeholder="Deposit"
onChange={handleChange}
/>

</div>

<h3>Amenities</h3>

<div className="amenities">

<label className="amenity">
<input type="checkbox" value="Parking" onChange={handleAmenityChange}/>
<span>Parking</span>
</label>

<label className="amenity">
<input type="checkbox" value="Gym" onChange={handleAmenityChange}/>
<span>Gym</span>
</label>

<label className="amenity">
<input type="checkbox" value="Pool" onChange={handleAmenityChange}/>
<span>Pool</span>
</label>

<label className="amenity">
<input type="checkbox" value="Balcony" onChange={handleAmenityChange}/>
<span>Balcony</span>
</label>

</div>

<AddressAutocomplete/>

<ImageUploader/>

<button type="submit" className="btn">
Submit Property
</button>

</form>

</div>

);

}

export default AddPropertyPage;