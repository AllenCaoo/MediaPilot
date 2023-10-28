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
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; // Grid version 1
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';



const ariaLabel = { 'aria-label': 'description' };

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};
function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

function preventDefault(event) {
  event.preventDefault();
}

const angerWords = [
  'furious',
  'irate',
  'enraged',
  'annoyed',
  'infuriated',
  'mad',
  'angry',
  'outraged',
  'livid',
  'vexed',
];

function TextDisplayApp() {
  const [enteredText, setEnteredText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const handleTextChange = (event) => {
    setEnteredText(event.target.value);
  };

  const displayText = () => {
    const words = enteredText.split(/\s+/);
    const formattedText = words.map((word, index) => {
      if (angerWords.includes(word.toLowerCase())) {
        return (
          <span key={index} style={{ backgroundColor: 'yellow' }}>
            {word}
          </span>
        );
      }
      return ' ' + word + ' ';
    });

    setDisplayedText(formattedText);
  };

  return (
    <div>
      <TextField
        label="Enter Text"
        variant="outlined"
        value={enteredText}
        onChange={handleTextChange}
      />
      <div style={{ marginTop: '10px' }}>
        <Button variant="contained" color="primary" onClick={displayText} style={{ marginBottom: '10px' }}>
          Display Text
        </Button>
        </div>
        <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
        {displayedText}
      </Typography>
    </div>
  );
}

const WordsOfAnger = () => {
  return (
    <div>
      <Typography variant="body1">Words of Anger</Typography>
      <Grid container spacing={1}>
        {angerWords.map((word, index) => (
          <Grid item key={index}>
            <Chip label={word} color="secondary" />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};



export default function Analysis() {
  return (
    
    <Container maxWidth="lg" align="center">
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <ListItem>
          <Typography variant="button" display="block" gutterBottom>
                Original Text
          </Typography>
          </ListItem>
          <TextDisplayApp />
        </Grid>
        <Grid item xs={8}>
          <ListItem>
          <Typography variant="button" display="block" gutterBottom>
                Analysis
          </Typography>
          </ListItem>
          <Typography variant="body1" display="block" gutterBottom>
                Overall Sentiment
          </Typography>
          <StyledRating
            name="highlight-selected-only"
            defaultValue={2}
            IconContainerComponent={IconContainer}
            getLabelText={(value) => customIcons[value].label}
            highlightSelectedOnly
          />
          <WordsOfAnger />
        </Grid>
      </Grid>
        
        
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
