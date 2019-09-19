import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { } from "../action/authAction"


const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => {
    return (
        <Route {...rest} render={props => !isAuthenticated && !loading ? (
            <Redirect to="/about" />
        ) : (<Component {...props} />)} />
    )
}



const mapStateToProps = state => ({
    alerts: state.alerts,
    auth: state.authentication
})

export default connect(mapStateToProps)(PrivateRoute);
