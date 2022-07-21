import React, {useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import axios from 'axios'
const Weather = () => {

  const [temp,setTemp] = useState(0)

  const fetchWeather = async() => {
    try{
      const res = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?q=Boise&APPID=d7ea287b44cc4f86bafaea39536ec17f'
      );
      console.log(res.data) 
      setTemp(res.data.main.temp)
    } catch(err){
     console.log(err)
    }
  };

  useEffect(() =>{
    fetchWeather();
  },[]);


// Converting Kelvin to Fahrenheit
const fahTemp = Math.round(1.8*(temp - 273.15) + 32);

  return (
    <Row>
      <Col>
        <h1>{fahTemp}</h1>
        <h1>Chance of Rain</h1>
      </Col>
      <Col>
      <h1>Temp</h1>
        <h1>Chance of Rain</h1>
      </Col>
      <Col>
      <h1>Temp</h1>
        <h1>Chance of Rain</h1>
      </Col>
    </Row>
  )
}

export default Weather