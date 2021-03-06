import React from "react";
import { Flex,Heading,Text,Spinner } from "@chakra-ui/react";
import { getPosts } from "../api/post";

export const Home = () => {
    const [state, setState] = React.useState({
        loading: false,
        posts: [],
        error: null
    });

    const { loading, posts, error } = state;

    React.useEffect(() => {
        const doFetchPosts = async () => {
            setState({ loading: true, posts: [], error: null })
            try {
                const { data } = await getPosts();
                setState({ loading: false, posts: data, error: null });
            } catch (e) {
                setState({ loading: false, posts: [], error: e.message })
            }
        };
        doFetchPosts();
    }, []);

    if (loading) {
        return <Spinner size="xl"/>
    }
    else if (error) {
        return <Text>{error}</Text>
    }
    return (<Flex direction="column" p="4rem">
        <Heading as="h1" mb="2rem">
            Publicaciones recientes
        </Heading>
        {posts.map((post) => (
        <Flex key={post.id} direction="column" p="2rem" m="0.5rem" borderRadius="8px" border="1px solid #c2c2c2">
            <Heading as="h3" size="md">
                {post.title}
            </Heading>
            <Text>{post.body}</Text>
        </Flex>
    ))}
    </Flex>
    );
};