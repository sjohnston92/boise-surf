import React from 'react';
import Weather from '../components/weather';
import Videoplayer from '../components/videoplayer';
import Menu from '../components/menu';
import Footer from '../components/footer'
import Counter from '../components/counter'

import styled from 'styled-components';


import {Container,Row,Col} from 'react-bootstrap'


const Home = () => {
  return (
    <Main>
    <Container>
      <StyledRow>
        <StyledNav>
        <Menu />
        </StyledNav>
        <Col>
        <Videoplayer />
        <Weather counter={Counter}/>
        </Col>
      </StyledRow>
    </Container>
    <Footer/>
    </Main>
  )
}
const Main = styled.div`
background: #171717;
padding-top: 20px;
`
const StyledNav = styled(Col)`
margin-top:-150px;
`

const StyledRow = styled.div`
display:flex;
align-items:center;
`
export default Home