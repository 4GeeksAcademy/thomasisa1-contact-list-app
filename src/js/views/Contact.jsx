import React, { useContext, useEffect } from 'react';
import { Context } from '../../store.jsx';
import { Link } from 'react-router-dom';
import { ContactCard } from '../../components/ContactCard.jsx';
import '../../styles/home.css';

export const Contact = () => {
  const { store, getContacts } = useContext(Context);

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="container">
      <div>
        <h1 className="text-center mt-5">Contact List</h1>
        <div className="d-flex justify-content-end mb-3">
          <Link to="/add">
            <button className="btn btn-success">Add New Contact</button>
          </Link>
        </div>
        <ul className="list-group">
          {store.contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </ul>
      </div>
    </div>
  );
};