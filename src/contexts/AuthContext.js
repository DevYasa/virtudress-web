import { createContext, useContext, useEffect, useState } from 'react';
import api from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const checkUserLoggedIn = async () => {
    try {
      const { data } = await api.get('/auth/me');
      console.log('User data received:', data);
      setUser(data);
    } catch (error) {
      console.error('Not authenticated', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const { data } = await api.post('/auth/login', { email, password });
      setUser(data.user);
      return data;
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const signup = async (name, email, password, website) => {
    try {
      const { data } = await api.post('/auth/signup', { name, email, password, website });
      setUser(data.user);
      return data;
    } catch (error) {
      console.error('Signup failed', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
      setUser(null);
    } catch (error) {
      console.error('Logout failed', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);