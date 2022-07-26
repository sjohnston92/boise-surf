import React from 'react'
import styled from 'styled-components';


const menu = () => {
  return (
    <>
    <TitleHead>Boise River</TitleHead>
    <MenuBox>
      <div>
        <button>Boise River</button>
      </div>
      <div>
        <button>Bend River</button>
      </div>
      <div>
        <button>Shop</button>
      </div>
      <div>
      <button>Donate</button>
      </div>
      <div>
      <button>Contact</button>
      </div>
    </MenuBox>
    </>
  )
}



const MenuBox = styled.div`
display:flex;
flex-direction:column;
border-radius:15px;
padding:15px;
background: #2b2b2b;
margin-bottom:35px;
color:white;
align-items:center;
`
const TitleHead = styled.div`
text-align:center;
color:white;
font-size: 36px;
font-weight:400;
`

export default menu