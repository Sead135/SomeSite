import React from "react";
import Layout from "../components/Layout";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Link,
} from "@mui/material";
import classes from "../utils/classes";
import NextLink from "next/link";
import { useSelector } from "react-redux";
import { wrapper } from "../store";
import { fetchPost } from "../store/actions/posts";
import { loadTheme } from "../store/actions/theme";

const Home = () => {
  const { posts, error } = useSelector((state) => state.posts);
  if (error) {
    return <Typography>{error}</Typography>;
  }
  return (
    <Layout title="Home Page">
      <Grid container spacing={2} alignItems="stretch">
        {posts &&
          posts.map((post) => (
            <Grid item key={post.id} xs={4}>
              <Card variant="outlined" sx={classes.card}>
                <NextLink href={`/posts/${post.id}`} passHref>
                  <Link underline="none" component="a">
                    <CardActionArea sx={classes.cardAction}>
                      <CardContent>
                        <Typography color="neutral">{post.title}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </NextLink>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      await store.dispatch(loadTheme(req.cookies.theme));
      await store.dispatch(fetchPost());
    }
);

export default Home;
