import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Header from '../../layout/Header';

import "./ProjectListing.css"
import { Toolbar } from '@mui/material';
import ProjectButton from '../../buttons/ProjectButton';

const GridComponent = () => {
  return (
    <div>
      <Header /> {/* Assuming you have a Header component */}
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <h1 className='project-header'>Projects</h1>
          </Grid>
          <Grid item xs={4}>

          </Grid>
          <Grid item xs={4} >
            <div style={{marginTop : "50px", marginLeft : "100px"}}>
              <ProjectButton />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Paper className="paper">
              <Toolbar className="card">
                <div className="icon" style={{background : "blue"}}>
                  <h1>SP</h1>
                </div>
                <div className="title">
                  <h3>Sample Project</h3>
                  <h4>4 episodes</h4>
                  <h5>Last update: a week ago</h5>
                </div>
              </Toolbar>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="paper">
              <Toolbar className="card">
                <div className="icon"  style={{background : "red"}}>
                  <h1>SP</h1>
                </div>
                <div className="title">
                  <h3>Sample Project</h3>
                  <h4>4 episodes</h4>
                  <h5>Last update: a week ago</h5>
                </div>
              </Toolbar>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="paper">
              <Toolbar className="card">
                <div className="icon"  style={{background : "darkslategrey"}}>
                  <h1>SP</h1>
                </div>
                <div className="title">
                  <h3>Sample Project</h3>
                  <h4>4 episodes</h4>
                  <h5>Last update: a week ago</h5>
                </div>
              </Toolbar>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="paper">
              <Toolbar className="card">
                <div className="icon"  style={{background : "red"}}>
                  <h1>SP</h1>
                </div>
                <div className="title">
                  <h3>Sample Project</h3>
                  <h4>4 episodes</h4>
                  <h5>Last update: a week ago</h5>
                </div>
              </Toolbar>
            </Paper>
          </Grid><Grid item xs={4}>
            <Paper className="paper">
              <Toolbar className="card">
                <div className="icon"  style={{background : "darkslategrey"}}>
                  <h1>SP</h1>
                </div>
                <div className="title">
                  <h3>Sample Project</h3>
                  <h4>4 episodes</h4>
                  <h5>Last update: a week ago</h5>
                </div>
              </Toolbar>
            </Paper>
          </Grid><Grid item xs={4}>
            <Paper className="paper">
              <Toolbar className="card">
                <div className="icon"  style={{background : "blue"}}>
                  <h1>SP</h1>
                </div>
                <div className="title">
                  <h3>Sample Project</h3>
                  <h4>4 episodes</h4>
                  <h5>Last update: a week ago</h5>
                </div>
              </Toolbar>
            </Paper>
          </Grid><Grid item xs={4}>
            <Paper className="paper">
              <Toolbar className="card">
                <div className="icon"  style={{background : "blue"}}>
                  <h1>SP</h1>
                </div>
                <div className="title">
                  <h3>Sample Project</h3>
                  <h4>4 episodes</h4>
                  <h5>Last update: a week ago</h5>
                </div>
              </Toolbar>
            </Paper>
          </Grid><Grid item xs={4}>
            <Paper className="paper">
              <Toolbar className="card">
                <div className="icon"  style={{background : "red"}}>
                  <h1>SP</h1>
                </div>
                <div className="title">
                  <h3>Sample Project</h3>
                  <h4>4 episodes</h4>
                  <h5>Last update: a week ago</h5>
                </div>
              </Toolbar>
            </Paper>
          </Grid><Grid item xs={4}>
            <Paper className="paper">
              <Toolbar className="card">
                <div className="icon"  style={{background : "darkslategrey"}}>
                  <h1>SP</h1>
                </div>
                <div className="title">
                  <h3>Sample Project</h3>
                  <h4>4 episodes</h4>
                  <h5>Last update: a week ago</h5>
                </div>
              </Toolbar>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default GridComponent;
