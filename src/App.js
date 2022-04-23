import React from 'react';
import './App.css';
import Navbar from './Navbar/index';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Vendors from './Pages/Vendors';
import VendorScreen from './Pages/Vendor_Screen';
//import Contact from './Pages/Contact';


function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home/>} />
		<Route path='/about' element={<About/>} />
		<Route path='/Vendors' element={<Vendors/>} />
		<Route path='/Home' element={<Home/>} />
		<Route path='/Screen' element={<VendorScreen/>} />
		{/* <Route path='/Contact' element={<Contact/>} /> */}
	</Routes>
	</Router>
);
}

export default App;

