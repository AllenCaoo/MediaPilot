import React, { useState, useEffect, useRef, Switch } from 'react'


import { BASE_URL } from './Contants/Constants';
import { api } from './api';
import Home from './pages/Home';


import Results from "./pages/Results";

function App() {

  const [data, setData] = useState([{"hello": ["hello"]}])
  const [echo, setEcho] = useState({"Echo": "echoooo"})

  useEffect(() => {
    // Fetch data from /testget endpoint
    fetch(api("/testget"))
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []);
  
  useEffect(() => {
    // Fetch data from /echo endpoint
    fetch(api("/echo"), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(echo),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setEcho(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, [echo]); // Include 'echo' in the dependency array if it's needed to trigger this effect
  

  return (

    
    <div>
      
        {/* {JSON.stringify(data)}
        {JSON.stringify(echo)} */}
        <Home/>
        <Results />
        
    </div>
  )
}

export default App