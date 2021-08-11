import { React, useState} from "react";
import { HashRouter, Switch, Route, Link} from "react-router-dom"
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
      <HashRouter basename='/'>
        <nav>
          <ul id="navbar">
            <li id="navbarlink">
              <Link to="/" id="home">Home</Link>
            </li>
             <li id="navbarlink">
                <Link to="/latest" id="topstories">Top Stories</Link>
            </li>
            <li >
            <form class="submit" onSubmit={findNews}>
               <input class="submitText" type="text" value={userInput} onChange={onChange}/>
               <input class="submitButton" type="submit" value="Search"></input>
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
      </HashRouter>

  );
}

export default AppRouter;
