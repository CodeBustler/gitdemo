import React, { useState } from "react";

function Child({ getData }) {
	const [inputData, setInputData] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		getData(inputData);
	}
	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<input
				type="text"
				placeholder="enter name"
				value={inputData}
				onChange={(e) => setInputData(e.target.value)}
			/>
			<button type="submit">Submit</button>
		</form>
	);
}

export default Child;
