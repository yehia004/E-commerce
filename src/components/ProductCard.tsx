
import { grey } from '@mui/material/colors';
import { useCart } from '../hooks/cartHooks';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Chip
} from '@mui/material';

type ProductCardProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  tag?: string;
  image: string;
};

const ProductCard = ({
   id,
   title,
  description,
  price,
  oldPrice,
  tag,
  image,
}: ProductCardProps) => {
  
  const { addToCart } = useCart();



  const imagePath = image.startsWith('products/') 
    ? `/${image}` 
    : `/products/${image}`;
   const handleAddToCart = () => {
    const product = {id, title, description, price, image };
    addToCart(product);
    console.log(`${title} added to cart`);
  }; 

  return (
    <Card 
    sx={{
       width: 280,
        position: 'relative',
         borderRadius: 3,
          boxShadow: 3 ,
          overflow: 'hidden',
          backgroundColor: 'white',
          transition: 'background-color 0.3s ease',
              '&:hover': {
            backgroundColor: grey[800], // or grey[800] for a darker shade
          },
           '&:hover .MuiCardMedia-root': {
                filter: 'brightness(0.3)', // darken the image on hover
           },
           '&:hover .add-to-cart-btn': {
            opacity: 1,
             transform: 'translateY(0)',
             transition: 'opacity 0.3s ease, transform 0.3s ease',
    },}}>
      {tag && (
        <Chip
          label={tag}
          color={tag === 'New' ? 'success' : 'error'}
          size="small"
          sx={{ position: 'absolute', top: 12, right: 12, zIndex: 1 }}
        />
      )}

      <CardMedia
        component="img"
        height="180"
        image={imagePath}
        alt={title}
        sx={{ objectFit: 'cover',backgroundColor: 'transparent' }}
      />

      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="subtitle1" fontWeight="bold">
            {price}
          </Typography>
          {oldPrice && (
            <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
              {oldPrice}
            </Typography>
          )}
        </Box>
      </CardContent>

      <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button size="small" variant="outlined"> Share</Button>
        <Button size="small" variant="outlined">Like</Button>
        </CardActions>
       
       <Box
    className="add-to-cart-btn"
    sx={{
      position: 'absolute',
      bottom: 250,
      left: '90px',
      transform: 'translate(100%, -100%)',
      opacity: 0,
      transition: 'opacity 0.3s ease, transform 0.3s ease',
    }}
  >
    <Button
      onClick={handleAddToCart}
      size="small"
      variant="contained"
      color="primary"
    >
      Add to Cart
    </Button>
  </Box>
       
  </Card>
);
};

export default ProductCard;


        {/* <Button
          onClick={handleAddToCart}
          size="small"
          variant="contained"
          color="primary"
          className="add-to-cart-btn"
          sx={{
            position: 'absolute',
            bottom: '10px',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          Add to Cart
        </Button> */}
