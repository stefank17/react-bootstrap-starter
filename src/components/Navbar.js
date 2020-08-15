import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a href="#" className="navbar-brand">
				Brand
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#myNavbar"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="myNavbar">
				<ul className="navbar-nav mx-auto">
					<li className="nav-item active">
						<a href="#" className="nav-link">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link">
							Products
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
