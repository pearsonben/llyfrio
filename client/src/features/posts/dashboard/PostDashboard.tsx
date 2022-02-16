import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Post } from "../../../app/models/post";
import PostDetails from "../details/PostDetails";
import PostForm from "../form/PostForm";
import PostList from "./PostList";

interface Props {
  posts: Post[];
}

export default function PostDashboard({ posts }: Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <PostList posts={posts} />
      </Grid.Column>
      <Grid.Column width="6">
        {posts.map((post) => (
          <PostDetails key={post.id} post={post} />
        ))}
        <PostForm />
      </Grid.Column>
    </Grid>
  );
}
