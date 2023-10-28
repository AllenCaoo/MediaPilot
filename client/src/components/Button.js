import * as React from 'react';
import { useEffect, useState } from "react";
import LoadingButtonsTransition from './LoadingButton';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import UseFormControl from './Inputs';




export default function ContainedButtons() {
    // const [enteredText, setEnteredText] = useState('');
  
    // const handleTextChange = (event) => {
    //   setEnteredText(event.target.value);
    // };
    const enteredText = <UseFormControl />;

    const [displayedText, setDisplayedText] = useState('');
    const displayText = () => {
        setDisplayedText(enteredText);
      };

  return (
    
    <Stack direction="row" spacing={2}>
      <Button 
      variant="contained" 
      href='#analysis' 
      onClick={displayText}
      >Submit</Button>
      
      <Typography variant="body1">
        Displayed Text: {displayedText}
      </Typography>
    </Stack>
  );


}