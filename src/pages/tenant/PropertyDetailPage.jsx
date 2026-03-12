import React from "react";
import { useLocation } from "react-router-dom";
import "./PropertyDetailPage.css";

function PropertyDetailPage(){

  const location = useLocation();
  const property = location.state?.property;

  if(!property){
    return(
      <div className="property-details-container">
        <h2>Property not found</h2>
        <p>Please go back and select a property from the list.</p>
      </div>
    );
  }

  return(

    <div className="property-details-container">

      <div className="property-card">

        <h2 className="property-title">{property.title}</h2>

        <div className="property-layout">

          {/* LEFT SIDE */}
          <div className="property-left">

            <img
              src={property.image}
              alt={property.title}
              className="main-property-image"
            />

            <div className="property-info">
              <p><b>Location:</b> {property.location}</p>
              <p><b>Price:</b> ₹{property.price}</p>
              <p><b>Description:</b> {property.description}</p>
            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="property-right">

            <h3 className="interior-title">Interior Images</h3>

            <div className="interior-images">
              {property.interiorImages?.map((img,index)=>(
                <img
                  key={index}
                  src={img}
                  alt="Interior"
                  className="interior-img"
                />
              ))}
            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default PropertyDetailPage;