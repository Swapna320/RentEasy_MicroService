import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import AuthService from "../../services/auth.service";
import "../../styles/auth.css";

function Register(){

const navigate = useNavigate();

const [form,setForm] = useState({
firstName:"",
lastName:"",
email:"",
password:"",
role:"TENANT"
});

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const handleSubmit = async (e)=>{

e.preventDefault();

try{

/* combine first + last name */
const payload = {
name: form.firstName + " " + form.lastName,
email: form.email,
password: form.password,
role: form.role
};

await AuthService.register(payload);

alert("Registration successful");

/* Redirect by role */

if(form.role === "LANDLORD"){
navigate("/landlord-dashboard");
}
else if(form.role === "TENANT"){
navigate("/tenant-dashboard");
}
else if(form.role === "AGENT"){
navigate("/agent-dashboard");
}
else{
navigate("/login");
}

}catch(err){

alert("Registration failed",err);

}

};

return(

<div className="auth-container">

<video autoPlay muted loop playsInline className="bg-video">
<source src="/videos/property-bg.mp4" type="video/mp4"/>
</video>

<div className="auth-overlay"></div>

<div className="auth-card">

<h2 className="auth-title">Register</h2>

<form className="auth-form" onSubmit={handleSubmit}>

{/* FIRST NAME */}

<div className="input-group">
<FaUser className="input-icon"/>
<input
name="firstName"
placeholder="First Name"
onChange={handleChange}
required
/>
</div>

{/* LAST NAME */}

<div className="input-group">
<FaUser className="input-icon"/>
<input
name="lastName"
placeholder="Last Name"
onChange={handleChange}
required
/>
</div>

{/* EMAIL */}

<div className="input-group">
<FaEnvelope className="input-icon"/>
<input
name="email"
placeholder="Email"
onChange={handleChange}
required
/>
</div>

{/* PASSWORD */}

<div className="input-group">
<FaLock className="input-icon"/>
<input
type="password"
name="password"
placeholder="Password"
onChange={handleChange}
required
/>
</div>

{/* ROLE */}

<select name="role" onChange={handleChange} value={form.role}>
<option value="LANDLORD">Landlord</option>
<option value="TENANT">Tenant</option>
<option value="AGENT">Agent</option>
</select>

<button className="auth-btn">
Register
</button>

</form>

<div className="auth-link">
<p>
Already have an account? <Link to="/login">Login</Link>
</p>
</div>

</div>

</div>

);

}

export default Register;