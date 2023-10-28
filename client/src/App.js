import React, { useState, useEffect } from 'react'
import { BASE_URL } from './Contants/Constants';
import { api } from './api';
import Dashboard from './components/Dashboard';

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
        <Dashboard/>
    </div>
  )
}

export default App