import React from 'react'
import { Route, BrowserRouter as Router} from 'react-router-dom'
import AdminRouter from './components/admin/AdminRouter'
import ClienteRouter from './components/cliente/ClienteRouter'

const AppRouter = () => {
    return (
        <Router>
            <Route exact path="/store" component={ClienteRouter} />
            <Route exact path="/store/admin" component={AdminRouter} />
        </Router>
    )
}

export default AppRouter
