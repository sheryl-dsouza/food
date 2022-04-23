import React from 'react'
import { Link} from "react-router-dom";
import './Vendor_Screen.css';
import Popup from 'reactjs-popup';


const Vendor_Screen = () => {
    return (
        <div class="overlay">
            <h2>Welcome Trader Joes</h2>
            <div class="pastorder">
                <a class="pastorder" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">See past orders here</a>
            </div>
            <div className="foodform"> <p class="text">Add Items </p></div>
                <input 
                    type = "text" 
                    className="foodinput" 
                    placeholder='e.g) Bread'
                />
            <div className="foodform"> <p class="text">Amount </p></div>
                <input 
                    type = "text" 
                    className="foodinput" 
                    placeholder='e.g) 2 loaves, 3 lbs'
                />
            <div className="foodform"> <p class="text">Pick Up Address </p></div>
                <input 
                    type = "text" 
                    className="foodinput" 
                    placeholder='e.g) 12345 Placeholder St'
                />
            <div className="foodform"> <p class="text">Choose Pick Up Time Range </p></div>
                <input 
                    type = "text" 
                    className="foodinput" 
                    placeholder='e.g) 9:30 PM -10:30 PM'
                />
            <div className="foodform"> <p class="text">Special Requests or Notes </p></div>
                <input 
                    type = "text" 
                    className="foodinput" 
                    placeholder='e.g) drive to back entrance'
                />
            
        

            <Popup
    trigger={<button className="button"> Submit Pick Up Request </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <div className="header"> Thank you for submitting a pick up request! </div>
        <div className="actions">
          
        <Link to="/Home" class="button" margin="0 auto">Close</Link>
        </div>
      </div>
    )}
  </Popup>
  <div>
      <br></br>
      <br></br>
  </div>
        </div>

    );
    
};
    
export default Vendor_Screen;