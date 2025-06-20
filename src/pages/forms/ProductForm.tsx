// File: src/pages/forms/ProductForm.tsx
import React from 'react';
import Input from '@/components/shared/Input';
import Button from '@/components/shared/Button';

const ProductForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Product form submitted');
  };

  return (
    <form className="space-y-4 p-6" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold">Product Form</h2>
      <Input label="Product Name" name="productName" required />
      <Input label="Price" name="price" type="number" required />
      <Button type="submit">Save Product</Button>
    </form>
  );
};

export default ProductForm;