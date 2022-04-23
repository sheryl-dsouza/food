import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/Home" activeStyle>
			&#127817;HOME
		</NavLink>
		<NavLink to="/about" activeStyle>
			ABOUT US
		</NavLink>
		<NavLink to="/Vendors" activeStyle>
			VENDORS
		</NavLink>
		<NavLink to="/Contact" activeStyle>
			CONTACT
		</NavLink>
		{/* <NavLink to="/login" activeStyle>
			Login
		</NavLink> */}
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;

