import React from "react";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import "./PropertyListPage.css";

import img1 from "../../assets/2BHK.jpg";
import img2 from "../../assets/luxuryvilla.avif";
import img3 from "../../assets/studioroom.jpg";
import img4 from "../../assets/3BHK.webp";
import img5 from "../../assets/1BHK.webp";
import img6 from "../../assets/beachsidevilla.webp";
import img7 from "../../assets/penthouse.jpg";
import img8 from "../../assets/4BHK.jpg";
import img9 from "../../assets/2BHKfamily.avif";

import interior1 from "../../assets/interior1.jpeg";
import interior2 from "../../assets/interior2.jpeg";
import interior3 from "../../assets/interior3.jpeg";
import interior4 from "../../assets/interior4.jpeg";
import interior5 from "../../assets/interior1.jpeg";
import interior6 from "../../assets/interior2.jpeg";
import interior7 from "../../assets/interior3.jpeg";
import interior8 from "../../assets/interior4.jpeg";
import interior9 from "../../assets/interior1.jpeg";
import interior10 from "../../assets/interior2.jpeg";
import interior11 from "../../assets/interior3.jpeg";
import interior12 from "../../assets/interior4.jpeg";
import interior13 from "../../assets/interior1.jpeg";
import interior14 from "../../assets/interior2.jpeg";
import interior15 from "../../assets/interior3.jpeg";
import interior16 from "../../assets/interior4.jpeg";
import interior17 from "../../assets/interior1.jpeg";
import interior18 from "../../assets/interior2.jpeg";
import interior19 from "../../assets/interior3.jpeg";
import interior20 from "../../assets/interior4.jpeg";
import interior21 from "../../assets/interior1.jpeg";
import interior22 from "../../assets/interior2.jpeg";
import interior23 from "../../assets/interior3.jpeg";
import interior24 from "../../assets/interior4.jpeg";
import interior30 from "../../assets/interior2.jpeg";
import interior31 from "../../assets/interior3.jpeg";
import interior32 from "../../assets/interior4.jpeg";
import interior33 from "../../assets/interior1.jpeg";
import interior34 from "../../assets/interior1.jpeg";
import interior35 from "../../assets/interior2.jpeg";
import interior36 from "../../assets/interior3.jpeg";
import interior37 from "../../assets/interior4.jpeg";
import interior38 from "../../assets/interior1.jpeg";
import interior40 from "../../assets/interior3.jpeg";
import interior41 from "../../assets/interior4.jpeg";
import interior42 from "../../assets/interior1.jpeg";
import interior43 from "../../assets/interior3.jpeg";
import interior44 from "../../assets/interior4.jpeg";
import interior45 from "../../assets/interior1.jpeg";
import interior46 from "../../assets/interior2.jpeg";
import interior48 from "../../assets/interior4.jpeg";
function PropertyListPage() {

const properties = [

{
id:1,
title:"2BHK Apartment",
location:"Hyderabad",
price:120000,
image:img1,
description:"Spacious 2BHK apartment in Hyderabad.",
interiorImages:[interior1, interior2, interior3, interior4]
},

{
id:2,
title:"Luxury Villa",
location:"Bangalore",
price:2500000,
image:img2,
description:"Luxury villa with modern interiors.",
interiorImages:[interior5, interior6, interior7, interior8, interior9]
},

{
id:3,
title:"Studio Room",
location:"Chennai",
price:90000,
image:img3,
description:"Affordable studio room in Chennai.",
interiorImages:[interior10, interior11, interior12]
},

{
id:4,
title:"3BHK House",
location:"Mumbai",
price:2000000,
image:img4,
description:"Spacious 3BHK house in Mumbai.",
interiorImages:[interior1, interior13, interior18, interior19, interior21, interior22, interior23 ]
},

{
id:5,
title:"1BHK Apartment",
location:"Pune",
price:500000,
image:img5,
description:"Comfortable 1BHK apartment in Pune.",
interiorImages:[interior24, interior16, interior10]
},

{
id:6,
title:"Beachside Villa",
location:"Goa",
price:300000,
image:img6,
description:"Beautiful beachside villa with sea view.",
interiorImages:[interior13, interior14, interior15, interior17,interior34 ]
},

{
id:7,
title:"Penthouse",
location:"Mumbai",
price:50000,
image:img7,
description:"Luxury penthouse with skyline view.",
interiorImages:[interior33, interior32, interior31, interior30]
},

{
id:8,
title:"4BHK Luxury House",
location:"Bangalore",
price:400000,
image:img8,
description:"Large luxury house perfect for families.",
interiorImages:[interior36, interior44, interior38, interior42, interior41, interior40, interior45, interior46, interior48,interior34 ]
},

{
id:9,
title:"2BHK Family Flat",
location:"Kolkata",
price:11000,
image:img9,
description:"Budget friendly family flat.",
interiorImages:[interior37, interior43,interior35, interior20]
}

];

return (

<div className="property-list-container">

<h2 className="gradient-text">Available Properties</h2>

<div className="property-grid">

{properties.map((property)=>(
<PropertyCard
key={property.id}
property={property}
/>
))}

</div>

</div>

);

}

export default PropertyListPage;