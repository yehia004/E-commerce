
import { Box, Grid, Typography, Button } from '@mui/material';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json'; // Direct import from src/data

const OurProductSec = () => {
  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
        Our Products
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {productsData.map((product, index) => (
          <Grid item key={`${product.title}-${index}`}> {/* Better key */}
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" mt={4}>
        <Button variant="outlined" color="warning">
          Show More
        </Button>
      </Box>
    </Box>
  );
};

export default OurProductSec;
