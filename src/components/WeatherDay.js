import w from '../db/weather.json'

export default function WeatherDay (probs) {
  const d = probs.d;
  //DB상 필요한 자료가 있는 경로까지 설정
  const witem = w.response.body.items.item[0];
  console.log(witem)

  const items = [];
  const keys = [`rnSt${d}Am`, `rnSt${d}Pm`, `wf${d}Am`, `wf${d}Pm`]
  console.log(keys)
  for (let k of keys) {
    items.push(witem[k]);
  }
  console.log(items);

  return (
    <>
    <ul>
        <li>{d}일후 오전 강수량 {items[0]}%</li>
        <li>{d}일후 오후 강수량 {items[1]}%</li>
        <li>{d}일후 오전 날씨예보 {items[2]}</li>
        <li>{d}일후 오후 날씨예보 {items[3]}</li>
    </ul>
    </>
  );
}