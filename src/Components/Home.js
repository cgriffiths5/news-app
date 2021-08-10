import {React, useEffect, useState} from "react";
import Data from './Data'
import moment from "moment";
import '../Design/App.css'

function Home(props) {

//Set states
const [news, setNews] = useState({})

//Show news on load
useEffect(() => { 
   showNews();
 },[]);


function showNews() {

const newsTopic = props.topic

//Get current date
let date = moment().format('YYYY-MM-DD')

//Get APIkey
let APIkey = process.env.REACT_APP_KEY

var url = `https://newsapi.org/v2/everything?q=${newsTopic}&from=${date}&sortBy=popularity&apiKey=${APIkey}`;

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
  useEffect(() => {
     showNews();
  }, [props.topic])



  return (
         <div>
         <Data items={news} />
         </div>
  )
}


export default Home