import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Profile = React.lazy(() => import('./views/pages/profile/Profile'))
const Pieces = React.lazy(() => import('./views/pages/pieces/Pieces'))
const Log = React.lazy(() => import('./views/pages/log/Log'))

const routes = [
  { path: '/', name: 'Home', exact: true, component: Dashboard },
  { path: '/profile', name: 'Profile', exact: true, component: Profile },
  { path: '/pieces', name: 'Pieces', exact: true, component: Pieces },
  { path: '/logs', name: 'Logs', exact: true, component: Log },
]

export default routes
