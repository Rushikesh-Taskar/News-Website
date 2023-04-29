import './App.css';
import Navbar from './components/Navbarr';
import React, { Fragment, useState } from 'react';
import News  from './components/News';
import {BrowserRouter , Routes, Route,Link,} from "react-router-dom";

function App() {
  // for navbar colour  and alert in text util 
  const [mode, setmode] = useState('dark');
  const [alert ,setalert] =useState(null);

  const setAlert =(msg)=>{
     setalert(msg)
     setTimeout(()=>{setalert(null)},1500);
  }
  
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
  }
  const changeColour=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    //console.log('bg-'+cls);
  }
  const toggle = () => {
    removeBodyClasses();
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = '#01070d';
      setAlert("dark mode enabled");
      
    }
    else {
      setmode('dark');
      document.body.style.backgroundColor = 'white';
      setAlert("light mode enabled");
    }
  }

  return (
    <div>
         <BrowserRouter>
        
         <Navbar toggle={toggle} showalert={setAlert} mode={mode} alert={alert} changecolor={changeColour}/>
         
         {/* <News country="in" category="general"/> */}

        <Routes>
          <Route  path='/' element={<News  category="general"/>}/>
          <Route   path="/business" element={<News  category="business"/>}/>
          <Route   path="/entertainment" element={<News  category="entertainment"/>} /> 
          <Route   path="/general" element={<News  category="general"/>} />
          <Route   path="/health" element={<News  category="health"/>} />
          <Route   path="/science" element={<News  category="science"/>}  /> 
          <Route   path="/sports" element={<News category="sports"/>}  />
          <Route   path="/technology" element={<News  category="technology"/>}  />
          
        </Routes>


        </BrowserRouter>

    </div>
 
  );
}
export default App;