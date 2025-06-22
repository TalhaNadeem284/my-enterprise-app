import React, { useState } from 'react';
import Input from '@/components/shared/Input';
import Button from '@/components/shared/Button';
import MultiSelect from '@/components/shared/MultiSelect';
import { Box, Paper, Typography } from '@mui/material';

const ProductForm = () => {
  const [colors, setColors] = useState<string[]>([]);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Product: ${productName}, Price: ${price}, Colors: ${colors.join(', ')}`);
  };

  return (
    <Box mt={6} display="flex" justifyContent="center">
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 600 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Product Entry
        </Typography>
        <form onSubmit={handleSubmit}>
          <Input
            label="Product Name"
            name="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
          <Input
            label="Price"
            name="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <MultiSelect
            label="Available Colors"
            name="colors"
            options={['Red', 'Blue', 'Green', 'Black']}
            value={colors}
            onChange={(e) => setColors(e.target.value as string[])}
          />
          <Box mt={3} textAlign="center">
            <Button type="submit">Save Product</Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default ProductForm;
