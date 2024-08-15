import React, { useState } from 'react';
import styled from 'styled-components';
import { shops, categories } from '../Data';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductForm = ({ addProduct }) => {
    const [name, setName] = useState('');
    const [shop, setShop] = useState(shops[0].id);
    const [category, setCategory] = useState(categories[0].id);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Math.random(),
            name,
            shop,
            category,
            isBought: false,
        };
        addProduct(newProduct);
        setName('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ürün Adı" />
            <Select value={shop} onChange={(e) => setShop(e.target.value)}>
                {shops.map(shop => <option key={shop.id} value={shop.id}>{shop.name}</option>)}
            </Select>
            <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
            </Select>
            <Button type="submit">Ekle</Button>
        </Form>
    );
};

export default ProductForm;
