import React, { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';
import FilterBox from './components/FilterBox';
import GlobalStyles from './styles/GlobalStyles';
import Confetti from 'react-confetti';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredShopId, setFilteredShopId] = useState('all');
  const [filteredCategoryId, setFilteredCategoryId] = useState('all');
  const [filteredStatus, setFilteredStatus] = useState('all');
  const [filteredName, setFilteredName] = useState('');
  const [isShoppingComplete, setIsShoppingComplete] = useState(false);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const toggleBought = (id) => {
    setProducts(products.map(product => product.id === id ? { ...product, isBought: !product.isBought } : product));
  };

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const filteredProducts = products.filter(product => {
    const matchShop = filteredShopId === 'all' || product.shop === parseInt(filteredShopId);
    const matchCategory = filteredCategoryId === 'all' || product.category === parseInt(filteredCategoryId);
    const matchStatus = filteredStatus === 'all' || (filteredStatus === 'bought' && product.isBought) || (filteredStatus === 'notBought' && !product.isBought);
    const matchName = product.name.toLowerCase().includes(filteredName.toLowerCase());
    return matchShop && matchCategory && matchStatus && matchName;
  });

  useEffect(() => {
    if (products.length > 0 && products.every(product => product.isBought)) {
      setIsShoppingComplete(true);
      alert('Alışveriş Tamamlandı!');
    } else {
      setIsShoppingComplete(false);
    }
  }, [products]);

  return (
    <>
      <GlobalStyles />
      <div className="container mt-5">
        <h1>Alışveriş Listesi</h1>
        <ProductForm addProduct={addProduct} />
        <FilterBox
          setFilteredShopId={setFilteredShopId}
          setFilteredCategoryId={setFilteredCategoryId}
          setFilteredStatus={setFilteredStatus}
          setFilteredName={setFilteredName}
        />
        <ProductTable
          products={filteredProducts}
          toggleBought={toggleBought}
          removeProduct={removeProduct}
        />
        {isShoppingComplete && <Confetti />}
      </div>
    </>
  );
};

export default App;
