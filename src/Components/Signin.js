import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

function Signin() {
    const navigate = useNavigate()
    const [user, setUser] = useState({ email: '', password: '' })

    const signin = async e => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, user.email, user.password)
            navigate('/home')
        } catch (e) {
            alert(e.message)
        }
    }
    
    const onChangeHandler = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className='text-center mt-3 mb-3'>
                <Link to={'/home'}><img className='logo_large' src='/logo.png' alt='' /></Link>
            </div>
            <div className="container" style={{ width: "35%" }}>
                <form onSubmit={signin} className='mb-4 p-4' style={{ boxShadow: "0 0 10px rgb(0,0,0,0.22)" }}>
                    <h2 className="fw-bold text-center mb-4">Sign In</h2>
                    <div className="form-group mb-3">
                        <h6>Username</h6>
                        <input required name='email' type="email" value={user.email} onChange={onChangeHandler} className="form-control"/>
                    </div>
                    <div className="form-group mb-4">
                        <h6>Password</h6>
                        <input required name='password' type="password" value={user.password} onChange={onChangeHandler} className="form-control"/>
                    </div>
                    <button className="btn btn-success w-100 mb-3">Sign In</button>
                </form>
                {/* <div className="container text-center mb-1">
                    <h6>Don't have an account? <Link to="/register">Sign Up</Link></h6>
                </div> */}
            </div>
        </>
    )
}

export default Signin