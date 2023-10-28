
// import * as React from 'react';
// import { useEffect, useState } from "react";
// import {Link } from "react-router-dom";

// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import UseFormControl, { enteredText } from './Inputs';
// import LocalStorage from '../hooks/LocalStorage'


// <script src="http://localhost:8097"></script>

// export default function ContainedButtons() {
//     // const [enteredText, setEnteredText] = useState('');
  
//     // const handleTextChange = (event) => {
//     //   setEnteredText(event.target.value);
//     // };

// 	const userInput = "userInput"

//     const enteredText = localStorage.getItem(userInput);

//     const [displayedText, setDisplayedText] = useState('');
//     const displayText = () => {
//         setDisplayedText(enteredText);
//       };

//   return (
    
//     <Stack direction="row" spacing={2}>
//       <Button 
//       variant="contained" 
//       href='#analysis' 
//       onClick={displayText}
//       >Submit</Button>
      
//       {/* <Typography variant="body1">
//         Displayed Text: {displayedText}
//       </Typography> */}
//     </Stack>
//   );


// }


import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons() {
  const userInput = "userInput";
  const enteredText = localStorage.getItem(userInput);
  const [displayedText, setDisplayedText] = useState('');

  const displayText = () => {
    setDisplayedText(enteredText);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={displayText}>
        Submit
      </Button>
      <p>Displayed Text: {displayedText}</p>
    </Stack>
  );
}
