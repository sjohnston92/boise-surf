import React, {useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import axios from 'axios'
import styled from 'styled-components'

const Weather = () => {

  const [temp,setTemp] = useState(0);
  const [tempHigh, setTempHigh] = useState(0);
  const [tempLow, setTempLow] = useState(0);

  const fetchWeather = async() => {
    try{
      const res = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?q=Boise&units=imperial&APPID=d7ea287b44cc4f86bafaea39536ec17f'
      );
      setTemp(res.data.main.temp)
      setTempHigh(res.data.main.temp_max)
      setTempLow(res.data.main.temp_min)
    } catch(err){
     console.log(err)
    }
  };

  useEffect(() =>{
    fetchWeather();
  },[]);



  return (
    <Row>
      <WeatherCard>
      <Col>
      <h1>Hello</h1>
      </Col>
      <Col>
      Current Weather
        <h1>{Math.round(temp)}°</h1>
          <HighTemp>{Math.round(tempHigh)}°</HighTemp> / <LowTemp>{Math.round(tempLow)}°</LowTemp>
      </Col>
      </WeatherCard>
    </Row>
  )
}


const WeatherCard = styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-align:center;
border-radius:15px;
padding: 15px;
color:white;
background:#2b2b2b;
margin-bottom:20px;
`
const HighTemp = styled.h5`
color:#c21856;
display:inline-block;

`
const LowTemp = styled.h5`
color:#57ACDC;
display:inline-block;
`


export default Weather