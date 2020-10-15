import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Counter = props => {
	//currentState, functionToChangeState
	const [count, setCount] = useState(props.count);
	const [text, setText] = useState("");

	//This only runs onces, whenever the component mounts
	//this is useful whenever you fetch or read data
	useEffect(() => {
		console.log("This should only run once");
	}, []);

	//runs after component is rendered first time or updated
	//allows us to syncroniize our props and state with whatever we want to
	useEffect(() => {
		console.log("useEffect ran");
		document.title = count;
	}, [count]); //adding a list of state properties, will make it update only when those items have changed

	return (
		<div>
			<p>
				The current {text || "count"} is {count}
			</p>
			<button onClick={() => setCount(count - 1)}>-1</button> &nbsp;
			<button onClick={() => setCount(props.count)}>Reset</button> &nbsp;
			<button onClick={() => setCount(count + 1)}>+1</button> &nbsp;
			<input
				type="text"
				value={text}
				onChange={e => setText(e.target.value)}
			/>
		</div>
	);
};

Counter.defaultProps = {
	count: 0
};

Counter.propTypes = {
	count: PropTypes.integer
};

export { Counter as default };
