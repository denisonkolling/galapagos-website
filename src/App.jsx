import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import Outlet from './pages/Outlet';
import { Shop } from './pages/Shop';
import BannerTopPromo from './components/BannerTopPromo';

import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
		<BannerTopPromo />
			<Navbar />
      <Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/history" element={<History />} />
			<Route path="/outlet" element={<Outlet />} />
			<Route path="/shop" element={<Shop />} />
      </Routes>
			<Footer />
		</>
	);
}

export default App;
