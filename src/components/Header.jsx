import * as React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Box sx={{ flexGrow: 2}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }}  onClick={() => navigate('/')}  >
            Shop
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="cart"
            onClick={() => navigate('/cart')} // Navigate to cart page
          >
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}