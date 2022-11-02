import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Page1 from './pages/Page1';
// import Page2 from './pages/Page2';
//import Nav from './pages/Nav';

//Route import
import Weather from './components/WeatherMain'
import Weather2 from './components/WeatherMain2'
import Nav from './components/Nav';



function App() {
  return (
    <>
      <Routes>
      <Route path='/Project6_Weather6' element={<Nav />}></Route>
        <Route path='/' element={<Nav />}></Route>
        <Route path='/Weather' element={<Weather />}></Route>
        <Route path='/Weather2' element={<Weather2 />}></Route>
      </Routes>

      {/* <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path='/p1/:item' element={<Page1/>}/>
    <Route path='/p2/' element={<Page2/>}/>
    </Routes> */}
    </>
  );
}

export default App;
