import React, { useEffect, useState } from 'react';
import styles from './weather.module.css';
import Deatils from '../WeatherDeatils/Deatils';
import { getFormattedWeatherData } from '../../WeatherService'
import hotBg from "../../assets/hot.jpg"
import coldBg from "../../assets/cold.jpg"


const Weather = () => {

  const[city,setCity]=useState("Paris")
  const[weather, setWeather]=useState(null);
  const[units,setUnits]=useState("metric");
  const[bg,setBg]=useState(hotBg);


  useEffect(()=>{
    const fetchWeatherData=async ()=>{
      const data=await getFormattedWeatherData(city,units);
      setWeather(data);

      const thersold= units==='metric' ? 20 : 60;
      if(data.temp<=thersold) setBg(coldBg)
      else setBg(hotBg)
    }
    fetchWeatherData();



  },[units,city])

  const handleClick=(e)=>{
    const button=e.target;
    const currentUnit=button.innerText.slice(1)
    console.log(currentUnit);
    const isCelius= currentUnit==="C";
    button.innerText=isCelius ? "°F" : "°C";
    setUnits(isCelius ? 'metric' : 'imperial');
  }


  const EnterKeyPressed =(e)=>{
    if(e.keyCode==13){
      setCity(e.currentTarget.value)
      e.currentTarget.blur()
    }
  }


  return (
    <div className={styles['bg']} style={{backgroundImage:`url(${bg})`}}>
    <div className={styles['bg-color']}>
    {weather && (
      
    
    <div className={styles['main']}>
    
      <div className={styles['container']}>
          <div className={styles['search-container']}>
              <input onKeyDown={EnterKeyPressed} type='text' className={styles['search-input']} name='city' placeholder='Search any city'/>
              <button onClick={(e)=>handleClick(e)} className={styles['search-btn']}>°F</button>
          </div>
      </div>
      <div className={styles['container']}>
        <div className={styles['second-container']}>
          <div className={styles['info-container']}>
            <h3>{`${weather.name}, ${weather.country}`}</h3>
            <img src={weather.iconURL} alt='icon'/>
            <h3>{`${weather.description}`}</h3>
          </div>
          <div className={styles['degree-container']}>
            <h1>{`${weather.temp.toFixed()} °${units==="metric" ? "C" : "F"}`}</h1>
          </div>
        </div>
        </div>

      
      <div>
        <Deatils weather= {weather} units={units}/>
      </div>
      </div>
      )}
          
          
        
      
    </div>
    </div>
  )
}

export default Weather
