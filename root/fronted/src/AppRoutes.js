import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Form from './components/Login/Form';
import Protected from './components/Home/Protected';
import BitacoraContainer from './components/BitacoraPruebas/BitacoraContainer';
import ReporteColadoContainer from './components/ReporteColado/ReporteColadoContainer';
import InformePruebasContainer from './components/InformePruebas/InformePruebasContainer';
import DiarioPruebas from './components/DiarioPruebas/DiarioPruebasContainer';
import Header from './components/Header';
import Footer from './components/Footer';

const AppRoutes = () => {
  return (
    <App>
      <Header />
      <Switch>
        <Route exact path="/" component={Protected} />
        <Route exact path="/Login" component={Form} />
        <Route exact path="/bitacorePruebas" component={BitacoraContainer} />
        <Route exact path="/reporteColado" component={ReporteColadoContainer} />
        <Route exact path="/informePruebas" component={InformePruebasContainer} />
        <Route exact path="/DiarioPruebas" component={DiarioPruebas} />
        <Route component={Form} />
      </Switch>
      <Footer />
    </App>
  );
};

export default AppRoutes;
