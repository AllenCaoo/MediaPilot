import React from 'react';
import { useState } from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Container from '@mui/material/Container';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';

function preventDefault(event) {
  event.preventDefault();
}


export default function Upload() {

  return (
    <Container maxWidth="lg" align="center">
      <Title>Queue</Title>
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