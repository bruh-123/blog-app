import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Profile, Header, SignIn, SignUp, Layout } from "./";
import { UserContext } from "../context/user";

export const App = () => {
	const [user,setUser]=React.useState(null)
	return (
		<UserContext.Provider value={{ user, setUser }}>
			<Layout>
				<Router>
					<Switch>
						<Route path="/signin">
							<SignIn />
						</Route>
						<Route path="/signup">
							<SignUp />
						</Route>
						<Route path="/profile">
							<Header />
							<Profile />
						</Route>
						<Route path="/" exact>
							<Header />
							<Home />
						</Route>
					</Switch>
				</Router>
			</Layout>
		</UserContext.Provider>
	);
};
