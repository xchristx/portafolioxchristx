import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { capitalize, Link, Menu, MenuItem } from '@mui/material';
import {Link as RouterLink} from 'react-router-dom'



const drawerWidth = 240;
const navItems = ['home', 'proyects', 'about Me', 'contact'];

function NavBar (props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor:'white',zIndex:100 }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box id='menu-appbar'  sx={{ display: 'flex', }}>
      <AppBar component="nav" sx={{ bgcolor:'transparent', color:'white', boxShadow:0, mt:2,}} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 3, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Link
            variant="title"
            href = "#home"
            sx={{ color: '#fff',  textDecoration:'none', flexGrow: 1,cursor:'pointer', fontSize:'23px', display: { xs: 'none', sm: 'block' }, letterSpacing:1.5, ml:2,  }}
          >
            CHRISTIAN
          </Link>
          <Box id='link' sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Link key={item} 
                    href={`#${item.replace(' ','')}`} 
                    data-menuanchor={`#${item.replace(' ','')}`} 
                    className = "active"
                    sx={{ color: '#fff', m:'10px', textDecoration:'none', fontSize:'23px' }}>
                {capitalize(item)}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          id='menu-appbar'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none',zIndex:500 },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
  );
}

export default NavBar ;