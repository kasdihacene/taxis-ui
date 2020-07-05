import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import RidePopup from './RidePopup'
import './Ride.css'
import axios from 'axios';

const Ride = ({index,ride}) =>{

const [show, setShow] = useState(false);
const [clicked, setClicked] = useState(false);
const [price, setPrice] = useState(0);

const handleClose = () => setShow(false);
const handleShow = () => {
    setShow(true)
    setClicked(true)
};

function computeBackground(distance){
     return ((distance>2) ? 'outline-success red-background' : 'outline-success')
}

useEffect(() => {
    
    async function computePrice(){
    const response = await (axios.post('http://localhost:9090/api/ride/calculate',ride)
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error);
            }))
            console.log(response.price)
            setPrice(response.price)
    }
    computePrice();
  });

return (
    <div className="button-ride" >

        <Button 
            variant={computeBackground(ride.distance)} size="lg" 
            index={index}
            onClick={handleShow} > Ride n° {ride.id} {clicked? '- clicked ' : ''}- Price : {price===0?'':price} EUR
        </Button>

        <RidePopup show={show} handleClose={handleClose} ride={ride} />
        
    </div>
)
}
export default Ride