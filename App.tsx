
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CreateWish from './pages/CreateWish';
import PastWishes from './pages/PastWishes';
import FutureReading from './pages/FutureReading';
import CategoryWishes from './pages/CategoryWishes';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishes/create" element={<CreateWish />} />
          <Route path="/wishes/history" element={<PastWishes />} />
          <Route path="/wishes/category/:style" element={<CategoryWishes />} />
          <Route path="/reading" element={<FutureReading />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
