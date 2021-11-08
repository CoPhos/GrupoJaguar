import { Route, Switch } from 'react-router-dom'

import App from './App'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const AppRoutes = () => (
  <App>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
    <Footer />
  </App>
)

export default AppRoutes
