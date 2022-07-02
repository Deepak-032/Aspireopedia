import React from 'react'

function PreOnboarding() {
    return (
        <div className="container">
            <div className="mb-5">
                <h2 className="fw-bold mt-5">Tech Talks for University Hires</h2>
                <h6 className="text-success mb-4">Congratulations to all the new hires for getting selected as an Intern.</h6>
                <div className='mb-5'>
                    <h6><span className='blink'>🚩</span>Your background verification is still pending click <a href='#'>here</a> to proceed.</h6>
                    <h6><span className='blink'>🚩</span>You will get your alias, on your first day <a href='#'>here</a>.</h6>
                </div>
                <div className="d-flex pt-3 pb-3" style={{ backgroundColor: "rgb(239,222,212)" }}>
                    <div style={{ flex: "1" }}>
                        <img src="/image/1.png" style={{ height: "300px", width: "auto", margin: "120px 0 0 80px"}} />
                    </div>
                    <div style={{ flex: "1" }}>
                        <h2 className="mb-5"><center>Why these tech talks?</center></h2>
                        <h5 className=""><center>These virtual Tech talks helps to break the ice on a technology standpoint in regards to Microsoft Technologies.Before aspires come to their respective sites and start their journey with Microsoft they are given a gist of Microsoft Technologies so that they feel at ease and are aware of the wide profile of Technology supported by Microsoft which in turn help in their quick ramp-up during their three-month internship with Microsoft and while their training in respective Teams.</center></h5>
                    </div>
                    <div style={{ flex: "1" }}>
                        <img src="/image/2.jpg" className="card-img-top" />
                    </div>
                </div>
            </div>
            <div className="d-flex">
                <div className="card me-4 rounded shadow-lg" style={{ flex: "1" }}>
                    <img src="/image/SQL  Big Data.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">SQL/Big Data</h5>
                        <p className="card-text">SQL Server Big Data Clusters provide flexibility in how you interact with your big data. You can query external data sources, store big data in HDFS managed by SQL Server, or query data from multiple external data sources through the cluster.</p>
                        <span style={{ borderStyle: " outset" }}>02/01/2022</span><br />
                        <a href="#" className="btn btn-success mt-2">Join Teams Meeting</a>
                    </div>
                </div>
                <div className="card me-4 rounded shadow-lg" style={{ flex: "1" }}>
                    <img src="/image/AI & IoT.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">AI & IoT</h5>
                        <p className="card-text">The combination of AI with the IoT has the potential to reshape the way industries, businesses, and economies operate. IoT powered by AI generates intelligent technologies that mimic intelligent behaviour and assist in decision-making with little or no human intervention.</p>
                        <span style={{ borderStyle: "outset" }}>18/01/2022</span><br />
                        <a href="#" className="btn btn-success mt-2">Join Teams Meeting</a>
                    </div>
                </div>
                <div className="card me-4 rounded shadow-lg" style={{ flex: "1" }}>
                    <img src="/image/Azure.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Azure</h5>
                        <p className="card-text">Microsoft Azure, often referred to as Azure is a cloud computing service operated by Microsoft for application management via Microsoft-managed data centers. It provides SaaS, PaaS and IaaS and supports many different programming languages, tools.
                        </p>
                        <span style={{ borderStyle: "outset" }}>02/02/2022</span><br />
                        <a href="#" className="btn btn-success mt-2">Join Teams Meeting</a>
                    </div>
                </div >
            </div >
            <div className="d-flex mt-4">
                <div className="card me-4 rounded shadow-lg" style={{ flex: "1" }}>
                    <img src="/image/_M365_.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">M-365</h5>
                        <p className="card-text">Learn about Microsoft 365 - a productivity cloud that delivers innovative and intelligent experiences, rich organizational insights, and a trusted platform to help people and organizations get more done.</p>
                        <span style={{ borderStyle: "outset" }}>12/02/2022</span><br />
                        <a href="#" className="btn btn-success mt-2">Join Teams Meeting</a>
                    </div>
                </div>
                <div className="card me-4 rounded shadow-lg" style={{ flex: "1" }}>
                    <img src="/image/Developer.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Developer</h5>
                        <p className="card-text">Microsoft Developer provides developer services for allowing teams to plan work, collaborate on code development, build and deploy applications. Azure DevOps supports a collaborative culture and set of processes that bring together developers, project managers, and contributors to develop software.</p>
                        <span style={{ borderStyle: "outset" }}>26/02/2022</span><br />
                        <a href="#" className="btn btn-success mt-2">Join Teams Meeting</a>
                    </div>
                </div>
                <div className="card me-4 rounded shadow-lg" style={{ flex: "1" }}>
                    <img src="/image/Dynamics.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Dynamics</h5>
                        <p className="card-text">Microsoft Dynamics is a line of enterprise resource planning (ERP) and customer relationship management (CRM) software applications. Microsoft markets Dynamics applications through a network of reselling partners who provide specialized services
                        </p>
                        <span style={{ borderStyle: "outset" }}>15/03/2022</span><br />
                        <a href="#" className="btn btn-success mt-2">Join Teams Meeting</a>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default PreOnboarding