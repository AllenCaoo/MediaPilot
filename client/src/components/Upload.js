// import React from 'react';
// import { useState } from 'react';
// import {Link } from "react-router-dom";
// // import Link from '@mui/material/Link';


// import Title from './Title';

// import ContainedButtons from './Button';
// import Container from '@mui/material/Container';
// import TextField from '@mui/material/TextField';
// import Input from '@mui/material/Input';
// import Button from '@mui/material/Button';







// const ariaLabel = { 'aria-label': 'description' };

// function preventDefault(event) {
//   event.preventDefault();
// }


// export default function Upload() {
//   return (
    
//     <Container maxWidth="lg" align="center">
//       <Title>Prompt Analysis</Title>
      
//       <TextField 
          
          
          
//           UseFormControl
//           fullWidth label="fullWidth" id="fullWidth" 
//           id="outlined-multiline-static"
//           label="Enter your text here"
//           multiline
//           rows={8}

//       />
//       <div
//       style={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           paddingTop: '2%'
//           }}
//       >
//         <ContainedButtons />
//         <Link to="/results"><ContainedButtons>
//               Submit
//               <ContainedButtons />
//         </Link>
      
//       {/* <TextDisplayApp /> */}
//       </div>
      
//     </Container>
//   );

//   function TextDisplayApp() {
//     const [enteredText, setEnteredText] = useState('');
  
//     const handleTextChange = (event) => {
//       setEnteredText(event.target.value);
//     };

//     return (
//       enteredText
//     );
//   }

// }


import React, { useState } from 'react'; // Combine import statements
import { Link } from "react-router-dom";
import Title from './Title';
import ContainedButtons from './Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Upload() {
  const [enteredText, setEnteredText] = useState(''); // Define enteredText state

  const handleTextChange = (event) => {
    setEnteredText(event.target.value);
  };

  const handleSubmit = () => {
    // Handle the form submission here (e.g., send the enteredText to an API)
  };

  return (
    <Container maxWidth="lg" align="center">
      <Title>Prompt Analysis</Title>
      <TextField
        fullWidth
        label="Enter your text here"
        id="outlined-multiline-static"
        multiline
        rows={8}
        onChange={handleTextChange} // Add onChange to handle text input
        value={enteredText} // Bind input value to the state
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '2%'
        }}
      >
        <ContainedButtons onClick={handleSubmit}>Submit</ContainedButtons>
        {/* <Link to="/results">
          <ContainedButtons>View Results</ContainedButtons>
        </Link> */}
      </div>
    </Container>
  );
}


