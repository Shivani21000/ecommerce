import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate(); // Use navigate hook

    const handleAddToCart = () => {
        setCart([...cart, product]);
        alert('Item added to cart!');
    };

    // Navigate to the product detail page when the card is clicked
    const handleCardClick = () => {
        navigate(`/product/${product.id}`); // Assumes product detail route is /product/:id
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={handleCardClick}>  {/* Navigate to product page */}
                <CardMedia
                    component="img"
                    height="300"
                    image={product.image}
                    alt={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {product.description}
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.primary' }}>
                        ${product.price.toFixed(2)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={handleAddToCart}>
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
}