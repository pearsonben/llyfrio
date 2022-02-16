import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

interface Props {
  openForm: () => void;
}

export default function NavBar({ openForm }: Props) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="/logo192.png"
            alt="logo"
            style={{ marginRight: "0px" }}
          ></img>
        </Menu.Item>
        <Menu.Item name="llyfr.io" />
        <Menu.Item>
          <Button onClick={openForm} positive content="Submit Post" />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
