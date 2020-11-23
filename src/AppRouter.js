import React from 'react'
import { Route, BrowserRouter as Router} from 'react-router-dom'
import ClienteRouter from './components/cliente/ClienteRouter'

const AppRouter = () => {
    return (
        <Router>
            <Route exact path="/store" component={ClienteRouter} />
        </Router>
    )
}

export default AppRouter
