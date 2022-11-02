import weather2 from '../db/weather2.json'
import item from '../db/item.json'
import './WeaterMain2_.css';
import { Link } from "react-router-dom"

function WeatherMain2() {
  const pty = {
    "0": "없음",
    "1": "비",
    "2": "비/눈",
    "3": "눈",
    "4": "소나기",
    "5": "빗방울",
    "6": "빗방울눈날림",
    "7": "눈날림"
  };
  const sky = {
    "1": "맑음",
    "3": "구름많음",
    "4": "흐림"
  };
  const w2 = weather2.response.body.items.item;
  console.log(w2)

  // const lis = Object.entries(w2).map((m)=>   <li key={m[1].category}>
  // {item[m[1].category][0]} {m[1].obsrValue} {item[m[1].category][1]}</li> );
  // 새로운 배열 생성 :map let lis = []; for(let m of w2){ lis.push(m);} 새로운 배열 생성 : map
  let lis = w2.map(
    (m) => (m.category === 'PTY')
      ? <li key={m.category}>
        <div className='box1'>{item[m.category][0]}</div>
        <div className='box2'>{pty[m.obsrValue]}</div>
      </li>
      : (m.category === 'SKY')
        ? <li key={m.category}>
          <div className='box1'>
            {item[m.category][0]}
          </div>
          <div className='box2'>
            {sky[m.obsrValue]}
          </div>
        </li>
        : <li key={m.category}>
          <div className='box1'>{item[m.category][0]}</div>
          <div className='box2'>{m.obsrValue}{item[m.category][1]}</div>
        </li>
  );

  // for (let w of w2){    switch(w) {      case "POP" :      lis.push(<li
  // key={w.category+1}>"강수확률" : {w.obsrValue}%</li>);      break;      case "PTY"
  // :      lis.push(<li key={w.category+1}>"강수형태" : {w.obsrValue}</li>);
  // break;    }   if(w.category==='PTY'){   }else if(w.category == 'SKY'){
  // }else{     lis.push(<li key={w.category+1}>{w.category} : {w.obsrValue}</li>)
  // }   console.log(w); }


  return (
    <>
      <h1>Weather</h1>
      <div className="button_changer">
        <button><Link to='/Weather'>단기</Link></button>
        <button><Link to='/Weather2'>중기</Link></button>
      </div>
      <ul className='ul_w2'>
        <h2>중기예보</h2>
        {lis}
        {/* {lis2} */}
      </ul>
    </>
  );
}
export default WeatherMain2;