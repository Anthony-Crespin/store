import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AdminMain from './AdminMain/AdminMain'

const AdminRouter = () => {
    return (
        <>
            <Router>
                <Route exact path="/store/admin" component={AdminMain} />
            </Router>
        </>
    )
}

export default AdminRouter
