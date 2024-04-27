import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'
import Protected from './Protected'
import Home from '../components/Home'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Register from '../components/Register'
import Forget from '../components/Forget'
import Reset from '../components/Reset'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SelectedItem from '../components/Selected_item'
import SavedItem from '../components/SavedItem'
import Pending from '../components/Pending'
import ToShip from '../components/ToShip'
import ToReceive from '../components/ToReceive'
import Received from '../components/Received'
import Chat from '../components/Chat'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Blogs from '../components/Blogs'
import Footer from './Footer'
import Terms from '../components/Terms'
import Faq from '../components/Faq'

const Header = () => {
    const [user, setUser]=useState({
        // wala laman
    });
    useEffect(()=>{
        const token = localStorage.getItem('token');

        axios.get('/user', 
        {
        headers:{'Authorization': `Bearer ${token}`}
          })
          .then((response)=> {
            // console.log(response);
            setUser(response.data);
          })
          .catch((error)=> {
            console.log(error);
          });

    },[]);
    
  return (
    <BrowserRouter>
        <div>
            <NavBar user={user} setUser={setUser}/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login user={user} setUser={setUser}/>}/>
                <Route path='/register' element={<Register user={user} setUser={setUser}/>}/>
                <Route path='/forget' element={<Forget/>}/>
                <Route path='/reset/:id' element={<Reset/>}/>
                
                <Route path='/profile/*' element={
                    <Protected>
                <Profile user={user} setUser={setUser}/>
                    </Protected>
                }/>

                <Route path='/item/:id' element={<SelectedItem user={user} setUser={setUser}/>}/>
                <Route path='/saved' element={<SavedItem user={user} setUser={setUser}/>}/>
                <Route path='/pending' element={<Pending user={user} setUser={setUser}/>}/>
                <Route path='/toship' element={<ToShip user={user} setUser={setUser}/>}/>
                <Route path='/toreceive' element={<ToReceive user={user} setUser={setUser}/>}/>
                <Route path='/received' element={<Received user={user} setUser={setUser}/>}/>
                <Route path='/chat' element={<Chat user={user} setUser={setUser}/>}/>
                <Route path='/gallery' element={<Gallery />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/blog' element={<Blogs />}/>
                <Route path='/terms' element={<Terms />}/>
                <Route path='/faq' element={<Faq />}/>

            </Routes>
        </div>
    <Footer/>

    </BrowserRouter>
    
  )
}

export default Header