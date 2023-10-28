import React, { useState, useEffect, useRef, Switch } from 'react'
import { BrowserRouter, Route } from "react-router-dom";


import { BASE_URL } from './Contants/Constants';
import { api } from './api';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';


import Results from "./pages/Results";

function App() {

  const [data, setData] = useState([{"hello": ["hello"]}])
  const [echo, setEcho] = useState({"Echo": "echoooo"})

  // useEffect(() => {
  //   fetch(api("/testget"))
  //   .then(
  //     res => res.json()
  //   ).then(
  //     d => {
  //       setData(d);
  //       console.log(d);
  //     }
  //   )
  // }, [])

  // useEffect(() => {
  //   fetch(api("/echo"), {
  //     method: 'POST', // Replace with the appropriate HTTP method (e.g., POST, PUT)
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(echo),
  //   })
  //   .then(
  //     res => res.json()
  //   ).then(
  //     d => {
  //       setEcho(d);
  //       console.log(d);
  //     }
  //   )
  // }, [])

  
  return (

    
    <div>
      
        {/* {JSON.stringify(data)}
        {JSON.stringify(echo)} */}
        <Dashboard />
        <Home/>
        <Results />
        
    </div>
  )

  // return (
  //   <BrowserRouter>
  //     <Switch>
  //       <Route exact path="/" component={Home} />
  //       <Route path="/results" component={Results} />
  //     </Switch>
  //   </BrowserRouter>
  // );
}

export default App