import React from 'react'
import styled from 'styled-components'

const counter = () => {
  return (
    <>
      <div>Current Surfer Count</div>
      <h1>12</h1>
      <WarningLabel>*+/- Surfers & Kayakers</WarningLabel>
    </>

  )
}

const WarningLabel = styled.h5`
color:#E5BF00;
display:inline-block;
font-weight:300;
font-size:14px;
`

export default counter