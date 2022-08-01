import React, {useState,useEffect} from 'react'
import { Container} from 'react-bootstrap'
import styled from 'styled-components'
import Surf from '../surf.png'
import Kayak from '../kayak.png'
import axios from 'axios'




const Videoplayer = () => {

  const [time,setTime] = useState();
  const [day,setDay] = useState();
  const [timeSwitch,setTimeSwitch] = useState();
  const [color,setColor] = useState();
  const [imageIn,setImageIn]=useState();

const fetchMSTtime = async() =>{
  try{
    const timeres = await axios.get(
      'https://worldtimeapi.org/api/timezone/America/Boise'
    );
    formatingTime(timeres.data.datetime)
    // The Switch is finding the Day 0 being sunday and following the summer schedule*
    switch(timeres.data.day_of_week){
      case 0:
        if(timeSwitch >= 12){
          setDay("GREEN HOLE");
          setColor(false)
          setImageIn(false)
        }else{
        setDay('GREEN WAVE')
        setColor(true)
        setImageIn(true)
        }
        return;
      case 1:
        setDay('GREEN WAVE')
        setColor(true)
        setImageIn(true)
        return;
      case 2:
        setDay('GREEN WAVE')
        setColor(true)
        setImageIn(true)
        return;
      case 3:
        if(timeSwitch >= 12){
          setDay("GREEN HOLE");
          setColor(false)
          setImageIn(false)
        }else{
        setDay('GREEN WAVE')
        setColor(true)
        setImageIn(true)
        }
        return;
      case 4:
        if(timeSwitch >= 12){
          setDay("GREEN WAVE");
          setColor(true)
          setImageIn(true)
        }else{
        setDay('GREEN HOLE')
        setColor(false)
        setImageIn(false)
        }
        return;
      case 5:
        if(timeSwitch >= 12){
          setDay("GREEN HOLE");
          setColor(false)
          setImageIn(false)
        }else{
        setDay('GREEN WAVE')
        setColor(true)
        setImageIn(true)
        }
        return;
      case 6:
        if(timeSwitch >= 12){
          setDay("GREEN WAVE");
          setColor(true)
          setImageIn(true)
        }else{
        setDay('GREEN HOLE')
        setColor(false)
        setImageIn(false)
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

const imagerender = () =>{
  if(imageIn){
   return <img width="70px" height="70px" src={Surf}/>
  }
  else{
   return <img width="70px" height="70px" src={Kayak}/>
  }
}


useEffect(() =>{
  fetchMSTtime();
});

  return (
    <Container>
      <WaveImage color={color}>
        {imagerender()}
      </WaveImage>
      <WaveHeader color={color}>{day}</WaveHeader>
      <WaveChangeBox color={color}>
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
background: ${props => props.color? "#60C689" : "teal"};
justify-content:end;
width 105px;
border-radius:50%;
height:auto;
`
const WaveChangeBox = styled.div`
border-radius:15px;
padding:15px;
background: ${props => props.color? "#60C689" : "teal"};
margin-bottom:15px;
`
const WaveHeader = styled.div`
margin:auto;
display:flex;
background:${props => props.color? "#60C689" : "teal"};
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