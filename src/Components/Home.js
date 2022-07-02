import React from 'react'

function Home() {

    return (
        <>
            <div style={{ background: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0))" }}>
                <div className='container pt-5 pb-5'>
                    <div className='banner_main d-flex justify-content-center align-items-center'>
                        <img src='/picture1.png' alt='' />
                        <h1>A One Stop<br />Application for<br />Aspire Interns.</h1>
                        {/* <h1>We are here<br />to make your Onboarding<br />experience<br />Better.</h1> */}
                    </div>
                </div>
            </div>
            <div className='container pt-5 mb-5'>
                <div className='row'>
                    <div className='col-6'>
                        <iframe width="100%" height="100%" src={"https://www.youvisit.com/tour/microsoftin"} title="Campus Tour" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                    </div>
                    <div className='col-6 mt-4 mb-4'>
                        <h2 className='fw-bold mb-4'>Virtual Tour</h2>
                        <p className='font20 mb-4'>Nestled amidst 54 sprawling acres, the ‘smart’ and ‘green’ Hyderabad campus, consisting of three buildings, manages to blend in seamlessly with the city’s landscape. The energy efficient and eco-friendly campus has hi-tech safety systems and recently bagged a LEED Gold Certification for one of its buildings.
                            You can choose to eat at our 24/7 multi-cuisine cafeteria that caters to a diverse range of tastes. Coffee, tea, fruits, health drinks and lassi as well as infused water is available in informal meeting areas on each floor. Hot filter coffee is also available at all facilities. Employees can recharge and refresh at any given time.</p>
                        <a href={"https://www.youvisit.com/tour/microsoftin"} target="blank" className='btn btn-success'>View Full Size</a>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-6 mt-4 mb-4'>
                        <h2 className='fw-bold mb-4'>Virtual Tour</h2>
                        <p className='font20 mb-4'>The new India Development Center in Noida is built with state-of-the-art facilities giving employees access to meeting rooms, conference halls, and open spaces.
                            Spread across 31,000 square feet of office area, the facility consists of a cafeteria and a gaming room. Emergency facilities like evacuation chair/stretchers and first aid assistance have been factored in while designing the space. The center also has air purifiers installed for clean and healthy air.
                            The center has been designed with ample collaboration spaces to enhance employee experience and productivity.
                            Transport facilities are provided to all employees, supported by a help desk, which is operational 24x7</p>
                        <a href={"https://www.youvisit.com/tour/microsoftin"} target="blank" className='btn btn-success'>View Full Size</a>
                    </div>
                    <div className='col-6'>
                        <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/0qgnAG-uQoY"} title="Campus Tour" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-6'>
                        <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/d4llpOkK9iw"} title="Campus Tour" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                    </div>
                    <div className='col-6 mt-4 mb-4'>
                        <h2 className='fw-bold mb-4'>Virtual Tour</h2>
                        <p className='font20 mb-4'>Microsoft India Development Center in Bengaluru is located in the heart of the city’s business district, near prominent landmarks. The engineering teams work in an open office layout in a building that reflects both ethnic Indian architecture and modern structural material. The design also includes features that provide easy access and convenient movement for differently abled people.
                            The space hosts facilities and services catering to the varied requirements of our cross-functional, cross-cultural family of employees. Hot filter coffee is available in all facilities. As a city, Bengaluru is very cosmopolitan combining a rich cultural heritage with a wide range of industrial and technological achievements. </p>
                        <a href={"https://www.youvisit.com/tour/microsoftin"} target="blank" className='btn btn-success'>View Full Size</a>
                    </div>
                </div>
            </div>
            <div className='container mb-5'>
                <h2 className='fw-bold'>Our different experiences connect us</h2>
                <h6 className='text-success mb-5'>We engage and connect to communities inside and outside Microsoft through several opportunities</h6>
                <div className='d-flex'>
                    <div className="card mb-5 me-3">
                        <img src={'/image/dance.webp'} className="card-img-top clubs_img" alt="" />
                        <div className="card-body">
                            <a href={'#'} className="dec_none hover_underline_animation">
                                <h5 className="card-title text-dark pb-1">Dance Club</h5>
                            </a>
                            <p className="card-text">Move with the rhythm with other dance enthusiasts and join the community of dancers at Microsoft!</p>
                            <button className='btn btn-success'>Join Now</button>
                        </div>
                    </div>
                    <div className="card mb-5 me-3">
                        <img src={'/image/art.jpeg'} className="card-img-top clubs_img" alt="" />
                        <div className="card-body">
                            <a href={'#'} className="dec_none hover_underline_animation">
                                <h5 className="card-title text-dark pb-1">Fine Arts Club</h5>
                            </a>
                            <p className="card-text">Beautiful art begins with a blank canvas, art implements and some inspiration! Join the community of artists at Microsoft and create art together.</p>
                            <button className='btn btn-success'>Join Now</button>
                        </div>
                    </div>
                    <div className="card mb-5">
                        <img src={'/image/music.jpeg'} className="card-img-top clubs_img" alt="" />
                        <div className="card-body">
                            <a href={'#'} className="dec_none hover_underline_animation">
                                <h5 className="card-title text-dark pb-1">Music Club</h5>
                            </a>
                            <p className="card-text">Music is in the air! Let's create music and jam together! Join the community of music-lovers at Microsoft.</p>
                            <button className='btn btn-success'>Join Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home