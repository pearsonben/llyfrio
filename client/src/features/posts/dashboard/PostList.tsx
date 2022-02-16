import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Post } from "../../../app/models/post";

interface Props {
  posts: Post[];
  selectPost: (id: string) => void;
}

export default function PostList({ posts, selectPost }: Props) {
  return (
    <Segment>
      <Item.Group divided>
        {posts.map((post) => (
          <Item key={post.id}>
            <Item.Content>
              <Item.Header as="a">{post.description}</Item.Header>
              <Item.Meta>{post.date}</Item.Meta>
              <Item.Description>
                <div>{post.rating}</div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => selectPost(post.id)}
                  floated="right"
                  content="view"
                  color="blue"
                />
                <Label basic content={post.rating}></Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
