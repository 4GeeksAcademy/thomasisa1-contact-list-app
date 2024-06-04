import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../../components/ContactCard";

export const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/thomasisa1");
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      } else {
        console.error("Failed to fetch contacts");
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
        method: "DELETE"
      });
      if (response.ok) {
        setContacts(contacts.filter(contact => contact.id !== id));
      } else {
        console.error("Failed to delete contact");
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Contacts</h1>
        <Link to="/add">Add Contact</Link>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-group">
          {contacts.map(contact => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onDelete={handleDelete}
              onEdit={(contact) => console.log("Edit contact", contact)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};