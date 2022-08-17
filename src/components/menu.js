import React from 'react'
import styled from 'styled-components';


const menu = () => {
  return (
    <>
    <TitleHead>Boise River</TitleHead>
    <MenuBox>
      <div>
        <button>
            <span>BEND</span>
            <div className="liquid"></div>
          </button>
      </div>
      <div>
      <button>
            <span>GIVE</span>
            <div className="liquid"></div>
          </button>
      </div>
      <div>
      <button>
            <span>SHOP</span>
            <div className="liquid"></div>
          </button>
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
@media(max-width:900px){
  flex-direction:row;
  justify-content:center;
}
`
const TitleHead = styled.div`
text-align:center;
color:white;
font-size: 36px;
font-weight:400;
`

export default menu