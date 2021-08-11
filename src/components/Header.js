import React from "react";
import { UserContext } from "../context/user";
import { Flex, Avatar, Button, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export const Header = () => {
	const history = useHistory();
	const { user } = React.useContext(UserContext);
	console.log("userContextData", user);

	const name = user && `${user.firstName} ${user.lastName}`;

	const handleNavigateHome = () => {
		history.push("/");
	};
	const handleNavigateProfile = () => {
		history.push("/profile");
	};
	return (
		<Flex
			minH="5rem"
			w="full"
			bg="orange.200"
			direction="row"
			justify="space-between"
			align="center"
			p="1rem 3rem"
		>
			<Avatar
				name="Dan Abrahmov"
				src="https://bit.ly/dan-abramov"
				onClick={handleNavigateHome}
			/>
			<Flex direction="row">
				<Button
					size="lg"
					colorScheme="teal"
					variant="ghost"
					onClick={handleNavigateProfile}
				>
					<Text mr="1rem">{name || "Profile"}</Text>
					<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
				</Button>
			</Flex>
		</Flex>
	);
};
