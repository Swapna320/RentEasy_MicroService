import { Link } from "react-router-dom";
import { useState } from "react";
import "./PropertyCard.css";

function PropertyCard({ property }) {

  // initialize saved state
  const [saved, setSaved] = useState(() => {
    try {
      const savedProps = JSON.parse(localStorage.getItem("savedProperties")) || [];
      return savedProps.some((p) => p.id === property?.id);
    } catch {
      return false;
    }
  });

  function handleSave() {

    let savedProps = [];

    try {
      savedProps = JSON.parse(localStorage.getItem("savedProperties")) || [];
    } catch {
      savedProps = [];
    }

    if (!saved) {

      // avoid duplicate save
      if (!savedProps.some((p) => p.id === property.id)) {
        savedProps.push(property);
      }

      localStorage.setItem("savedProperties", JSON.stringify(savedProps));
      setSaved(true);

    } else {

      savedProps = savedProps.filter((p) => p.id !== property.id);
      localStorage.setItem("savedProperties", JSON.stringify(savedProps));
      setSaved(false);
    }
  }

  if (!property) return null;

  return (

    <div className="property-card">

      <div className="property-image-container">

        <img
          src={property.image}
          alt={property.title}
          className="property-image"
        />

        <button className="save-btn" onClick={handleSave}>
          {saved ? "❤️" : "🤍"}
        </button>

      </div>

      <div className="property-info">

        <h3>{property.title}</h3>

        <p className="location">{property.location}</p>

        <p className="price">₹ {property.price}</p>

        <p className="bedrooms">
          {property.bedrooms || 2} Bedrooms
        </p>

        {/* View Details */}
        <Link
          to={`/tenant/properties/${property.id}`}
          state={{ property }}
        >
          <button className="details-btn">
            View Details
          </button>
        </Link>

      </div>

    </div>

  );
}

export default PropertyCard;