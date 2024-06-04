import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../store.jsx';
import { useHistory, useParams } from 'react-router-dom';

export const EditContact = () => {
  const { store, updateContact, fetchContact } = useContext(Context);
  const [contact, setContact] = useState({
    full_name: '',
    email: '',
    agenda_slug: 'default',
    address: '',
    phone: ''
  });
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedContact = await fetchContact(id);
      setContact(fetchedContact);
    };
    fetchData();
  }, [id, fetchContact]);

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(id, contact);
    history.push('/');
  };

  return (
    <div className="container">
      <h1>Edit Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="full_name"
            className="form-control"
            value={contact.full_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={contact.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={contact.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            className="form-control"
            value={contact.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};