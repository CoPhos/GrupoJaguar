import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Form from './components/Login/Form';
import Protected from './components/Home/Protected';
import BitacoraContainer from './components/BitacoraPruebas/BitacoraContainer';
import Header from './components/Header';
import Footer from './components/Footer';

const AppRoutes = () => {
  return (
    <App>
      <Header />
      <Switch>
        <Route path="/Login" component={Form} exact />
        <Route path="/" component={Protected} exact />
        <Route path="/bitacorePruebas" component={BitacoraContainer} exact />
        <Route component={Form} />
      </Switch>
      <Footer />
    </App>
  );
};

export default AppRoutes;
