import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
	<a class="navbar-brand" href="/">
      <div class="logo-image">
            <img src="https://cdn.freelogodesign.org/files/67c7d1f668dd4a1da94769a08ba082d0/thumb/logo_200x200.png?v=637863495790000000"width="120px"height="120px" class="img-fluid"/>
      </div>
	</a>
		<NavMenu>
		<NavLink to="/Home" activeStyle>
			HOME
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

