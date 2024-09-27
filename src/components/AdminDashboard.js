import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchProducts();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await api.get('/admin/users');
      setUsers(res.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await api.get('/admin/products');
      setProducts(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Users</h2>
        <ul>
          {users.map(user => (
            <li key={user._id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Products</h2>
        <ul>
          {products.map(product => (
            <li key={product._id}>{product.name} - {product.color}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;