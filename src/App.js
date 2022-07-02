import React, { useEffect, useRef, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Feedback from './Components/Feedback';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import HelpYourself from './Components/HelpYourself';
import LearningMaterials from './Components/LearningMaterials';
import Events from './Components/Events';
import Routemap from './Components/Routemap';
import Profile from './Components/Profile';
import ProtectedRoute from './Components/ProtectedRoute';
import PreOnboarding from './Components/PreOnboarding';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon fontSize='large' color="error" />,
  },
  2: {
    icon: <SentimentDissatisfiedIcon fontSize='large' color="error" />,
  },
  3: {
    icon: <SentimentSatisfiedIcon fontSize='large' color="warning" />,
  },
  4: {
    icon: <SentimentSatisfiedAltIcon fontSize='large' color="success" />,
  },
  5: {
    icon: <SentimentVerySatisfiedIcon fontSize='large' color="success" />,
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

function App() {
  const splashRef = useRef()
  const location = useLocation()
  const [splash, setSplash] = useState(false)
  useEffect(() => {
    if (splash && location.pathname === '/home') {
      splashRef.current.classList.add("fade")
      setTimeout(() => {
        splashRef.current.classList.add("d-none")
        setSplash(false)
      }, 500)
    }
  }, [splash, location.pathname])
  console.log(location.pathname)
  return (
    <>
      {location.pathname === '/home' &&
        <div ref={splashRef} className='splash_screen'>
          <div>
            <div><img className='animate__animated animate__rotateIn logo_xl mb-4 me-4' src='/logo.png' alt='' /></div>
            <h2 className='fw-bold ms-3 mb-3'>How are you feeling today?</h2>
            <div>
              <StyledRating
                defaultValue={3}
                IconContainerComponent={IconContainer}
                highlightSelectedOnly
                onChange={() => setSplash(true)}
              />
            </div>
          </div>
        </div>
      }
      <Routes>
        <Route exact path='/' element={<Signin />} />
        {/* <Route exact path='/register' element={<Signup />} /> */}
        <Route exact path='/preonboarding' element={<PreOnboarding />} />
        <Route path='/home' element={<ProtectedRoute><Navbar /></ProtectedRoute>}>
          <Route index element={<Home />} />
          <Route path='feedback' element={<Feedback />} />
          <Route path='events' element={<Events />} />
          <Route path='routemap' element={<Routemap />} />
          <Route path='profile' element={<Profile />} />
          <Route path='help-yourself' element={<HelpYourself />} />
          <Route path='learning-materials' element={<LearningMaterials />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
