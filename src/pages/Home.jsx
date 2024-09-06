import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import CategoryCarousel from '../components/CategoryCarousel';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

function Home({ categories }) {
  return (
    <Box sx={{ width: '100%' }}>
      <CategoryCarousel categories={categories} />
      
      <Stack spacing={2} sx={{ mt: 4 }}>
        {categories.map((category) => (
          <Item key={category.id}>
            <Link to={`/category/${category.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img 
                src={`/images/category/${category.image}`} 
                alt={category.name} 
                style={{ width: '100%', height: 'auto', maxHeight: '250px', objectFit: 'cover' }}
              />
              <h2>{category.name}</h2>
            </Link>
          </Item>
        ))}
      </Stack>
    </Box>
  );
}

export default Home;