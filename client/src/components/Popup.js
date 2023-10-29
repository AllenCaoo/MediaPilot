import React, {useState} from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';



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
      <Dialog open={open} onClose={onClose}>
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
  
  // const style = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 400,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   p: 4,
  // };
  
  // function BasicModal() {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  
  //   return (
  //     <div>
  //       <Button onClick={handleOpen}>Open modal</Button>
  //       <Modal
  //         open={open}
  //         onClose={handleClose}
  //         aria-labelledby="modal-modal-title"
  //         aria-describedby="modal-modal-description"
  //       >
  //         <Box sx={style}>
  //           <Typography id="modal-modal-title" variant="h6" component="h2">
  //             Text in a modal
  //           </Typography>
  //           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
  //             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  //           </Typography>
  //         </Box>
  //       </Modal>
  //     </div>
  //   );
  // }
  return (
    <div>
      
      {/* <BasicModal /> */}
      <Modal open={open} onClose={handleClose} title="Modal Title" content={modalContent} actions={modalActions} />
    </div>
  )
}

export default Popup





