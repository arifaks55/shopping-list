import React from 'react';
import styled from 'styled-components';
import { shops, categories } from '../Data';

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 150px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Radio = styled.input`
  margin-right: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
`;

const FilterBox = ({ setFilteredShopId, setFilteredCategoryId, setFilteredStatus, setFilteredName }) => (
    <FilterContainer>
        <Select onChange={(e) => setFilteredShopId(e.target.value)}>
            <option value="all">Tüm Marketler</option>
            {shops.map(shop => <option key={shop.id} value={shop.id}>{shop.name}</option>)}
        </Select>

        <Select onChange={(e) => setFilteredCategoryId(e.target.value)}>
            <option value="all">Tüm Kategoriler</option>
            {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
        </Select>

        <RadioGroup>
            <label>
                <Radio type="radio" value="all" name="status" onChange={(e) => setFilteredStatus(e.target.value)} defaultChecked />
                Tümü
            </label>
            <label>
                <Radio type="radio" value="bought" name="status" onChange={(e) => setFilteredStatus(e.target.value)} />
                Satın Alınanlar
            </label>
            <label>
                <Radio type="radio" value="notBought" name="status" onChange={(e) => setFilteredStatus(e.target.value)} />
                Satın Alınmayanlar
            </label>
        </RadioGroup>

        <Input type="text" placeholder="Ürün Adı" onChange={(e) => setFilteredName(e.target.value)} />
    </FilterContainer>
);

export default FilterBox;
