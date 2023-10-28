import React from 'react';
import { useState } from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Container from '@mui/material/Container';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import TextField from '@mui/material/TextField';

function preventDefault(event) {
  event.preventDefault();
}


export default function Upload() {

  return (
    <Container maxWidth="lg" align="center">
      <Title>Prompt</Title>
      <TextField
          id="outlined-multiline-static"
          label="Text Input"
          multiline
          rows={4}
          defaultValue="Enter your text..."
        />
      <Table>
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
      </Table>
    </Container>
  );
}