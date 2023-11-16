import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';


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
import axios from 'axios';
import toast from 'react-hot-toast';
const ProjectButton = () => {

  const navigate = useNavigate()

  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("")
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  async function addProject(e) {
    try {
      e.preventDefault();

      const userData = JSON.parse(localStorage.getItem("userData"))

      const projectObj = {
        name: projectName,
        description: projectDesc,
        userId : userData.userId
      }

      const res = await axios.post("https://zura-backend-35dz.onrender.com/project/addProject", projectObj)

      console.log(res.data)
      if (res.data.status === true) {
        toast.success("Project create successfully")
        navigate("/project-listing")

      }
    } catch (error) {
       toast.error("error in saving project")
    }
  }

  return (
    <div>
      <Button className="btn" onClick={handleOpenModal}>
        <AddIcon className="plus-icon" /> Create New Project
      </Button>

      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle sx={{ fontWeight: "bold" }}>Create Project</DialogTitle>
        <DialogContent sx={{ width: '500px', height: '300px' }}>
          <DialogContentText>
            Enter Project Name:
          </DialogContentText>
          <TextField
            placeholder='Type here'
            className='dialog-text-field'
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          {
            projectName === "" && <p className='error'>Project Name can't be empty</p>
          }
          <DialogContentText sx={{ marginTop: "15px" }}>
            Enter Project Description:
          </DialogContentText>
          <TextField
            placeholder='Type here'
            className='dialog-text-field'
            value={projectDesc}
            multiline
            minRows={3}
            onChange={(e) => setProjectDesc(e.target.value)}
          />
          {
            projectDesc === "" && <p className='error'>Project projectDesc can't be empty</p>
          }

        </DialogContent>
        <DialogActions>
          <Button sx={{ textTransform: "capitalize", color: "red" }}
            onClick={handleCloseModal}
          >Cancel</Button>
          {
            (projectName.trim() === "" || projectDesc.trim() === "") && <Button sx={{ background: "blue" }} disabled>Create</Button>
          }
          {
            projectName.trim() !== "" && projectDesc.trim() !== "" && <Button className='create-btn' onClick={addProject}>Create</Button>
          }
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ProjectButton