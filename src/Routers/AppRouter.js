import { React, useState} from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom"
import Home from '../Components/Home'
import Latest from '../Components/Latest'
import '../Design/App.css'

function AppRouter() {

  const [topic, setTopic] = useState("Japan")
  const [userInput, setUserInput] = useState("Japan")


  const onChange = (e) => {
    setUserInput(e.target.value)
 }
 
   const findNews = (e) => {
      e.preventDefault();
      setTopic(userInput)
   }

  return (
      <BrowserRouter>
        <nav>
          <ul id="navbar">
            <li id="navbarlink">
              <Link to="/">Home</Link>
            </li>
            <li id="navbarlink">
                <Link to="/latest">Top Stories</Link>
            </li>
            <li >
            <form class="submit" onSubmit={findNews}>
               <input type="text" value={userInput} onChange={onChange}/>
               <input type="submit" ></input>
             </form>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home topic={topic} />
          </Route>
          <Route path="/latest">
            <Latest topic={topic}/>
          </Route>
        </Switch>


      </BrowserRouter>
  );
}

export default AppRouter;
