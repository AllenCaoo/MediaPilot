import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

export default function ContainedButtons() {
  const userInput = "userInput";
  const enteredText = localStorage.getItem(userInput);
  const [displayedText, setDisplayedText] = useState('');

  const displayText = () => {
    setDisplayedText(enteredText);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Link href="./Results">
        <Button variant="contained" onClick={displayText}>
          Submit
        </Button>
      </Link>{' '}
      <p>Displayed Text: {displayedText}</p>
    </Stack>
  );
}
