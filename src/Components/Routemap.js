import React, { useState } from 'react'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Typography from '@mui/material/Typography'


function Routemap() {

    return (
        <div className='container mt-5'>
            <h2 class="fw-bold">Routemap</h2>
            <h6 className='text-success mb-5'>Lets know what's coming next.</h6>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Week</th>
                        <th>Agenda</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><div className='me-5 week active'>1</div></td>
                        <td><p className='route active'>CSS Welcome</p></td>
                        <td className='route active'>11/4/2022</td>
                        <td className='route active'>15/4/2022</td>
                    </tr>
                    <tr>
                        <td><div className='me-5 week active'>2</div></td>
                        <td><p className='route active'>Learn about CARE Culture and foundation of our CSS Business</p></td>
                        <td className='route active'>18/4/2022</td>
                        <td className='route active'>22/4/2022</td>
                    </tr>
                    <tr>
                        <td><div className='me-5 week'>3</div></td>
                        <td><p className='route'>Explore Tech Foundation</p></td>
                        <td className='route'>25/4/2022</td>
                        <td className='route'>29/4/2022</td>
                    </tr>
                    <tr>
                        <td><div className='me-5 week'>4</div></td>
                        <td><p className='route'>Learn about Windows</p></td>
                        <td className='route'>2/5/2022</td>
                        <td className='route'>6/5/2022</td>
                    </tr>
                    <tr>
                        <td><div className='me-5 week'>5</div></td>
                        <td><p className='route'>Learn about Windows Networking</p></td>
                        <td className='route'>9/5/2022</td>
                        <td className='route'>13/5/2022</td>
                    </tr>
                    <tr>
                        <td><div className='me-5 week'>6</div></td>
                        <td><p className='route'>Learn about Windows Active Directory</p></td>
                        <td className='route'>16/5/2022</td>
                        <td className='route'>20/5/2022</td>
                    </tr>
                    <tr>
                        <td><div className='me-5 week'>7</div></td>
                        <td><p className='route'>Learn about Azure VM and Storage</p></td>
                        <td className='route'>23/5/2022</td>
                        <td className='route'>27/5/2022</td>
                    </tr>
                    <tr>
                        <td><div className='me-5 week'>8</div></td>
                        <td><p className='route'>Learn about Azure Networking</p></td>
                        <td className='route'>30/5/2022</td>
                        <td className='route'>3/6/2022</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default Routemap