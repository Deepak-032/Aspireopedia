import React from 'react'
import { Link } from 'react-router-dom'

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
            <div className='container pt-5 pb-5 mb-5'>
                <div className='row'>
                    <div className='col-6'>
                        <iframe width="100%" height="100%" src={"https://www.youvisit.com/tour/microsoftin"} title="Campus Tour" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                    </div>
                    <div className='col-6 mt-4 mb-4'>
                        <h2 className='fw-bold mb-4'>Virtual Tour</h2>
                        <p className='font20 mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <a href={"https://www.youvisit.com/tour/microsoftin"} target="blank" className='btn btn-success'>View Full Size</a>
                    </div>
                </div>
            </div>
            <div className='container mb-5'>
                <h2 className='fw-bold'>Our different experiences connect us</h2>
                <h6 className='text-success mb-5'>We engage and connect to communities inside and outside Microsoft through several opportunities</h6>
                <div className="card mb-5">
                    <img src={'/image/dance.webp'} className="card-img-top" alt="" />
                    <div className="card-body">
                        <a href={'#'} className="dec_none hover_underline_animation">
                            <h5 className="card-title text-dark pb-1">Dance Club</h5>
                        </a>
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div>
                </div>
                <div className="card mb-5">
                    <img src={'/image/art.jpeg'} className="card-img-top" alt="" />
                    <div className="card-body">
                        <a href={'#'} className="dec_none hover_underline_animation">
                            <h5 className="card-title text-dark pb-1">Fine Arts Club</h5>
                        </a>
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div>
                </div>
                <div className="card mb-5">
                    <img src={'/image/music.jpeg'} className="card-img-top" alt="" />
                    <div className="card-body">
                        <a href={'#'} className="dec_none hover_underline_animation">
                            <h5 className="card-title text-dark pb-1">Music Club</h5>
                        </a>
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home