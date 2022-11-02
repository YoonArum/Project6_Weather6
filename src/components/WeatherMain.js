import WeatherDay from "./WeatherDay";
import { useState } from 'react';
import './WeaterMain_.css';
import { Link } from "react-router-dom"


function WeatherMain() {
  let [day, setDay] = useState(3);

  const handleClick = (d) => {
    console.log(d);
    setDay(d);
  }

  return (
    <>
      <h1>Weather</h1>
      <div className="button_changer">
        <button><Link to='/Weather'>단기</Link></button>
        <button><Link to='/Weather2'>중기</Link></button>
      </div>
      <span className="weather">
        <form>
          <button onClick={(e) => { e.preventDefault(); handleClick(3); }}>3일후 날씨</button>
          <button onClick={(e) => { e.preventDefault(); handleClick(4); }}>4일후 날씨</button>
          <button onClick={(e) => { e.preventDefault(); handleClick(5); }}>5일후 날씨</button>
          <button onClick={(e) => { e.preventDefault(); handleClick(6); }}>6일후 날씨</button>
        </form>
        <WeatherDay d={day} /></span>
    </>
  );
} export default WeatherMain;