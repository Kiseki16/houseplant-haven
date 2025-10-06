import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', background: '#d0f0c0' }}>
      <h1>Houseplant Haven</h1>
      <nav>
        <Link to="/products" style={{ marginRight: '1rem' }}>Products</Link>
        <Link to="/cart">Cart ({totalQuantity})</Link>
      </nav>
    </header>
  );
};

export default Header;
