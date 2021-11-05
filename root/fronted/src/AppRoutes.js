import { Route, Switch } from 'react-router-dom'

import App from './App'
import Home from './components/Home/Home'

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </App>
)

export default AppRoutes
