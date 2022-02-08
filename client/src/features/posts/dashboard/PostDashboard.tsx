import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Post } from "../../../app/models/post";

interface Props {
  posts: Post[];
}

export default function PostDashboard({ posts }: Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <List>
          <ul>
            {posts.map((post) => (
              <List.Item key={post.id}>
                {post.description} - Rating: {post.rating}/10
              </List.Item>
            ))}
          </ul>
        </List>
      </Grid.Column>
    </Grid>
  );
}
