import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import Aos from "aos";
import { useNavigate } from 'react-router';
import './update.css';

export default function Update() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    let navigate = useNavigate();
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [email, setEmail] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setPhonenumber(localStorage.getItem('Phone Number'));
        setEmail(localStorage.getItem('Email'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://634e54d84af5fdff3a58df62.mockapi.io/wizkid/${id}`, {
            firstName,
            phonenumber,
            email
        }).then(() => {
            navigate('/')
        })
    }
    return (
        <div className='updateContainer'>
            <Form className="updateWrapper">
                <Form.Field>
                    <label data-aos="fade-left">First Name</label>
                    <input  placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label data-aos="fade-left">Phone Number</label>
                    <input placeholder='Phone Number' value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label data-aos="fade-left">Email</label>
                    <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}