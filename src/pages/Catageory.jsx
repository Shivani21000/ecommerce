import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import StoreData from '../StoreData';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../CartContext';
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    fontWeight: 'bold',        // Make text bold
    textAlign: 'center',       // Center-align text
  }));
  

function Category() {
  const { categoryId } = useParams();
  //const { addToCart } = useContext(CartContext); // Access addToCart from CartContext
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const storeData = new StoreData();

  useEffect(() => {

    async function fetchProducts() {
      try {
        const fetchedProducts = await storeData.getProductsByCategory(categoryId);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return <div>Loading...</div>;
  };
  let heading;
  switch (categoryId) {
    case '1':
        heading = 'Men';
        break;
    case '2':
        heading = 'Women';
        break;
    case '3':
        heading = 'Kids';
        break;
    default:
        heading = 'Products';
        break;
}
  return (
    <main>
      <Div>{ heading}</Div> 
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product}  />
        ))}
      </div>
    </main>
  );
}

export default Category;