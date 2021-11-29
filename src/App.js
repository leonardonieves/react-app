import React, { Component, useState } from 'react'
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import './scss/style.scss'
import Dashboard from '../src/views/dashboard/Dashboard'
import Login from './views/pages/login/Login'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
// const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

// const App = () => {
//   return (
//     <BrowserRouter>
//       <React.Suspense fallback={loading}>
//         <Switch>
//           <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
//           <Route
//             exact
//             path="/register"
//             name="Register Page"
//             render={(props) => <Register {...props} />}
//           />
//           <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
//           <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
//           <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
//         </Switch>
//       </React.Suspense>
//     </BrowserRouter>
//   )
// }

const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route path="/login" name="Login Page" component={Login} />
          {/* <Redirect to="/login" /> */}

          <Route path="/" name="Home" component={Dashboard} />

          <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
          <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default App
