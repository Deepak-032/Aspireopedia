import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

function Signup() {
    const navigate = useNavigate()
    const [user, setUser] = useState({ email: '', password: '', confirmPassword: '' })

    const signup = async e => {
        e.preventDefault()
        if(user.password !== user.confirmPassword){
            return alert("Password not matched with Confirm Password")
        }

        try {
            await createUserWithEmailAndPassword(auth, user.email, user.password)
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
            <div className="container mb-5" style={{ width: "35%" }}>
                <form onSubmit={signup} className="mb-4 p-4" style={{ boxShadow: "0 0 10px rgb(0,0,0,0.22)" }}>
                    <h2 className="fw-bold text-center mb-4">Sign Up</h2>
                    <h6 className="mb-3 font14 text-center">Please fill in this form to create an account.</h6>
                    <div className="form-group mb-3">
                        <h6>Username</h6>
                        <input required name='email' type="email" value={user.email} onChange={onChangeHandler} className="form-control"/>
                    </div>
                    <div className="form-group mb-3">
                        <h6>Enter Password</h6>
                        <input required name='password' type="password" value={user.password} onChange={onChangeHandler} className="form-control"/>
                    </div>
                    <div className="form-group mb-3">
                        <h6>Confirm Password</h6>
                        <input required name='confirmPassword' value={user.confirmPassword} onChange={onChangeHandler} type="password" className="form-control"/>
                    </div>
                    {/* <div className="form-group mb-3">
                        <h6>Contact Number</h6>
                        <input type="tel" pattern="[6-9]{1}[0-9]{9}" required className="form-control" placeholder="Enter number" />
                    </div> */}
                    <h6 className='font14 mb-3'>By creating an account you agree to our <Link to={''}>Terms &amp; Privacy.</Link></h6>
                    <button className="btn btn-success w-100 mb-3">Sign Up</button>
                </form>
                <div className="container text-center mb-1">
                    <h6>Already have an account? <Link to="/">Sign In</Link></h6>
                </div>
            </div>
        </>
    )
}

export default Signup