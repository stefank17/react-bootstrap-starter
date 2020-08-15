import React from "react";
import Body, { Helmet } from "react-helmet";

export default () => {
	return (
		<>
			<Body>
				{/* <script defer src="./js/jquery-4.4.1.min.js"></script>
				<script defer src="./js/popper.js"></script>
				<script defer src="./js/bootstrap.bundle.min.js"></script> */}

				{/* THE SOMEHOW ONLY WORK WHEN ITS DOWNLOADED */}
				<script
					defer
					src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
					integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
					crossorigin="anonymous"
				></script>
				<script
					defer
					src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
					integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
					crossorigin="anonymous"
				></script>

				{/* <script
					defer
					src="./js/jquery-4.4.1.min.js"
					integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
					crossorigin="anonymous"
				></script> */}
				{/* <script
					defer
					src={require("./js/bootstrap.bundle.min.js")}
					integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
					crossorigin="anonymous"
				></script> */}
			</Body>
		</>
	);
};
