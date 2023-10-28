import React from 'react';
import { useState } from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import UseFormControl from './Inputs';
// import UploadFileIcon from '@mui/icons-material/UploadFile';
import Container from '@mui/material/Container';
// import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import TextField from '@mui/material/TextField';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl, { useFormControl } from '@mui/material/FormControl';
import Input from '@mui/material/Input';


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
          // <Input defaultValue="Hello world" inputProps={ariaLabel} />
          fullWidth label="fullWidth" id="fullWidth" 
          id="outlined-multiline-static"
          label="Enter your text here"
          multiline
          rows={4}

          // {/* defaultValue="Enter your text..." */}
        />
        
        
      {/* <Table>
        <TableBody>
          <TableRow>
          <TableCell></TableCell>
          </TableRow>
          <TableRow>
          <TableCell></TableCell>
          </TableRow>
          <TableRow>
          <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table> */}
    </Container>
  );

}


