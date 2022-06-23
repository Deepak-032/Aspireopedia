import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
    return (
        <>
            <div className='text-center mt-3 mb-3'>
                <Link to={'/home'}><img className='logo_large' src='/logo.png' alt='' /></Link>
            </div>
            <div className="container" style={{ width: "35%" }}>
                <form className='mb-4 p-4' style={{ boxShadow: "0 0 10px rgb(0,0,0,0.22)" }}>
                    <h2 className="fw-bold text-center mb-4">Sign In</h2>
                    <div className="form-group mb-3">
                        <h6>Username</h6>
                        <input type="email" className="form-control" placeholder="xyz@microsoft.com" />
                    </div>
                    <div className="form-group mb-4">
                        <h6>Password</h6>
                        <input type="password" className="form-control" placeholder="password" />
                    </div>
                    <button className="btn btn-success w-100 mb-3">Sign In</button>
                </form>
                <div className="container text-center mb-1">
                    <h6>Don't have an account? <Link to="/register">Sign Up</Link></h6>
                </div>
            </div>
        </>
    )
}

export default Signin