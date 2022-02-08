import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar() {
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
          <Button positive content="Submit Post" />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
