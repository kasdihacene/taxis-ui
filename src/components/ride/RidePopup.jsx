import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const RidePopup = ({show,handleClose,ride}) =>{

    function computeDuration(duration){
        return new Date(duration * 1000).toISOString().substr(11, 8)
    }

    function computeEndTime(startTime,duration){
        const date = new Date(startTime);
        date.setSeconds(date.getSeconds() + duration)
        return date.toISOString()
    }

    return(
            
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Ride n° {ride.id}</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                {computeDuration(ride.duration)} - {computeEndTime(ride.startTime,ride.duration)}</Modal.Body>
            <Modal.Footer>
            
            <Button variant="primary" onClick={handleClose}>
                OK
            </Button>
            
            </Modal.Footer>
        </Modal>
    )
}

export default RidePopup;