import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Ride from '../ride/Ride'

const Board = ({rides}) => {

return(
    <Container>
        <Jumbotron fluid className="bg-dark text-white col-md-12">
            {
                rides.map((ride,index)=>(
                    <Ride 
                    ride={ride} 
                    index={index} 
                    key={index} 
                    />
                ))
            }

        </Jumbotron>
    </Container>
)}

export default Board;


