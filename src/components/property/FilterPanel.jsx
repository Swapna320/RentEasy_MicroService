function FilterPanel({filters,setFilters}){

const handleChange=(e)=>{
setFilters({...filters,[e.target.name]:e.target.value});
};

return(

<div>

<select name="location" onChange={handleChange}>
<option value="">All Locations</option>
<option value="Hyderabad">Hyderabad</option>
<option value="Bangalore">Bangalore</option>
<option value="Chennai">Chennai</option>
<option value="Mumbai">Mumbai</option>
</select>

<select name="bedrooms" onChange={handleChange}>
<option value="">Bedrooms</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
</select>

</div>

);

}

export default FilterPanel;