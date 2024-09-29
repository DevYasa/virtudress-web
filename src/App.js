import React from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Components
import Footer from './components/Footer';
import Header from './components/Header';

// Pages
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import AuthForm from './pages/AuthForm';
import DashboardPage from './pages/DashboardPage';
import AdminDashboard from './components/AdminDashboard';
import TryOnPage from './pages/TryOnPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public route outside of AuthProvider */}
        <Route path="/try-on/:productId" element={<TryOnPage />} />
        
        {/* All other routes wrapped in AuthProvider */}
        <Route
          path="*"
          element={
            <AuthProvider>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/auth" element={<AuthForm />} />
                    <Route element={<ProtectedRoute />}>
                      <Route path="/dashboard" element={<DashboardPage />} />
                    </Route>
                    <Route path="/admin" element={<ProtectedRoute adminOnly={true} />}>
                      <Route index element={<AdminDashboard />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </AuthProvider>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;