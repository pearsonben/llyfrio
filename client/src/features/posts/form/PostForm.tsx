import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default function PostForm() {
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
        <Button floated="right" type="button" content="Cancel"></Button>
      </Form>
    </Segment>
  );
}
