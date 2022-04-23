import React from 'react';
import './App.css';
import Navbar from './Navbar/index';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';


function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home/>} />
		<Route path='/about' element={<About/>} />
	</Routes>
	</Router>
);
}

export default App;

