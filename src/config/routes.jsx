/** @format */

import Home from "../pages/home/Home";
import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";
import SinglePage from "../pages/single/SinglePage";

const routes = (props) => {
	// const { user } = props;
	return [
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/register",
			element: <RegisterPage />,
		},

		{
			path: "/login",
			element: <LoginPage />,
		},

		{
			path: "/blogs/:blogId",
			element: <SinglePage />,
		},
	];
};
export default routes;
