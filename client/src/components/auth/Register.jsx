import React, { useState, useEffect } from 'react'
import { setAlert } from '../action/alertAction'
import { register, clearError, loadUser } from '../action/authAction'
import { connect } from 'react-redux'
import Alert from "../layout/Alert";
import { Link } from "react-router-dom"

const Register = ({ history, loadUser, setAlert, register, clearError, auth: { error, isAuthenticated } }) => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })
    
    useEffect(() => {

        if (isAuthenticated) {
            history.push("/")
        }
        if (error === "User Already exists") {
            setAlert(error, "danger")
            clearError();

        }

        //eslint-disable-next-line
    }, [error, isAuthenticated, history])

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault()
        if (name === "" || email === "") {

            setAlert("please enter correct info", "danger")
        } else if (password !== password2) {
            setAlert("password should be same", "danger")
        } else {
            // loadUser()
            register({ name, email, password })

            setUser({
                name: "",
                email: "",
                password: "",
                password2: ""
            })

        }
    }

    const { name, email, password, password2 } = user;
    return (
        <div style={{ height: "100vh" }} className="container">

            <div style={{ marginTop: "150px", padding: "3%" }} className="form-container" >
                <Alert />
                <h1 className="text-white">
                    Account <span className="text-danger">Register</span>

                </h1>
                <form className="form-group" onSubmit={onSubmit} >
                    <div style={{ marginLeft: "5px" }} className="list-group">
                        <label className="text-white" htmlFor="name">Name</label>
                        <input type="text" name="name" value={name} onChange={onChange} required minLength="4" />
                    </div>
                    <div style={{ marginLeft: "5px" }} className="list-group">
                        <label className="text-white" htmlFor="name">Email Address</label>
                        <input type="email" name="email" value={email} onChange={onChange} required />
                    </div>
                    <div style={{ marginLeft: "5px" }} className="list-group">
                        <label className="text-white" htmlFor="name">Password</label>
                        <input type="password" name="password" value={password} onChange={onChange} required minLength="6" />
                    </div>
                    <div style={{ marginLeft: "5px" }} className="list-group">
                        <label className="text-white" htmlFor="name">Confirm Password</label>
                        <input type="password" name="password2" value={password2} onChange={onChange} required minLength="6" />
                    </div>

                    <input style={{ marginTop: "30px" }} type="submit" value="Register" className="btn btn-danger btn-block " />
                </form>


            </div>
            <div style={{ marginTop: "20px" }}>
                <Link className="text-white" to="/login">already registered</Link>
            </div>

        </div>
    )
}


const mapStateToProps = state => ({
    alerts: state.alerts,
    auth: state.authentication
})

export default connect(mapStateToProps, { setAlert, register, loadUser, clearError })(Register);
