import React from "react";
import '../src/Design/App.css';
import Home from './Components/Home'
import AppRouter from './Routers/AppRouter'

function App() {
  return (
    <div class="page">
        <div class="header">
          <h1 class="title">Daily News</h1>
        </div>
      <AppRouter />
      <p class="footnote">Website Created By Christopher Griffiths</p>
    </div>
  );
}

export default App;
