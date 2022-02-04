import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div>
			<div className="Navbar">
				<Link to="/">
					<img
						src="https://cdn-icons-png.flaticon.com/512/684/684050.png"
						alt=""
						className="logoimg"
					/>
				</Link>
				<div className="navdetails">
					<Link to="/" className="linktag">
						<h2 className="htag">About Cancer</h2>
					</Link>
					<Link to="/cancertypes" className="linktag">
						<h2 className="htag">Cancer Types</h2>
					</Link>
					<Link to="/hospitals" className="linktag">
						<h2 className="htag">Hospitals</h2>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
