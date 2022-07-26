import React, {useState,useEffect} from 'react'
import { Container} from 'react-bootstrap'
import styled from 'styled-components'
import Surf from '../surf.png'
import axios from 'axios'




const Videoplayer = () => {

  const [time,setTime] = useState();
  const [day,setDay] = useState();
  const [timeSwitch,setTimeSwitch] = useState();

const fetchMSTtime = async() =>{
  try{
    const timeres = await axios.get(
      'http://worldtimeapi.org/api/timezone/America/Boise'
    );
    formatingTime(timeres.data.datetime)
    // The Switch is finding the Day 0 being sunday and following the summer schedule*
    switch(timeres.data.day_of_week){
      case 0:
        if(timeSwitch >= 12){
          setDay("GREEN HOLE");
        }else{
        setDay('GREEN WAVE')
        }
        return;
      case 1:
        setDay('GREEN WAVE')
        return;
      case 2:
        setDay('GREEN WAVE')
        return;
      case 3:
        if(timeSwitch >= 12){
          setDay("GREEN HOLE");
        }else{
        setDay('GREEN WAVE')
        }
        return;
      case 4:
        if(timeSwitch >= 12){
          setDay("GREEN WAVE");
        }else{
        setDay('GREEN HOLE')
        }
        return;
      case 5:
        if(timeSwitch >= 12){
          setDay("GREEN HOLE");
        }else{
        setDay('GREEN WAVE')
        }
        return;
      case 6:
        if(timeSwitch >= 12){
          setDay("GREEN WAVE");
        }else{
        setDay('GREEN HOLE')
        }
        return;
      
    }
  } catch(err){
   console.log(err)
  }
}


const formatingTime = (clock) =>{
  const  ttime = clock.toString().split('T');
  const ftime = ttime[1].split('.')
  setTime(ftime[0])
  const hour = ftime[0].split(':')
  setTimeSwitch(parseInt(hour[0]))
}


useEffect(() =>{
  fetchMSTtime();
});

  return (
    <Container>
      <WaveImage>
        <img width="70px" height="70px"src={Surf}/>
      </WaveImage>
      <WaveHeader>{day}</WaveHeader>
      <WaveChangeBox>
      <VideoPlayer src="https://v.angelcam.com/iframe?v=v40renevr5&amp;autoplay=1" width={800} height={500}></VideoPlayer>
      </WaveChangeBox>
    </Container>
  )
}

const WaveImage = styled.div`
position: absolute;
padding:15px;
top: 3.5%;
right: 3.5%;
background: #60C689;
justify-content:end;
width 105px;
border-radius:50%;
height:auto;
`
const WaveChangeBox = styled.div`
border-radius:15px;
padding:15px;
background: #60C689;
margin-bottom:15px;
`
const WaveHeader = styled.div`
margin:auto;
display:flex;
background:#60C689;
text-align:center;
color:white;
height:30px;
font-size:20px;
font-weight:400;
width:300px;
justify-content:center;
border-radius:15px 15px 0px 0px;

`

const VideoPlayer = styled.iframe`
border-radius:15px;
`

export default Videoplayer