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

export function Popup() {

  const [open, setOpen] = useState(true);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  function Modal({ open, onClose, title, content, actions }) {
    return (
      <Dialog open={open} 
              onClose={onClose} 
              fullWidth={'xl'}
              maxWidth={'xl'}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
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
      <Modal open={open} onClose={handleClose} title="Modal Title" content={modalContent} actions={modalActions} />
    </div>
  )
}

export default Popup









