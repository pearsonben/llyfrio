import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Post } from "../../../app/models/post";

interface Props {
  post: Post | undefined;
  closeForm: () => void;
}

export default function PostForm({ post, closeForm }: Props) {
  return (
    <Segment clearing>
      <Form>
        <Form.Input placeholder="Title" />
        <Form.Input placeholder="Description" />
        <Form.Input placeholder="Rating" />
        <Button
          floated="right"
          positive
          type="submit"
          content="Submit"
        ></Button>
        <Button
          onClick={closeForm}
          floated="right"
          type="button"
          content="Cancel"
        ></Button>
      </Form>
    </Segment>
  );
}
