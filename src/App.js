
import './App.css';
import axios from 'axios';
import React,{ useState,useEffect } from 'react';
import StateCard from './components/statecard';
import Header from './components/Header'
function App() {
  const [data,setData]= useState([]);
  useEffect(() => {
    const fetch = async () => {
      const result = await axios(`https://covid19.mathdro.id/api/countries/india/confirmed`)
      console.log(result.data);
      setData(result.data)
    }
  
   
  
  fetch()
  },[])
  
  return (
   <div>
     <Header />
     <StateCard data={data}/>

   </div>
  );
}

export default App;
