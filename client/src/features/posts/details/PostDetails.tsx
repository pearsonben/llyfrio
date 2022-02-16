import { createReadStream } from "fs";
import React from "react";
import { Button, Card, Icon } from "semantic-ui-react";
import { Post } from "../../../app/models/post";

interface Props {
  post: Post;
  cancelSelectPost: () => void;
  openForm: (id: string) => void;
}

export default function PostDetails({
  post,
  cancelSelectPost,
  openForm,
}: Props) {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{post.description}</Card.Header>
        <Card.Meta>
          <span className="date">{post.date}</span>
        </Card.Meta>
        <Card.Description>{post.rating}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          onClick={() => openForm(post.id)}
          basic
          color="blue"
          content="Edit"
        />
        <Button onClick={cancelSelectPost} color="grey" content="Cancel" />
      </Card.Content>
    </Card>
  );
}
