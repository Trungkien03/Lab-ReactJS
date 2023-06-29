import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import {
  Icon,
  Container,
  TextInput,
  Select,
  Textarea,
  Button,
} from "react-materialize";

export const Contact = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <h1>Contact us </h1>
        <TextInput id="TextInput-1" label="Your Name" />
        <TextInput id="TextInput-2" label="Your Phone" />
        <TextInput email id="TextInput-3" label="Email" validate />
        <Select
          id="Select-1"
          multiple={false}
          onChange={function noRefCheck() {}}
          value=""
        >
          <option disabled value="">
            Choose Your Country
          </option>
          <option value="1">Viet Nam</option>
          <option value="2">America</option>
          <option value="3">Japan</option>
        </Select>
        <Textarea
          icon={<Icon>mode_edit</Icon>}
          id="Textarea-1"
          label="Message"
        />
        <Button variant="primary" onClick={handleShow}>
          Submit
          <Icon right>send</Icon>
        </Button>
      </Container>
    </>
  );
};
