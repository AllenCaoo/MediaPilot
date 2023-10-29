// // import React, {useState} from 'react';

// // import Button from '@mui/material/Button';
// // import Dialog from '@mui/material/Dialog';
// // import DialogActions from '@mui/material/DialogActions';
// // import DialogContent from '@mui/material/DialogContent';
// // import DialogTitle from '@mui/material/DialogTitle';


// import React, {useState} from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';

// import DialogTitle from '@mui/material/DialogTitle';
// import Chart from './Chart';


// export function Popup({openPopup, setOpenPopup, enteredText, setEnteredText, results, setResults}) {

//   const [open, setOpen] = useState(true);
//   const handleOpen = () => {
//     setOpenPopup(true);
//   };

//   const handleClose = async () => {
//     setOpenPopup(false);
//     await saveResults();
//     setEnteredText('')
//     setResults(-1)
//   };

//   function Modal({ open, onClose, title, content, actions }) {
//     return (
//       <Dialog open={open} 
//               onClose={onClose} 
//               fullWidth={'xl'}
//               maxWidth={'xl'}>
//         <DialogTitle>{title}</DialogTitle>
//         <DialogContent>{results}</DialogContent>
//         <DialogActions>{actions}</DialogActions>
//       </Dialog>
//     );
//   }

//   const modalContent = (
//     <div>
//       <p>This is the content of the modal. You can put any content you want here.</p>
//       <Chart />
//     </div>
//   );

//   const modalActions = (
//     <Button onClick={handleClose} color="primary">
//       Close
//     </Button>
//   );
  
//   return (
//     <div>
//       <Modal open={openPopup} 
//               onClose={handleClose} 
//               title="Modal Title" 
//               content={modalContent} 
//               actions={modalActions} />
//     </div>
//   )
// }

// export default Popup









// import React, {useState} from 'react';

// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';


import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { api } from '../api';

export function Popup({openPopup, setOpenPopup, enteredText, setEnteredText, results, setResults}) {

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');


  const saveResults = async () => {
      // Extract year, month, and day
      const currentDate = new Date();
      const year = currentDate.getUTCFullYear();
      const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so add 1
      const day = String(currentDate.getUTCDate()).padStart(2, '0');

      // Format as YYYY-MM-DD
      const formattedDate = `${year}-${month}-${day}`;

      fetch(api("/saveResults"), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "timestamp": currentDate.getTime().toString(),
          "date": formattedDate, 
          "tweet": enteredText,
          "score": results,
        }),
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error('ERROR');
        }
        return res.json()
      })
      .then((data) => {
        // TODO:
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }


  const handleOpen = () => {
    setOpenPopup(true);
  };

  const handleClose = async () => {
    setOpenPopup(false);
    await saveResults();
    setEnteredText('')
    setResults(-1)
  };

  function Modal({ open, onClose, title, content, actions }) {
    return (
      <Dialog open={open} 
              onClose={onClose} 
              fullWidth={'xl'}
              maxWidth={'xl'}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{results}</DialogContent>
        <DialogActions>{actions}</DialogActions>
      </Dialog>
    );
  }

  const modalContent = (
    <div>
      <p>This is the content of the modal. You can put any content you want here.</p>
    </div>
  );

  const modalActions = (
    <Button onClick={handleClose} color="primary">
      Close
    </Button>
  );
  
  return (
    <div>
      <Modal open={openPopup} 
              onClose={handleClose} 
              title="Modal Title" 
              content={modalContent} 
              actions={modalActions} />
    </div>
  )
}

export default Popup