import React from 'react'

function Feedback() {
    return (
        <div className="container mt-5 mb-5">
            <h2 className="fw-bold">We would love to hear from you</h2>
            <h6 className='text-success'>Help us make your onboarding even more smoother.</h6>
            <table className="table feedback_table mt-5">
                <thead>
                    <tr>
                        <th></th>
                        <th id="rating">Very Good</th>
                        <th id="rating">Good</th>
                        <th id="rating">Fair</th>
                        <th id="rating">Poor</th>
                        <th id="rating">Very Poor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-start'>How satisfied were you with the timeliness of alias delivery</td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                    </tr>
                    <tr>
                        <td className='text-start'>How satisfied were you with the timeliness of alias delivery</td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                    </tr>
                    <tr>
                        <td className='text-start'>How satisfied were you with the timeliness of alias delivery</td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                    </tr>
                    <tr>
                        <td className='text-start'>How satisfied were you with the timeliness of alias delivery</td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                    </tr>
                    <tr>
                        <td className='text-start'>How satisfied were you with the timeliness of alias delivery</td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                        <td><input className="form-check-input" type="radio" name="exampleRadios" /></td>
                    </tr>
                </tbody>
            </table>
            <h6 className="mt-4 fw-bold">What change you want us to bring?</h6>
            <textarea className="form-control mt-3" rows="4"></textarea>
            <h6 className="mt-4 fw-bold">What should we change?</h6>
            <textarea className="form-control mt-3" rows="4"></textarea>
            <h6 className="mt-4 fw-bold">What should we change in order to live up to your expectations?</h6>
            <textarea className="form-control mt-3" rows="4"></textarea>
            <button className="btn btn-success w-100 mt-4">Send Feedback</button>
        </div>
    )
}

export default Feedback