import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import './Ride.css'
import RidePopup from './RidePopup';


const Ride = ({index,ride,onClick}) =>{

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
    <div>

        <Button 
            variant={(ride.distance>2) ? 'outline-danger' : 'outline-success'} size="lg" 
            index={index}
            onClick={handleShow} > Ride n° {ride.id} - price EUR
        </Button>

        <RidePopup show={show} handleClose={handleClose} ride={ride}  />
    </div>
)
}
export default Ride