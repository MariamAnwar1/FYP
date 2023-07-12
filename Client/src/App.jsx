import { Password } from '@mui/icons-material';
import React, { useState } from 'react'
import Forget from './pages/forget/password'
import Signup from './pages/login/signup/signup.jsx'
import Profile from './pages/Profile/Profile'
import Navebar from './pages/Navebar/Navebar'
import Mainpage from './pages/mainpage/mainpage'
import Login from './pages/login/login'
import Services from './pages/Services/Services'
import PostServices from './pages/PostServices/PostServices'
import ServicesDetail from './pages/ServicesDetail/ServicesDetail'
import Notification from './pages/Notification/Notification'
import Response from './pages/Response/Response'
import Footer from './pages/Footer/Footer'
import { Route, Routes } from 'react-router';


function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  return (

    <>
      <Navebar isUserLoggedIn={isUserLoggedIn}  setIsUserLoggedIn={setIsUserLoggedIn}/>
      <Routes>
        <Route path='/' index element={<Mainpage />} />
        <Route path='/login' element={<Login setIsUserLoggedIn={setIsUserLoggedIn} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forget' element={<Forget />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/mainpage' element={<Mainpage />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/PostServices' element={<PostServices />} />
        <Route path='/ServicesDetail' element={<ServicesDetail />} />
        <Route path='/Notification' element={<Notification />} />
        <Route path='/Response' element={<Response />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


