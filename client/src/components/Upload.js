import React from 'react';
import { useState } from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import UseFormControl from './Inputs';
import LoadingButtonsTransition from './LoadingButton';
import ContainedButtons from './Button';
// import UploadFileIcon from '@mui/icons-material/UploadFile';
import Container from '@mui/material/Container';
// import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import TextField from '@mui/material/TextField';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl, { useFormControl } from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';





const ariaLabel = { 'aria-label': 'description' };

function preventDefault(event) {
  event.preventDefault();
}


export default function Upload() {
  return (
    
    <Container maxWidth="lg" align="center">
      <Title>Prompt Analysis</Title>
      
      <TextField 
          
          
          
          UseFormControl
          fullWidth label="fullWidth" id="fullWidth" 
          id="outlined-multiline-static"
          label="Enter your text here"
          multiline
          rows={8}

      />
      <div
      style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '2%'
          }}
      >
      <ContainedButtons />
      <TextDisplayApp />
      </div>
      
    </Container>
  );

  function TextDisplayApp() {
    const [enteredText, setEnteredText] = useState('');
  
    const handleTextChange = (event) => {
      setEnteredText(event.target.value);
    };

    return (
      enteredText
    );
  }

}


