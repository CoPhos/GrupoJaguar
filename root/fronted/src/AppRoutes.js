import { Route, Switch } from 'react-router-dom'

import App from './App'
import Login from './containers/Login/Login'
import Layout from './hocs/Layout'
import Home from './containers/Home/Home'

import { Provider } from 'react-redux'
import store from './store'

const AppRoutes = () => (
  <Provider store={store}>
    <App>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Layout>
    </App>
  </Provider>
)

export default AppRoutes
