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

import DialogTitle from '@mui/material/DialogTitle';
import Chart from './Chart';


export function Popup() {

  const [open, setOpen] = useState(true);
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
      <Chart />
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









