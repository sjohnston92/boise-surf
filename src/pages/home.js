import React from 'react';
import Weather from '../components/weather';
import Videoplayer from '../components/videoplayer';
import Menu from '../components/menu';
import Footer from '../components/footer'

import styled from 'styled-components';


import {Container,Row,Col} from 'react-bootstrap'


const Home = () => {
  return (
    <Main>
    <Container>
      <Row>
        <TitleHead>
          Boise River - Phase 1
        </TitleHead>
      </Row>
      <StyledRow>
        <Col>
        <Menu />
        </Col>
        <Col>
        <Videoplayer />
        <Weather />
        </Col>
      </StyledRow>
    </Container>
    <Footer/>
    </Main>
  )
}
const Main = styled.div`
background: #171717;
`
const StyledRow = styled.div`
display:flex;
align-items:center;
`
const TitleHead = styled.div`
text-align:center;
color:white;
font-size: 36px;
font-weight:400;
margin:20px;
`
export default Home