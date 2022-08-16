import React, { useState } from "react";

import { Form, Button, Container } from "react-bootstrap";

const MyForm = () => {
  const [text, setText] = useState("");

  let handleChange = (e) => {
    let myLength = e.target.value;

    if (myLength.length <= 8) {
      setText((e.target.name = e.target.value));
      //   console.log(myLength.length);
    }else{
        alert("Length exceed")
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>TextArea</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={text}
              type="text"
              placeholder="Enter Text"
              name="mytext"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button onClick={handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default MyForm;
