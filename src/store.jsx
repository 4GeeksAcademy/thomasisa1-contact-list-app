import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext(null);

const StoreProvider = ({ children }) => {
  const [store, setStore] = useState({
    contacts: []
  });

  const fetchContacts = async () => {
    try {
      const response = await fetch('https://playground.4geeks.com/apis/fake/contact/');
      const data = await response.json();
      setStore({ contacts: data });
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const addContact = async (contact) => {
    try {
      await fetch('https://playground.4geeks.com/apis/fake/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
      });
      fetchContacts();
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  const updateContact = async (id, updatedContact) => {
    try {
      await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedContact)
      });
      fetchContacts();
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
        method: 'DELETE'
      });
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <Context.Provider value={{ store, addContact, updateContact, deleteContact }}>
      {children}
    </Context.Provider>
  );
};

export default StoreProvider;