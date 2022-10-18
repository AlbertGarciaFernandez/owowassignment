import React, { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react'
import axios from 'axios';
import Aos from "aos";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import './read.css';



export default function Read() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    const getData = () => {
        axios.get(`https://634e54d84af5fdff3a58df62.mockapi.io/wizkid`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }
    const setData = (data) => {
        let { id, firstName, phonenumber, email } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Phone Number', phonenumber);
        localStorage.setItem('Email', email)
}
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://634e54d84af5fdff3a58df62.mockapi.io/wizkid`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const onDelete = (id) => {
        axios.delete(`https://634e54d84af5fdff3a58df62.mockapi.io/wizkid/${id}`)
        
        .then(() => {
            toast.info(`You deleted ${id}`, {
                theme: 'colored',
                autoClose: 1500
              });
            getData();
        })
      }

    return (
        <div className='card'>
                <div className='sectionCard' >
  {APIData.map((data) => {
     return (
      <div className="cardContainer">
        <div className="cardImageWrapper" data-aos="zoom-in">
          <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=584" alt="animalImage" />
        </div>
        <div data-aos="zoom-in" >
          <div>{data.firstName}</div>
          <div>{data.phonenumber}</div>
          <div>{data.email}</div>
          <div className='linkSection'>
            <Link to='/update'>
              <Button onClick={() => setData(data)} >Update</Button>
            </Link>
              <Button onClick={() => onDelete(data.id)}>Delete</Button>
            </div>
        </div>
      </div>
   )})}
   
</div>

            <section className='sectionButton'>
            <Button className='leftButton' data-aos="fade-left"><Link to='/login'>Login</Link></Button>
            <Button className='Button' data-aos="fade-right"><Link to='/create'>Create</Link></Button></section>
        </div>
    )
}