import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';



import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Toolbar,
  Typography,
  TextField,
  DialogActions
} from '@mui/material';

import "./ProjectButton.css"
const ProjectButton = () => {

    const [projectName, setProjectName] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };

    return (
        <div>
           <Button className="btn" onClick={handleOpenModal}>
        <AddIcon className="plus-icon" /> Create New Project
      </Button>

      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle sx={{ fontWeight: "bold" }}>Create Project</DialogTitle>
        <DialogContent sx={{ width: '500px', height: '150px' }}>
          <DialogContentText>
            Enter Project Name:
          </DialogContentText>
          <TextField 
          placeholder='Type here' 
          className='dialog-text-field'
          value={projectName}
          onChange={(e)=>setProjectName(e.target.value)}
          />
          {
            projectName === "" && <p className='error'>Project Name can't be empty</p>
          }
          </DialogContent>
        <DialogActions>
          <Button sx={{textTransform : "capitalize", color : "red"}}
          onClick={handleCloseModal}
          >Cancel</Button>
          <Button className='create-btn'>Create</Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}

export default ProjectButton