import {React, useEffect, useState } from "react";
import LatestData from './LatestData';
import '../Design/App.css'

function Latest(props) {

    //Set states
    const [news, setNews] = useState({})
    
    //Show news on load
    useEffect(() => { 
       showNews();
     },[]);
    
    
    function showNews() {

   //Get topic
   const newsTopic = props.topic
    
    //Get APIkey
    let APIkey = process.env.REACT_APP_KEY
    
    var url = `https://newsapi.org/v2/top-headlines?q=${newsTopic}&apiKey=${APIkey}`;
    
    fetch(url)
       .then((response) => response.json())
       .then((data) => {
          console.log(data)
          setNews(data)
       })
       .catch(error => {
          console.log(error)
       })
       
    }
    
    //Re runs effect onChange
      useEffect(() => {
         showNews();
      }, [props.topic])
    
    
    
      return (
             <div>
                <h2 class="subtitle">Top Stories</h2>
                <LatestData items={news} />
             </div>
      )
    }
    
    
    export default Latest