import { Flex } from "@chakra-ui/react";
import { Footer } from "./Footer";

export const Layout = ({ children }) => (
	<Flex direction="column" minH="100vh">
		<Flex justify="center" align="center" direction="column">
			{children}
		</Flex>
		<Footer />
	</Flex>
);
