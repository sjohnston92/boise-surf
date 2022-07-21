import React from 'react';
import Weather from '../components/weather';
import Videoplayer from '../components/videoplayer';


import {Container,Row,Col} from 'react-bootstrap'


const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
        <h1>Menu</h1>
        </Col>
        <Col>
        <Videoplayer />
        <Weather />
        </Col>
      </Row>
    </Container>
  )
}

export default Home