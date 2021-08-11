import React from "react";
import { Flex, Button, Text } from "@chakra-ui/react";
import { UserContext } from "../context/user";
import { useHistory } from "react-router-dom";

export const Profile = () => {
	const { user, setUser } = React.useContext(UserContext);
	const name = user && `${user.firstName} ${user.lastName}`;
	const history = useHistory();

	const handleSignOut = () => {
		setUser(null);
		history.push("/");
	};

	return (
		<Flex direction="column">
			<h1>Profile</h1>
			<Text>{name} </Text>
			<Button onClick={handleSignOut}>Sign Out</Button>
		</Flex>
	);
};
