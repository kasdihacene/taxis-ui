import React from 'react';
import './App.css';
import NavbarBoard from './components/navbar/NavbarBoard'
import Board from './components/board/Board';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const App = () => {
  return (
    <div className="App">
     <NavbarBoard />
     <Container>
        <Row>
          <Col lg={12} className="padding">
            <Board rides={FAKE_RIDES} />
          </Col>
        </Row>
    </Container>
    </div>
  );
}

export default App;

export const FAKE_RIDES = [
  {
  id: 1,
  distance: 2,
  startTime: "2020-06-19T13:01:17.031Z",
  duration: 9000
  },
  {
  id: 2,
  distance: 1,
  startTime: "2020-06-19T12:01:17.031Z",
  duration: 6000
  },
  {
  id: 3,
  distance: 5,
  startTime: "2020-06-19T14:01:17.031Z",
  duration: 7000
  },
  {
  id: 4,
  distance: 5,
  startTime: "2020-06-19T14:11:17.031Z",
  duration: 4000
  }
  ];