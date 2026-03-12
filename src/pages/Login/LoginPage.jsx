import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import AuthService from "../../services/auth.service";
import "../../styles/auth.css";

export default function LoginPage(){

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [loading,setLoading] = useState(false);

const handleSubmit = async (e) => {

e.preventDefault();
setLoading(true);

try{

const res = await AuthService.login({
email,
password
});

const role = res.role;

/* Save role */
localStorage.setItem("userRole", role);

/* SUCCESS MESSAGE */
alert("Logged in successfully!");

/* Redirect */

if(role === "LANDLORD"){
navigate("/landlord-dashboard");
}
else if(role === "TENANT"){
navigate("/tenant-dashboard");
}
else if(role === "AGENT"){
navigate("/agent-dashboard");
}
else{
navigate("/");
}

}catch(err){

alert("Invalid email or password",err);

}finally{

setLoading(false);

}

};

return(

<div className="auth-container">

<video autoPlay muted loop playsInline className="bg-video">
<source src="/videos/property-bg.mp4" type="video/mp4"/>
</video>

<div className="auth-overlay"></div>

<div className="auth-card">

<h2 className="auth-title">Login</h2>

<form className="auth-form" onSubmit={handleSubmit}>

<div className="input-group">
<FaEnvelope className="input-icon"/>
<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>
</div>

<div className="input-group">
<FaLock className="input-icon"/>
<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>
</div>

<button className="auth-btn" disabled={loading}>
{loading ? "Logging in..." : "Login"}
</button>

</form>

<div className="auth-link">
<Link to="/register">Create Account</Link>
</div>

</div>

</div>

);
}