import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/features" component={Features} />
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;