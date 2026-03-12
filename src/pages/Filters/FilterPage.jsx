import React, { useState } from "react";
import "./FilterPage.css";

function FilterPage() {

  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [type, setType] = useState("");

  const handleFilter = (event) => {
    event.preventDefault();

    const filterData = {
      price: price,
      bedrooms: bedrooms,
      type: type
    };

    console.log("Filter Applied:", filterData);

    alert("Filters Applied!");
  };

  return (
    <div className="filter-container">

      <h2>Filter Properties</h2>

      <form className="filter-form" onSubmit={handleFilter}>

        <label>Maximum Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>Bedrooms</label>
        <select
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
        >
          <option value="">Select</option>
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
        </select>

        <label>Property Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Select</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="villa">Villa</option>
        </select>

        <button type="submit">
          Apply Filters
        </button>

      </form>

    </div>
  );
}

export default FilterPage;