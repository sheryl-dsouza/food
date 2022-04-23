import React from "react";
import './About_Vendors.css';
import { Link} from "react-router-dom";

const Vendors = () => {
return (
    <div class="overlay">

        <h1>OUR VENDORS</h1>
        <h2>Find all our vendors near you</h2>

        <div class="places">
            <a href="https://www.heb.com/" ><img src="https://download.logo.wine/logo/H-E-B/H-E-B-Logo.wine.png" width="30%" height="30%" /></a>
        </div>
        <div class="other">
            hi
        </div>
        <br></br>
        <div class="places">
            <a href="https://whataburger.com/home" ><img src="https://www.jonespubliclibrary.org/whataburger-logo-png-transparent-1.png/@@images/32ccde57-c730-4c38-9020-1cf044fccbdf.png"width="30%" height="30%"/></a>
        </div>
        <br></br>
        <div class="places">
            <a href="https://housing.utexas.edu/dining/dining-locations/dining-halls/j2-dining"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/University_of_Texas_at_Austin_seal.svg/1200px-University_of_Texas_at_Austin_seal.svg.png"width="30%"height="30%"/></a>
        </div>
        <br></br>
    </div>

);
};
export default Vendors;
