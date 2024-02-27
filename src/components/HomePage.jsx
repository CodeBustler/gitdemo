import React, { useContext, useId } from "react";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";

function HomePage() {
	const { userData } = useContext(MyContext);
	const navigate = useNavigate();
	return (
		<div>
			HomePage
			<ul>
				{userData.map((user, index) => (
					<li
						key={index}
						style={{
							textAlign: "left",
							marginBottom: "10px",
							listStyleType: "none",
							cursor: "pointer",
						}}
						onClick={() => navigate(`dashboard/${user.id}`)}
					>
						{user.name}
					</li>
				))}
			</ul>
		</div>
	);
}

export default HomePage;
