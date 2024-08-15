import React from 'react';
import styled from 'styled-components';
import { Table } from 'react-bootstrap';

const StyledTable = styled(Table)`
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProductTable = ({ products, toggleBought, removeProduct }) => (
    <StyledTable striped bordered hover>
        <thead>
            <tr>
                <th>Ürün Adı</th>
                <th>Market</th>
                <th>Kategori</th>
                <th>Durum</th>
                <th>Sil</th>
            </tr>
        </thead>
        <tbody>
            {products.map(product => (
                <tr key={product.id} onClick={() => toggleBought(product.id)} style={{ textDecoration: product.isBought ? 'line-through' : 'none' }}>
                    <td>{product.name}</td>
                    <td>{product.shop}</td>
                    <td>{product.category}</td>
                    <td>{product.isBought ? 'Satın Alındı' : 'Satın Alınmadı'}</td>
                    <td><button onClick={(e) => { e.stopPropagation(); removeProduct(product.id); }}>Sil</button></td>
                </tr>
            ))}
        </tbody>
    </StyledTable>
);

export default ProductTable;
