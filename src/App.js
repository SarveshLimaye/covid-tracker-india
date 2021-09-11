
import './App.css';
import axios from 'axios';
import React,{ useState,useEffect } from 'react';
import StateCard from './components/statecard';
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Spinner'
function App() {
  const [data,setData]= useState([]);
  const[isLoading,setisLoading] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      const result = await axios(`https://covid19.mathdro.id/api/countries/india/confirmed`)
      console.log(result.data);
      setData(result.data)
      setisLoading(false);
    }
  
   
  
  fetch()
  },[])
  
  return (

    isLoading ? (<Loading />) :

   (<div>
     <Header />
     <StateCard data={data} isLoading= {isLoading} />
     <Footer />
   </div>)
  );
}

export default App;
