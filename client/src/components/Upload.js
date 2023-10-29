import React, { useState } from 'react'; // Combine import statements
import Title from './Title';
import ContainedButtons from './Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Popup from './Popup';

export default function Upload({setClickedSubmit, 
                                setOpenPopup, 
                                enteredText, 
                                setEnteredText,
                                results,
                                setResults}) {
  
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
          <ContainedButtons setClickedSubmit={setClickedSubmit} 
                            setOpenPopup={setOpenPopup} 
                            enteredText={enteredText} 
                            setEnteredText={setEnteredText}
                            results={results}
                            setResults={setResults}>Submit
                            </ContainedButtons>
        </div>
      </Container>
    );
}


