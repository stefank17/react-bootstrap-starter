import React, { Component } from "react";
import Layout from "../components/Layout";

export default class App extends Component {
	componentDidMount() {
		const script = document.createElement("script");
		const script2 = document.createElement("script");

		script.src = "https://code.jquery.com/jquery-3.4.1.slim.min.js";
		script.async = true;
		script2.src =
			"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js";
		script2.async = true;

		document.body.appendChild(script);
		document.body.appendChild(script2);
	}
	render() {
		return (
			<div>
				<Layout />
			</div>
		);
	}
}
