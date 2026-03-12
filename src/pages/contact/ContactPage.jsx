import React, { useState } from "react";
import "./ContactPage.css";

function ContactPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const contactData = {
      name: name,
      email: email,
      message: message
    };

    console.log("Contact Message:", contactData);

    alert("Message sent successfully!");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">

      <h2>Contact Us</h2>

      <p>If you have any questions about RentEasy, feel free to contact us.</p>

      <form className="contact-form" onSubmit={handleSubmit}>

        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Message</label>
        <textarea
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Send Message</button>

      </form>

    </div>
  );
}

export default ContactPage;