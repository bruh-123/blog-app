import { Flex, Button, Input, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { UserContext } from "../context/user";

export function SignIn() {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [error, setError] = React.useState(null);
	const [loading, setLoading] = React.useState(false);

	const { setUser } = React.useContext(UserContext);
	const history = useHistory();
	const { signin } = useAuth();

	const handleSubmit = (event) => {
		event.preventDefault();
		setError(null);
		setLoading(true);

		signin(email, password)
			.then((user) => {
				setError(null);
				setLoading(false);
				setUser(user);
				history.push("/");
			})
			.catch((e) => {
				setError(e);
				setLoading(false);
			});
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	return (
		<Flex
			as="form"
			onSubmit={handleSubmit}
			justify="center"
			alignItems="center"
			h="100vh"
		>
			<Flex
				w="400px"
				p="1rem"
				direction="column"
				bg="#eee"
				border="1px solid #c2c2c2"
				borderRadius="8px"
			>
				<Text mb="1rem">Welcome to Coderhood!</Text>
				<Heading mb="1rem">Signin</Heading>
				<Input onChange={handleEmailChange} mb="1rem" placeholder="Email" />
				<Input
					onChange={handlePasswordChange}
					mb="1rem"
					placeholder="Password"
				/>
				{error ? <Text color="red.400">{error}</Text> : null}
				<Button
					alignSelf="center"
					w="200px"
					colorScheme="blue"
					mt="20px"
					type="submit"
					disabled={loading}
					isLoading={loading}
				>
					Signin
				</Button>
				<Button
					mt="1rem"
					colorScheme="teal"
					variant="link"
					onClick={() => {
						history.push("/signup");
					}}
				>
					Are you new here? Signup!
				</Button>
			</Flex>
		</Flex>
	);
}
