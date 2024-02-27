import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../App";
import Child from "./Child";

function Dashboard() {
	const [childData, setChildData] = useState();
	const { userData } = useContext(MyContext);
	const { id } = useParams();

	const user = userData && userData[id];
	const userDetail = [user];

	function getData(data) {
		console.log(data);
		setChildData(data);
	}

	return (
		<>
			<div>User Dashboard</div>
			<div>Child Data : {childData}</div>
			<ul>
				{userDetail?.map((user, index) => (
					<React.Fragment key={index}>
						{/* Use Fragment to avoid extra DOM nodes */}
						<li>{user?.name}</li>
						<li>{user?.email}</li>
						<li>{user?.phone}</li>
					</React.Fragment>
				))}
			</ul>
			<Child getData={getData} /> {/* Pass getChildDataS as a prop */}
		</>
	);
}

export default Dashboard;
