import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

export const EditContact = () => {
  const [contact, setContact] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    agenda_slug: "thomasisa1"
  });
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = async () => {
    try {
      const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`);
      if (response.ok) {
        const data = await response.json();
        setContact(data);
      } else {
        console.error("Failed to fetch contact");
      }
    } catch (error) {
      console.error("Error fetching contact:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
      });
      if (response.ok) {
        history.push("/");
      } else {
        console.error("Failed to update contact");
      }
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  return (
    <div className="container">
      <h1>Edit Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" name="full_name" value={contact.full_name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={contact.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone</label>
          <input type="text" name="phone" value={contact.phone} onChange={handleChange} required />
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="address" value={contact.address} onChange={handleChange} required />
        </div>
        <button type="submit">Update Contact</button>
      </form>
    </div>
  );
};