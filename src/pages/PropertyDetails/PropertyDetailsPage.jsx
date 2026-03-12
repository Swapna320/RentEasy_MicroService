import React from "react";
import { useLocation } from "react-router-dom";

function PropertyDetailPage() {

  const location = useLocation();

  let property = location.state?.property;

  if (!property) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Property not found</h2>
        <p>Go back and open from the property list.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px" }}>

      <h2>{property.title}</h2>

      <img
        src={property.image}
        alt={property.title}
        style={{ width: "400px", borderRadius: "10px" }}
      />

      <div>
        {property.interiorImages?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Interior"
            style={{ width: "200px", margin: "10px" }}
          />
        ))}
      </div>

      <p><b>Location:</b> {property.location}</p>
      <p><b>Price:</b> ₹{property.price}</p>

    </div>
  );
}

export default PropertyDetailPage;