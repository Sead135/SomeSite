import React from 'react';
import Layout from "../../components/Layout";
import {Box, Button, Card, CardContent, Link, Typography} from "@mui/material";
import NextLink from "next/link";

const Post = ({post}) => {
    return (
        <Layout>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%" margin="10px 0">
                <NextLink href="/" passHref>
                    <Link variant="button">
                        Назад
                    </Link>
                </NextLink>
                <Card sx={{maxWidth: 600}}>
                    <CardContent>
                        <Typography variant="h3">{post.title}</Typography>
                        <Typography variant="p">{post.body}</Typography>
                    </CardContent>
                </Card>
            </Box>
        </Layout>
    );
};

export const getServerSideProps = async (context) => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
    const posts = await data.json()
    const {params} = context
    const {id} = params
    const findPost = posts.find(post => post.id === Number(id))

    return {
        props: {
            post: findPost
        }
    }
}

export default Post;