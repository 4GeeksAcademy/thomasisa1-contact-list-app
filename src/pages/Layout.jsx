import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StoreProvider from '../store.jsx';
import { Contact } from '../js/views/Contact';
import { AddContact } from '../js/views/AddContact';
import { EditContact } from '../js/views/EditContact';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const Layout = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Contact} />
          <Route path="/add" component={AddContact} />
          <Route path="/edit/:id" component={EditContact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </StoreProvider>
  );
};

export default Layout;