import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Popup from './Popup';

export default function ContainedButtons({setClickedSubmit}) {
  console.log(setClickedSubmit)
  const userInput = "userInput";
  const enteredText = localStorage.getItem(userInput);
  const [displayedText, setDisplayedText] = useState('');

  const displayText = () => {
    setDisplayedText(enteredText);
    setClickedSubmit(true)
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
