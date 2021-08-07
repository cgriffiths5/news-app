import {React, useDebugValue, useEffect, useState} from "react";
import Data from './Data'
import moment from "moment";
import '../Design/App.css'

function Home() {

//Set states
const [news, setNews] = useState({})
const [topic, setTopic] = useState("Japan")
const [userInput, setUserInput] = useState("Japan")

//Show news on load
useEffect(() => { 
   showNews();
 },[]);


function showNews() {

//Get current date
let date = moment().format('YYYY-MM-DD')

//Get APIkey
let APIkey = process.env.REACT_APP_KEY

var url = `https://newsapi.org/v2/everything?q=${topic}&from=${date}&sortBy=popularity&apiKey=${APIkey}`;

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

const onChange = (e) => {
   setUserInput(e.target.value)
}

  const findNews = (e) => {
     e.preventDefault();
     setTopic(userInput)
  }

  useEffect(() => {
     showNews();
  }, [topic])



  return (
         <div>
         <form onSubmit={findNews}>
           <input type="text" value={userInput} onChange={onChange}/>
           <input type="submit"></input>
         </form>
         <br />
         <Data items={news} />
         </div>
  )
}


export default Home