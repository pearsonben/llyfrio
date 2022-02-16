import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Post } from "../../../app/models/post";

interface Props {
  post: Post;
}

export default function PostDetails({ post }: Props) {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{post.description}</Card.Header>
        <Card.Meta>
          <span className="date">{post.date}</span>
        </Card.Meta>
        <Card.Description>{post.rating}</Card.Description>
      </Card.Content>
    </Card>
  );
}
