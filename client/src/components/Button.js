import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Popup from './Popup';
import { api } from '../api';
import LoadingButton from '@mui/lab/LoadingButton';






export default function ContainedButtons({setClickedSubmit, 
                                          setOpenPopup, 
                                          enteredText, 
                                          setEnteredText,
                                          results,
                                          setResults}) {

  const [loading, setLoading] = React.useState(false);

  const fetchRun = async () => {
      await fetch(api("/predictLikes"), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"content": enteredText}),
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error('ERROR');
        }
        return res.json()
      })
      .then((data) => {
        // TODO: results here
        setResults(data["score"])
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }

  const handleClick = async () => {
    await fetchRun();
    setClickedSubmit(true)
    setOpenPopup(true)
    setLoading(true);
  };


  return (
    <Stack direction="row" spacing={2}>

      {/* <LoadingButton
          onClick={handleClick}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          <span>Submit</span>
        </LoadingButton> */}


        <Button variant="contained" onClick={handleClick}>
          Submit
        </Button>
    </Stack>
  );
}



