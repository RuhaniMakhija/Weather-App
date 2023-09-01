import React from 'react';
import styles from "./details.module.css";
import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy} from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop} from "react-icons/md";



const Deatils = ({weather,units}) => {

    const tempUnit=units==='metric' ? '°C' : '°F';
    const windUnit=units==='metric' ? 'm/s': 'm/h'; 
    const cards=[
        {
            id:1,
            icon:<FaArrowDown/>,
            title:"min",
            data:weather.temp_min.toFixed(),
            unit:tempUnit
        },
        {
            id:2,
            icon:<FaArrowUp/>,
            title:"max",
            data:weather.temp_max.toFixed(),
            unit:tempUnit
        },
        {
            id:3,
            icon:<BiHappy/>,
            title:"feels like",
            data:weather.feels_like.toFixed(),
            unit:tempUnit
        },
        {
            id:4,
            icon:<MdCompress/>,
            title:"pressure",
            data:weather.pressure,
            unit:"hPa"
        },
        {
            id:5,
            icon:<MdOutlineWaterDrop/>,
            title:"humidity",
            data:weather.humidity,
            unit:"%"
        },
        {
            id:6,
            icon:<FaWind/>,
            title:"windspeed",
            data:weather.speed.toFixed(),
            unit:windUnit
        },
        

    ]
  return (
    
    <div className={styles['section']}>
    {cards.map(({id,icon,title,data,unit})=>(
        <div className={styles['card']}>
            <div key={id} className={styles['description_card-icon']}>
                {icon}
                <small>{title}</small>
            </div>
            <h2>{`${data} ${unit}`}</h2>
        </div>
    ))}
        
    </div>

   
    
    
      
  )
}

export default Deatils
