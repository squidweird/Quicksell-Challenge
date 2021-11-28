import React from "react";
import "../App.css"

const CounterText = (props) => (
    
	<div className="counter-text">
		Counter Value : {isNaN(props.count) ? 1 : props.count }
	</div>
);

export default CounterText;