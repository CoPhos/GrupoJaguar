import { Route, Switch } from 'react-router-dom'

import App from './App'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Bitacora from './components/BitacoraPruebas/Bitacora'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const AppRoutes = () => (
  <App>
    <Header />
    <Switch>
      <Route path="/" render={Login} exact />
      <Route path="/home" render={Home} exact />
      <Route path="/bitacorePruebas" render={Bitacora} exact />
    </Switch>
    <Footer />
  </App>
)

export default AppRoutes
