import {useState, useEffect} from 'react'
import './Login.css';

import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../services/firebase'
import {useNavigate} from 'react-router-dom'
import Aos from "aos";
// import {useAuthValue} from './AuthContext'
import { Button } from 'semantic-ui-react'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    const [error, setError] = useState('')

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    // const {setTimeActive} = useAuthValue()
    const navigate = useNavigate()

    const login = e => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
        
        navigate('/')
        })
        .catch(err => setError(err.message))
    }

return (
    <div className="loginContainer">
         <form onSubmit={login} name='login_form' className="sectionWrapper">
            <label data-aos="fade-left">Email</label>
          <input 
          data-aos="fade-right"
            type='email' 
            value={email}
            required
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}/>
<label data-aos="fade-left">Email</label>
          <input 
          data-aos="fade-right"
            type='password'
            value={password}
            required
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}/>

          <Button type='submit'>Login</Button>
          </form>
    </div>
  )
}

export default Login