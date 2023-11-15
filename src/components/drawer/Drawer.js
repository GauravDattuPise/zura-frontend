import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

import NotificationsIcon from '@mui/icons-material/Notifications';
import FlagIcon from '@mui/icons-material/Flag';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

function ResponsiveDrawer() {
    return (
        <div style={{ backgroundColor: 'white', height: '100vh' }}>
            <CssBaseline />
            <Grid container>
                <Grid item sx={{ width: "250px", height: "738px", backgroundColor: "lightblue" }}>
                    <List>
                        <ListItemButton>
                            <ListItemText>Projects</ListItemText>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText>Widget Configurations</ListItemText>
                        </ListItemButton>
                    </List>
                </Grid>
                <Grid item sx={{ background: "white", width: "calc(100% - 250px)" }}>
                    <AppBar position="static" color="default" sx={{ backgroundColor: 'white' }}>
                        <Toolbar>
                            <IconButton sx={{ color: 'violet' }}>
                                <HomeIcon />
                            </IconButton>
                            <Typography sx={{ color: "gray" }}>/ Sample Project /</Typography>
                            <Typography variant='body1' sx={{ color: "blue" }}>Upload</Typography>
                            <IconButton sx={{ color: 'violet' }}>
                                <NotificationsIcon />
                            </IconButton>
                            <IconButton sx={{ color: 'violet' }}>
                                <FlagIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </div>
    );
}

export default ResponsiveDrawer;
