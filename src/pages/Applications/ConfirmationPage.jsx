import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ConfirmationPage.css";

function ConfirmationPage(){

const navigate = useNavigate();

/* generate reference once */

const [reference] = useState(
() => "APP-" + Math.floor(100000 + Math.random() * 900000)
);

return(

<div className="confirmation-container">

<div className="confirmation-card">

<div className="emoji">🎉</div>

<h1>Application Submitted</h1>

<p>Your rental application has been submitted successfully.</p>

<div className="reference-box">
Reference Number
<h2>{reference}</h2>
</div>

<button
className="confirm-btn"
onClick={()=>navigate("/tenant-dashboard")}
>
Go to Dashboard
</button>

</div>

</div>

);

}

export default ConfirmationPage;