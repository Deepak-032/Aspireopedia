import React from 'react'

function Events() {
    return (
        <div class="container mt-5">
            <h2 class="fw-bold">Events</h2>
            <h6 className='text-success mb-5'>This is what we have designed for you.</h6>
            <div class="row align-items-center mb-4 rounded shadow p-3 mb-5 rounded">
                <div class="col-5">
                    <img src="/image/CX-Presentation.PNG" class="w-100" alt="..." />
                </div>
                <div class="col ms-5">
                    <h4 class="fw-bold ">Customer Story Presentation</h4>
                    <ul>
                        <li>Collaborate with Team</li>
                        <li>Brainstorm on different Customer Stories to select one</li>
                        <li>Analyze the story and deliver Presentation</li>
                    </ul>
                    <a href="#" class="btn btn-success">Resources</a>
                </div>
            </div>
            <div class="row align-items-center mb-4 rounded shadow p-3 mb-5 rounded">
                <div class="col">
                    <h4 class="fw-bold ">Aspireathon</h4>
                    <ul>
                        <li>Collaborate with Team</li>
                        <li>Brainstorm on the Problem Statetement</li>
                        <li>Deliver your unique Solution through Video and Prototype</li>
                    </ul>
                    <a href="#" class="btn btn-success">Resources</a>
                </div>
                <div class="col-5">
                    <img src="/image/Aspireathon-3.PNG" class="w-100" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default Events