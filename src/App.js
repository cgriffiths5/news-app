import React from "react";
import '../src/Design/App.css';
import AppRouter from './Routers/AppRouter'
import Home from './Components/Home'

function App() {
  return (
    <div class="page">
        <div class="header">
          <h1 class="title">24/7 News</h1>
        </div>
      <AppRouter/>
    </div>
  );
}

export default App;
