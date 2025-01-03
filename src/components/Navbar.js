import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import { Link, useLocation } from 'react-router-dom';


const disableRightClick = (event) => {
  if (event.button === 2) {
    event.preventDefault();
    return false;
  }
}


export default function Navbar (props) {

  const {drawerWidth, content} = props
  const location = useLocation()
  const path = location.pathname

  const [open, setOpen] = React.useState(false);
  const changeOpenStatus = () => {
    setOpen(!open)
  }

  const myDrawer =(
    <div>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }} onContextMenu={disableRightClick} >
        <List>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/" selected={"/" === path} onClick={changeOpenStatus}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/about" selected={"/about" === path} onClick={changeOpenStatus}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary={"About"} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/photos" selected={"/photos" === path} onClick={changeOpenStatus}>
              <ListItemIcon>
                <MonochromePhotosIcon/>
              </ListItemIcon>
              <ListItemText primary={"Photos"} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/contact" selected={"/contact" === path} onClick={changeOpenStatus}>
              <ListItemIcon>
                <ConnectWithoutContactIcon />
              </ListItemIcon>
              <ListItemText primary={"Contact"} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={{marginTop: 34}}>
              <ListItemIcon>
                <AlternateEmailIcon/>
              </ListItemIcon>
              <ListItemText primary={"2025 TSSA All right reserved"} />
            </ListItemButton>
          </ListItem>

        </List>
      </Box>
    </div>
  )






  return (
    <Box sx={{ display: 'flex'}} >  {/*backgroundSize: 'cover', height: '100vh', width: '100vw', backgroundColor: 'lightgoldenrodyellow'*/}
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1}}>
        <Toolbar>
          <IconButton
            color = "inherit" 
            onClick={changeOpenStatus}
            sx={{mr:2, display:{sm:"none"}}}
            >
            <MenuIcon/>
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            Information Application 
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          display: {xs:"none", sm:"block"},
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
      {myDrawer}
      </Drawer>
      <Drawer
        variant="temporary"
        open = {open}
        onClose = {changeOpenStatus}
        sx={{
          display: {xs:"block", sm:"none"},
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
      {myDrawer}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
        <Toolbar />
          {content}
      </Box>
    </Box>

  );
}
