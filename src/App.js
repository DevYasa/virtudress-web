import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Components
import Footer from './components/Footer';
import Header from './components/Header';

// Pages
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import AuthForm from './pages/AuthForm';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  return (
    <AuthProvider>
     <Router>
       <div className="flex flex-col min-h-screen">
         <Header />
         <main className="flex-grow">
           <Routes>
             <Route path="/" element={<HomePage />} />
             <Route path="/pricing" element={<PricingPage />} />
             <Route path="/about" element={<AboutPage />} />
             <Route path="/contact" element={<ContactPage />} />
             <Route path="/auth" element={<AuthForm />} />
             <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            {/* Add other protected routes here */}
            </Route>
           </Routes>
          </main>
         <Footer />
       </div>
     </Router>
    </AuthProvider>
  );
};

export default App;