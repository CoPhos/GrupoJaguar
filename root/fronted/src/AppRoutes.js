import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Form from './components/Login/Form';
import Protected from './components/Home/Protected';
import BitacoraContainer from './components/BitacoraPruebas/BitacoraContainer';
import ReporteColadoContainer from './components/ReporteColado/ReporteColadoContainer';
import Header from './components/Header';
import Footer from './components/Footer';

const AppRoutes = () => {
  const [current, setCurrent] = useState('home');
  useEffect(() => {
    setRoute();
    window.addEventListener('hashchange', setRoute);
    return () => window.removeEventListener('hashchange', setRoute);
  }, []);
  function setRoute() {
    const location = window.location.href.split('/');
    const pathname = location[location.length - 1];
    setCurrent(pathname ? pathname : 'home');
  }
  return (
    <App>
      <Header />
      <Switch>
        <Route exact path="/home" component={Protected} />
        <Route exact path="/Login" component={Form} />
        <Route exact path="/bitacorePruebas" component={BitacoraContainer} />
        <Route exact path="/reporteColado" component={ReporteColadoContainer} />
      </Switch>
      <Footer />
    </App>
  );
};

export default AppRoutes;
