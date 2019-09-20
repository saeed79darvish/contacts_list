import React, { useState, useEffect } from 'react';
import { login, clearError } from '../action/authAction'
import { setAlert } from "../action/alertAction"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import Alert from '../layout/Alert';



const Login = ({ auth: { error, isAuthenticated }, login, clearError, setAlert, history }) => {




    useEffect(() => {
        if (isAuthenticated) {
            history.push('/');
        }

        if (error === "Invalid Credentials") {
            setAlert(error, 'danger');
            clearError();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, history]);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            setAlert('Please fill in all fields', 'danger');
        } else {
            login({
                email,
                password
            });
        }
    };

    return (


        <div style={{ height: "100vh" }} className="container">
            <div className="row">
                <div className="col-sm">
                    <div style={{ marginTop: "100px" }} >
                        <Alert />
                        <h1 className="text-white" >
                            Account <span className="text-danger">Login</span>
                        </h1>


                        <form onSubmit={onSubmit}>
                            <div className='list-group'>
                                <label className="text-white" htmlFor='email'>Email Address</label>
                                <input
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className='list-group'>
                                <label className="text-white" htmlFor='password'>Password</label>
                                <input
                                    type='password'
                                    name='password'
                                    value={password}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <input
                                style={{ marginTop: "30px" }}
                                type='submit'
                                value='Login'
                                className='btn btn-danger btn-block'
                            />
                        </form>


                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <Link className="text-white" to="/register">create a new account</Link>
                    </div>
                </div>
                <div style={{ marginTop: "180px" }} className="col-sm">
                    <h3 className="text-white  " >Hi, welcome to <span className="text-danger">CONTACT LIST</span>  application</h3>
                    <h3 className="text-white ">Create your personal <span className="text-danger">CONTACT LIST</span></h3>
                </div>
            </div>
        </div >

    );
};



const mapStateToProps = state => ({
    alerts: state.alerts,
    auth: state.authentication
})

export default connect(mapStateToProps, { login, clearError, setAlert })(Login);
