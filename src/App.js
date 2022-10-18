import './App.css';
import Create from './components/CreateWizKid/create';
import Read from './pages/Read/read';
import Update from './components/UpdateWizkid/update';
import Login from './pages/Login/Login';
import Aos from "aos";

import { BrowserRouter, Route, Routes } from "react-router-dom";


import {useState, useEffect} from 'react'
import {AuthProvider} from './context/AuthContext'
import {auth} from './services/firebase'
import {onAuthStateChanged} from 'firebase/auth'

import {Navigate} from 'react-router-dom'

function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  console.log(currentUser)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])
  return (
    <BrowserRouter>
      <div className="main">
        <h1 className="main-header" data-aos="fade-left">OWOW</h1> 
        <AuthProvider value={{currentUser, timeActive, setTimeActive}}>  
    <Routes>
        <Route  path='/create' element={<Create/>} />
        <Route  path='/login' element={<Login/>} />
        <Route  path='/' element={<Read/>}/>
        <Route path='/update' element={<Update/>} />
        <Route path="/login" element={
            !currentUser?.emailVerified
            ? <Login/>
            : <Navigate to='/' replace/>
          } />
    </Routes>
    </AuthProvider></div>
    </BrowserRouter>
  );
}

export default App;