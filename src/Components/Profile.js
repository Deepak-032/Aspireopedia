import React, { useState } from 'react'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Typography from '@mui/material/Typography'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Dropdown from './Dropdown'
import { styled } from '@mui/material/styles'
import Rating from '@mui/material/Rating'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'

const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
    },
}))

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon fontSize='large' color="error" />,
        label: 'Very Sad',
    },
    2: {
        icon: <SentimentDissatisfiedIcon fontSize='large' color="error" />,
        label: 'Sad',
    },
    3: {
        icon: <SentimentSatisfiedIcon fontSize='large' color="warning" />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon fontSize='large' color="success" />,
        label: 'Happy',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon fontSize='large' color="success" />,
        label: 'Joyful',
    },
}

function IconContainer(props) {
    const { value, ...other } = props
    return <span {...other}>{customIcons[value].icon}</span>
}

function Profile() {
    const steps = [
        {
            label: 'Alias Delivered',
            description: `For each ad campaign that you create, you can control how much
                    you're willing to spend on clicks and conversions, which networks
                    and geographical locations you want your ads to show on, and more.`,
        },
        {
            label: 'AVD Setup and Configured',
        },
        {
            label: 'Visual Studio Subscription Enabled',
        },
        {
            label: 'My Workspace Working',
        },
        {
            label: 'Welcome Goodies Delivered',
        },
    ]

    const friends = [
        'Jack Dawson',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
        "Riddhi", "Avinash", "Sarthak", "Anjali Chahal", "Deepak Vohra", "Yash Jain", "Jagrit", "Ajay"
    ]

    const [activeStep, setActiveStep] = useState(0)
    const [selectedFriends, setSelectedFriends] = useState([])
    const [mood, setMood] = useState('Happy')

    const handleChange = (event) => {
        const {
            target: { value },
        } = event
        setSelectedFriends(
            typeof value === 'string' ? value.split(',') : value,
        )
    }

    return (
        <div className='container mt-5 position-relative'>
            <h2 className='fw-bold'>Your Profile</h2>
            <h6 className='text-success mb-5'>Status: {mood}</h6>
            <div className='d-flex justify-content-between align-items-center mb-5'>
                <div>
                    <h6>Name: Oliver Hansen</h6>
                    <h6>E-mail: oliver.hansen@email.com</h6>
                    <h6>Phone: 98768890998</h6>
                    <button className="btn btn-success mt-4" id="generate">Generate Access Pass</button>

                </div>
                <img style={{ width: "150px" }} src="https://chart.googleapis.com/chart?cht=qr&chl=Hello+World&chs=160x160&chld=L|0" className="qr-code img-thumbnail" />
            </div>
            <Dropdown heading={"What's Your Step"} headingClassName="border-bottom pb-2">
                <Stepper className='mb-3' activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel
                                optional={
                                    index === steps.length - 1 ? (
                                        <Typography variant="caption">Last step</Typography>
                                    ) : null
                                }
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <Typography>{step.description}</Typography>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </Dropdown>
            <Dropdown heading={"Set Timer"} headingClassName="border-bottom pb-2">
                <p>Our organization is also concerned about your mental and physical health, set timers to update you timely regarding following activities.</p>
                <div className='mb-4'>
                    <h6 className='text-success'>Remind me to drink water</h6>
                    <div><input type="radio" name="water" /> After 30 min</div>
                    <div><input type="radio" name="water" /> After 1 hr</div>
                    <div><input type="radio" name="water" /> After 2 hr</div>
                    <div><input type="radio" name="water" /> After 3 hr</div>
                </div>
                <div className='mb-4'>
                    <h6 className='text-success'>Remind me to relax my eyes</h6>
                    <div><input type="radio" name="eyes" /> After 20 min</div>
                    <div><input type="radio" name="eyes" /> After 30 min</div>
                    <div><input type="radio" name="eyes" /> After 1 hr</div>
                    <div><input type="radio" name="eyes" /> After 2 hr</div>
                </div>
            </Dropdown>
            <Dropdown heading={"Add Close Friends"} headingClassName="border-bottom pb-2">
                <FormControl className="mb-3 mt-3 w-25">
                    <InputLabel id="friend">Select Friends</InputLabel>
                    <Select
                        labelId="friend"
                        label="Select Friends"
                        multiple
                        value={selectedFriends}
                        onChange={handleChange}
                    >
                        {
                            friends.map(f => <MenuItem key={f} value={f}>{f}</MenuItem>)
                        }
                    </Select>
                </FormControl>
                <div className='mb-4'>
                    {
                        selectedFriends.length !== 0 &&
                        <>
                            <h6 className='text-success'>Your Close Friends</h6>
                            {selectedFriends.map(f => <li>{f}</li>)}
                        </>
                    }
                </div>
            </Dropdown>
            <Dropdown heading={"Change Your Mood"} headingClassName="border-bottom pb-2">
                <h6 className='text-success mb-3'>Your Current Mood: {mood}</h6>
                <h6 className='fw-bold'>Change Your Mood</h6>
                <StyledRating
                    defaultValue={3}
                    IconContainerComponent={IconContainer}
                    getLabelText={(value) => customIcons[value].label}
                    highlightSelectedOnly
                    onChange={(e) => setMood(customIcons[e.target.value].label)}
                />
            </Dropdown>
            <button className='btn border-success text-success mt-4 ms-auto d-block'>Sign Out</button>
        </div>
    )
}

export default Profile