import React, { useState, useEffect, useRef, Switch } from 'react'


import { BASE_URL } from './Contants/Constants';
import { api } from './api';
import Home from './pages/Home';
import RecentRuns from './components/RecentRuns';
import Dashboard from './components/Dashboard';


import Results from "./pages/Results";

function App() {

  const [enterRecentRuns, setEnterRecentRuns] = useState([])
  const [data, setData] = useState([{"hello": ["hello"]}])
  const [echo, setEcho] = useState({"Echo": "echoooo"})
  const [page, setPage] = useState("dashboard")
  const [results, setResults] = useState(-1)
  const [sentimentalScore, setSentimentalScore] = useState(-1)
  const [enteredText, setEnteredText] = useState(''); // Define enteredText state


  const dashboard = <Dashboard setPage={setPage} 
                                enteredText={enteredText}
                                setEnteredText={setEnteredText}
                                results={results}
                                setResults={setResults}
                                sentimentalScore={sentimentalScore}
                                setSentimentalScore={setSentimentalScore}
                                enterRecentRuns={enterRecentRuns}
                                setEnterRecentRuns={setEnterRecentRuns}/>
  const recentRuns = <RecentRuns setPage={setPage}
                                enteredText={enteredText}
                                setEnteredText={setEnteredText}
                                results={results}
                                setResults={setResults}
                                sentimentalScore={sentimentalScore}
                                setSentimentalScore={setSentimentalScore}
                                enterRecentRuns={enterRecentRuns}
                                setEnterRecentRuns={setEnterRecentRuns}
                                />

  const choosePage = (pg) => {
    if (pg == "dashboard") {
      return dashboard;
    } else if (pg == "recent_runs") {
      return recentRuns;
    }
  }


  useEffect(() => {
    fetch(api("/testget"))
    .then(
      res => res.json()
    ).then(
      d => {
        setData(d);
      }
    )
  }, [])

  useEffect(() => {
    fetch(api("/fetchRecentSaves"))
    .then(
      res => res.json()
    ).then(
      d => {
        console.log(d)
      }
    )
  }, [])


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
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []); // Include 'echo' in the dependency array if it's needed to trigger this effect
  

  return (

    
    <div>
      
        {/* {JSON.stringify(data)}
        {JSON.stringify(echo)} */}
        {choosePage(page)}
        {/* <Home/>
        <Results /> */}
        
    </div>
  )
}

export default App