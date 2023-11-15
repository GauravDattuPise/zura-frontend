import React from 'react'
import { IconButton, Toolbar } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <div>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <img
            src="https://assets-global.website-files.com/64a6a713740e455bda49d64b/64d763e27a2584b8845b0191_Skailama%20Logo%20(1).svg"
            alt="sky lama Logo"
            style={{ height: '100px', width: '100px', padding: '0px', margin: '0px' }}
          />
        </div>
        <div>
          <IconButton color="primary">
            <SettingsIcon />
          </IconButton>
          <IconButton color="secondary">
            <NotificationsIcon />
          </IconButton>
        </div>
      </Toolbar>
    </div>
  )
}

export default Header