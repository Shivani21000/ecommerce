import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import StoreData from '../StoreData';
import { CartContext } from '../CartContext';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const storeData = new StoreData();
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct = await storeData.getProductById(productId);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [productId, storeData]);

  const handleAddToCart = () => {
    setCart([...cart, product]);
    alert('Item added to cart!');
  };

  if (loading) {
    return <Box>Loading...</Box>;
  }

  if (!product) {
    return <Box>Product not found</Box>;
  }

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' },
      gap: 2,
      p: 3 
    }}>
      {/* Product Image */}
      <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 50%' } }}>
        <Item>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </Item>
      </Box>

      {/* Product Details */}
      <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 50%' } }}>
        <Item>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>${product.price.toFixed(2)}</h4>

          {/* Add to Cart Button */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Item>
      </Box>
    </Box>
  );
}