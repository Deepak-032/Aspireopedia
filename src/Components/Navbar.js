import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='navbar'>
                <div className='d-flex container'>
                    <div><Link to={''} className='ps-0'><img className='logo' src='/logo.png' alt='' /></Link></div>
                    <div><Link to={'/home/learning-materials'}>Learning Materials</Link></div>
                    <div><Link to={'/home/routemap'}>Routemap</Link></div>
                    <div><Link to={'/home/events'}>Events</Link></div>
                    <div><Link to={'/home/help-yourself'}>Help Yourself</Link></div>
                    <div><Link to={'/home/feedback'}>Feedback Form</Link></div>
                    {/* <div><Link to={''}>Contact Us</Link></div> */}
                    <div className='flex-fill'></div>
                    <div><i className='bi bi-search text-success' /><input className='search' type={"search"} /></div>
                    <div><Link to={''}><i className='bi bi-bell font20' /></Link></div>
                    <div><Link to={'/home/profile'} className='pe-0'><i className='bi bi-person font22' /></Link></div>
                </div>
            </div>
            <Outlet />
            <footer className='mt-5'>
                <div className='container pt-5'>
                    <div><Link to={''}><img className='logo' src='/logo.png' alt='' /></Link></div>
                </div>
            </footer>
        </>
    )
}

export default Navbar