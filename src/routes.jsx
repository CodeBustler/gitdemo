import { createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";

export const routes = createRoutesFromElements(
	<Route>
		<Route path="/" element={<RootLayout />}>
			<Route path="" element={<HomePage />} />
			<Route path="/dashboard/:id" element={<Dashboard />} />
		</Route>
	</Route>,
);
