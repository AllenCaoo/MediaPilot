// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Input from '@mui/material/Input';

// const ariaLabel = { 'aria-label': 'description' };

// export default function Inputs() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1 },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <Input defaultValue="Hello world" inputProps={ariaLabel} />
//       <Input placeholder="Placeholder" inputProps={ariaLabel} />
//       <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
//       <Input defaultValue="Error" error inputProps={ariaLabel} />
//     </Box>
//   );
// }


import * as React from 'react';
import { useEffect, useState } from "react";
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'This field is being focused';
    }

    return 'Helper text';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}


// const handleClick = () => {
//     const something = {
//       objVar: 1234
//     };
//     return something;
//   };
  
//   const {
//     objVar
//   } = handleClick()



export default function UseFormControl() {
    const [enteredText, setEnteredText] = useState('');
  
    const handleTextChange = (event) => {
      setEnteredText(event.target.value);
    };
    console.log(enteredText)
  return (
    enteredText,
    <form noValidate autoComplete="off">
      <FormControl sx={{ width: '25ch' }} 
        value={enteredText}
        onChange={handleTextChange}>
        
        <OutlinedInput placeholder="Please enter text" />
        <MyFormHelperText />
      </FormControl>

    </form>
  );





}

