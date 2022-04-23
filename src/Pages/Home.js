import React from 'react';
import { Link} from "react-router-dom";
import './Home.css';
import Delivery from '../other-option.png'; 
import Popup from 'reactjs-popup';

const Home = () => {
	

return (
	<div class= "overlay">
		<div class="centered">
			<h1 class="title">FOOD DRIVE</h1>
			<h3>Reduce waste and give food</h3>
			<br></br>
			<h3>&#127817; &#127819; &#127818;</h3>
			{/* <Link to="/about" class="button">I am a Vendor</Link>
			<Link to="/about" class="button">I am a Driver</Link> */}
			<Popup	trigger={<button className="button"> I am a Vendor </button>}
    			modal
    			nested
 		 	>
				{close => (
					<div className="modal">
						<h1 class="title_login">Vendor Login </h1>
						<div clas="over">
               			 <div className="Login-align"> <p class="text">Username </p></div>
                			<input 
                    			type = "text" 
                    			className="Login-input" 
								placeholder='trader-joes'
                			/>
                		<div className="Login-align"> <p class="text">Password </p></div>
                			<input 
                    			type = "password" 
                    			className="Login-input" 
								placeholder='*********'
                    			secureTextEntry={true}
                />		<div className='login_space'>
					    <Link to="/Screen" class="button">Next</Link>
						</div>
						<div className='sign-up'>
							<p>Don't have an account? Click here to sign up.
							</p>
						</div>
						</div>
					</div>
				)}
 	 		</Popup>
			  <Popup	trigger={<button className="button"> I am a Driver </button>}
    			modal
    			nested
 		 	>
				{close => (
					<div className="modal">
						<h1 class="title_login">Driver Login </h1>
						<div clas="over">
               			 <div className="Login-align"> <p class="text">Username </p></div>
                			<input 
                    			type = "text" 
                    			className="Login-input" 
								placeholder='john-doe'
                			/>
                		<div className="Login-align"> <p class="text">Password </p></div>
                			<input 
                    			type = "password" 
                    			className="Login-input" 
								placeholder='*********'
                    			secureTextEntry={true}
                />		<div className='login_space'>
					    <Link to="/Vendors" class="button">Next</Link>
						</div>
						<div className='sign-up'>
							<p>Don't have an account? Click here to sign up.
							</p>
						</div>
						</div>
					</div>
				)}
 	 		</Popup>
			<img src={Delivery} alt="img" class="img"/>;
		</div>
	</div>
);
};


export default Home;

