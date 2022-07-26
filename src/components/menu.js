import React from 'react'
import styled from 'styled-components';


const menu = () => {
  return (
    <MenuBox>
      <ul>
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
      </ul>
    </MenuBox>
  )
}



const MenuBox = styled.div`
border-radius:15px;
padding:15px;
background: #2b2b2b;
margin-bottom:35px;
height: 400px;
color:white;
`

export default menu