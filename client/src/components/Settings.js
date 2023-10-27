import * as React from 'react';
import { useState } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Slider } from '@mui/material';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/Menu';


// initalValue: inital value of textbox
// onValueChange: callback function, takes in string and returns string 
function TextBox( { initalValue, placeValue, boxName, onValueChange }) {
  const [textboxValue, setTextboxValue] = useState(initalValue);

  const handleTextboxChange = (event) => {
    setTextboxValue(event.target.value);
    onValueChange(event.target.value);
  };

  return (
    <div>
      <TextField
          placeholder={ placeValue }
          label={ boxName }
          id="outlined-start-adornment"
          sx={{ m: 0, width: '200px' }}
          onChange={ handleTextboxChange }
        />
    </div>
  );
}

// initalValue: inital value of slider
// onValueChange: callback function, takes in int and returns int 
function SliderValuePair({ initalValue, onValueChange }) {
  const [sliderValue, setSliderValue] = useState(initalValue);

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value));
    onValueChange(parseInt(event.target.value));
  };

  // TODO: change this a bit later?
  const handleValueChange = (event) => {
    if (!event.target.value) {  // if empty textbox, then event.target.value = NaN
      setSliderValue(0);
      onValueChange(0);
    } else {
      setSliderValue(parseInt(event.target.value));
      onValueChange(parseInt(event.target.value));
    }
  };

  return (
    <div value={sliderValue}>
      <Slider
        size="small" 
        aria-label="Large" 
        valueLabelDisplay="auto"
        min={0}
        max={200}
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <TextField
          // label="some label on top"
          id="outlined-start-adornment"
          sx={{ m: 0, width: '200px' }}
          InputProps={{
            endAdornment: <InputAdornment position="end">minutes</InputAdornment>,
          }}
          value={sliderValue}
          onChange={ handleValueChange }
        />
    </div>
  );
}

export default function Settings() {
  const [postData, setPostData] = useState({ name: '', object: '', until: ''})

  const posts = useSelector((state) => state.posts);

  const handleSubmit = () => {

  };

  console.log(posts);

  return (
    <React.Fragment>
      <Title>Settings</Title>
      <Table size="small">
        <TableBody>
            <TableRow>
                <TableCell style={{width: 400}}>I am ... </TableCell>
                <TableCell style={{width: 200}}>
                    <TextBox
                      initalValue="Anonymous"
                      placeValue="Anonymous if blank"
                      boxName="Name"
                      onValueChange={value => {
                        setPostData({ ...postData, name: value });
                        // console.log(postData);
                      }}
                    />
                </TableCell>
                <TableCell>
                    Value
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>I will use the ...</TableCell>
                <TableCell style={{width: 120}}>
                <TextBox
                  initalValue=""
                  placeValue="Right Washer"
                  boxName="Machine"
                  onValueChange={value => {
                    setPostData({ ...postData, name: value });
                    // console.log(postData);
                  }}
                />
                </TableCell>
                <TableCell>
                    Value
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>for approximately ...</TableCell>
                <TableCell style={{width: 120}}>
                <SliderValuePair 
                  initalValue={50}
                  onValueChange={value => {
                    setPostData({ ...postData, until: value });
                    // console.log(postData);
                  }}
                />
                </TableCell>
                <TableCell>
                    Value
                </TableCell>
            </TableRow>

        </TableBody>
      </Table>
      <br />
      <div>
        <Button variant="contained" style={{width: 100}} onSubmit={handleSubmit}>Submit</Button>
      </div>
    </React.Fragment>
  );
}