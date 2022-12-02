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
import { makeStyles } from '@mui/styles'

import { useLocation, useNavigate, Navigate  } from 'react-router-dom';


const drawerWidth = 240;
const navItems = ['home', 'proyects', 'about Me', 'contact'];

const useStyles = makeStyles ((theme) => ({
  active: {
    color:'#FF4D5A',
    fontWeight:500,
    borderBottom: '2px solid #FF4D5A'
  }
}));

function NavBar (props) {

  const location = useLocation();
  const classes = useStyles();
  const navigate = useNavigate();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color:'#F4F4F4' ,zIndex:100 }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      CHRISTIAN
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
              <Link 
                sx={{ textAlign: 'center', width:'100%', textDecoration:'none', p:1 }}
                href={`#${item.replace(' ','')}`}
                className={location.hash === `#${item.replace(' ','')}` ? `${classes.active}` : "null"}
                >
                  {item}
              </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box   sx={{ display: 'flex', }}>
      <AppBar component="nav" sx={{ bgcolor:'transparent', boxShadow:0, mt:2,}} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            className='active'
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
                    className={location.hash === `#${item.replace(' ','')}` ? `${classes.active}` : "null"}
                    href={`#${item.replace(' ','')}`} 
                    data-menuanchor={`#${item.replace(' ','')}`} 
                    sx={{ color: '#fff', m:'10px', textDecoration:'none', fontSize:'23px', fontWeight:300 }}>
                {capitalize(item)}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" >
        <Drawer
          container={container}
          variant="temporary"
          id='menu-appbar'
          PaperProps={{
            sx: {
              backgroundColor: "#220D0D",
            }
          }}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none',zIndex:500 },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            border:'2px solid black'
          }}
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
  );
}

export default NavBar ;