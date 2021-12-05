import { Route, Switch } from 'react-router-dom';

import App from './App';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import BitacoraContainer from './components/BitacoraPruebas/BitacoraContainer';
import Header from './components/Header';
import Footer from './components/Footer';

const AppRoutes = () => (
  <App>
    <Header />
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/home" component={Home} exact />
      <Route path="/bitacorePruebas" component={BitacoraContainer} exact />
    </Switch>
    <Footer />
  </App>
);

export default AppRoutes;
