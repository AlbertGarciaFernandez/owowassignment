import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react'
import './create.css';
import axios from 'axios';
import Aos from "aos";
import { useNavigate } from 'react-router';

export default function Create() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');

        const postData = () => {
            axios.post(`https://634e54d84af5fdff3a58df62.mockapi.io/wizkid`, {
                firstName,
                email,
                phonenumber
            }).then(() => {
                navigate('/')
            })
        }

    return (
        <div className='createContainer' >
            <Form onSubmit={postData} className="createWrapper">
            <Form.Field>
                    <label data-aos="fade-left">First Name</label>
                    <input data-aos="fade-right" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                    <label data-aos="fade-left">Email</label>
                    <input  data-aos="fade-right" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                    <label data-aos="fade-left">Phone Number</label>
                    <input data-aos="fade-right" placeholder='Phone Number' onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </Form.Field>
                    <Button data-aos="zoom-in-up" type='submit'>Submit</Button>
            </Form>
        </div>
    )
}