import { Route, Switch } from 'react-router-dom'

import App from './App'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const AppRoutes = () => (
  <App>
    <Header />
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/home" component={Home} exact />
    </Switch>
    <Footer />
  </App>
)

export default AppRoutes
