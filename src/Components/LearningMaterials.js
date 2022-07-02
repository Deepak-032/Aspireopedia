import React from 'react'
import { Link } from 'react-router-dom'

function LearningMaterials() {
    return (
        <div className="container mt-5">
            <h2 className="fw-bold">Revise your Learnings</h2>
            <h6 className='text-success mb-5'>Have a look at what you have learned till now.</h6>
            <div className="row align-items-center mb-4 rounded" style={{ backgroundColor: "rgb(0,0,0,0.06)" }}>
                <div className="col-4">
                    <img src="/image/cbcf.png" className="w-100" alt="..." />
                </div>
                <div className="col ms-4">
                    <h4 className="fw-bold ">Week 1</h4>
                    <p className="card-text">The CSS Business and Culture Foundations (CBCF) course is going to be a thrilling and exciting experience for you as you learn new skills and tools. It will provide the trainees with an opportunity to understand the general and specific guidelines on using teams, the day-wise structure of the course, and the route map for them to familiarize themselves on how their journey is going to look like and finally, what are things they can do to climb like a pro.</p>
                    <a href="#" className="btn btn-success me-3">Watch Recordings</a>
                    <a href="#" className="btn border border-success text-success">Watch Presentation</a>
                </div>
            </div>
            <hr />
            <div className="row align-items-center mb-4 rounded" style={{ backgroundColor: "rgb(0,0,0,0.03)" }}>
                <div className="col">
                    <h4 className="fw-bold ">Week 2</h4>
                    <p className="card-text">Explore Tech Foundation</p>
                    <p>The Tech Foundation course is going to be a thrilling and exciting experience for you as you learn new skills and tools. It gives you the brief about everything you are going to be do in your technical trainings.</p>
                    <a href="#" className="btn btn-success me-3">Watch Recordings</a>
                    <a href="#" className="btn border border-success text-success">Watch Presentation</a>
                </div>
                <div className="col-4 ms-4">
                    <img src="/image/Tech-Foundation.png" className="w-100" alt="..." />
                </div>
            </div>
            <hr />
            <div className="row align-items-center mb-4 rounded" style={{ backgroundColor: "rgb(0,0,0,0.06)" }}>
                <div className="col-4">
                    <img src="/image/windows-tech.png" className="w-100" alt="..." />
                </div>
                <div className="col ms-4">
                    <h4 className="fw-bold ">Week 3</h4>
                    <p className="card-text">Learn about Windows</p>
                    <p>Windows is a set of numerous proprietary graphical running gadget households, all of that are evolved and advertised via way of means of Microsoft. Each own circle of relatives caters to a positive quarter of the computing industry. Active Windows households encompass Windows NT and Windows IoT</p>
                    <a href="#" className="btn btn-success me-3">Watch Recordings</a>
                    <a href="#" className="btn border border-success text-success">Watch Presentation</a>
                </div>
            </div>
            <hr />
            <div className="row align-items-center mb-4 rounded" style={{ backgroundColor: "rgb(0,0,0,0.03)" }}>
                <div className="col">
                    <h4 className="fw-bold ">Week 4</h4>
                    <p className="card-text">Learn about Windows Networking</p>
                    <p>Networking is important in today’s world to everyone in business and at home. This lesson explains how a user configures their desktop to connect to other computers on a home network, a business network or the Internet. After configuring the addressing on a computer, it can connect to various networks.</p>
                    <a href="#" className="btn btn-success me-3">Watch Recordings</a>
                    <a href="#" className="btn border border-success text-success">Watch Presentation</a>
                </div>
                <div className="col-4 ms-4">
                    <img src="/image/windows-net.png" className="w-100" alt="..." />
                </div>
            </div>
            <hr />
            <div className="row align-items-center mb-4 rounded" style={{ backgroundColor: "rgb(0,0,0,0.06)" }}>
                <div className="col-4">
                    <img src="/image/Active-directory.png" className="w-100" alt="..." />
                </div>
                <div className="col ms-4">
                    <h4 className="fw-bold ">Week 5</h4>
                    <p className="card-text">Learn about Windows Active Directory</p>
                    <p>Active Directory (AD) is a database and set of services that connect users with the network resources they need to get their work done. The database (or directory) contains critical information about your environment, including what users and computers there are and who’s allowed to do what.</p>
                    <a href="#" className="btn btn-success me-3">Watch Recordings</a>
                    <a href="#" className="btn border border-success text-success">Watch Presentation</a>
                </div>
            </div>
            <hr />
            <div className="row align-items-center mb-4 rounded" style={{ backgroundColor: "rgb(0,0,0,0.06)" }}>
                <div className="col-4">
                    <img src="/image/Azure-vm.png" className="w-100" alt="..." />
                </div>
                <div className="col ms-4">
                    <h4 className="fw-bold ">Week 6</h4>
                    <p className="card-text">Learn about Azure VM and Storage</p>
                    <p>Infrastructure as a service (IaaS) is a type of cloud computing service that offers essential compute, storage, and networking resources on demand, on a pay-as-you-go basis. IaaS is one of the four types of cloud services, along with software as a service (SaaS), platform as a service (PaaS), and serverless.</p>
                    <a href="#" className="btn btn-success me-3">Watch Recordings</a>
                    <a href="#" className="btn border border-success text-success">Watch Presentation</a>
                </div>
            </div>
            <hr />
            <div className="row align-items-center mb-4 rounded" style={{ backgroundColor: "rgb(0,0,0,0.03)" }}>
                <div className="col">
                    <h4 className="fw-bold ">Week 7</h4>
                    <p className="card-text">Learn about Azure Networking</p>
                    <p>Azure Networking is a communication protocol for connecting multiple resources via the Internet. Microsoft provides various services and tools under Azure that make your network strong and easy to manage. Azure is the name of the cloud computing service owned by Microsoft that provides IaaS, Paas and SaaS.</p>
                    <a href="#" className="btn btn-success me-3">Watch Recordings</a>
                    <a href="#" className="btn border border-success text-success">Watch Presentation</a>
                </div>
                <div className="col-4 ms-4">
                    <img src="/image/Azure-net.png" className="w-100" alt="..." />
                </div>
            </div>
            <div className='mt-5'>Access your Pre-Onboarding Tech Talks <Link to='/preonboarding'>here</Link></div>
        </div>
    )
}

export default LearningMaterials