import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const handleRemove = (itemId) => {
   
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };
  return (
    <main>
      <h1>Cart</h1>
      <List>
        {cart.map((item) => (
          <ListItem key={item.id} sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt={item.name}
              src={item.image}
              sx={{ width: 56, height: 56, marginRight: 2 }}
            />
            <ListItemText
              primary={`${item.name} - $${item.price.toFixed(2)}`}
            />
            <IconButton edge="end" aria-label="delete" onClick={() => handleRemove(item.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ marginTop: 4, textAlign: 'right' }}>
        <Typography variant="h6">
          Total: ${total.toFixed(2)}
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Checkout
        </Button>
      </Box>
    </main>
  );
}

export default Cart;