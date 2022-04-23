import React from 'react'
import './Vendor_Screen.css';
var perf =require('./form.html');

const Vendor_Screen = () => {
    return (
        <div class="overlay">
            <h2>Welcome HEB</h2>
            <div class="pastorder">
                <p>See past orders here</p>
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
            <div className="foodform"> <p class="textarea">Special Requests or Notes </p></div>
                <input 
                    type = "textarea" 
                    className="foodinput" 
                    placeholder='e.g) drive to back entrance'
                />
            <p></p>
        </div>
    );
};
    
export default Vendor_Screen;