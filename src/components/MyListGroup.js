import React, { useContext } from "react";
import AllSuperContext from "../context/AllSuperContext";

import { ListGroup, Container, Form } from "react-bootstrap";
const MyListGroup = () => {
  let { setSearchValue, searchValue } = useContext(AllSuperContext);

  let fullData = document.querySelectorAll(".full-data");
  fullData.forEach((v) => {
    console.log(v.textContent);
  });


  return (
    <>
      <Container fluid key={searchValue.id}>
        <ListGroup>
          <ListGroup.Item
            style={{ display: "flex", justifyContent: "space-between" }}
            className="full-data"
          >
            Avenger End Game{" "}
            <Form.Check type={"checkbox"} id="" label={`default checkbox`} />
          </ListGroup.Item>
          <ListGroup.Item
            style={{ display: "flex", justifyContent: "space-between" }}
            className="full-data"
          >
            Spider Man{" "}
            <Form.Check type={"checkbox"} id="" label={`default checkbox`} />
          </ListGroup.Item>
          <ListGroup.Item
            style={{ display: "flex", justifyContent: "space-between" }}
            className="full-data"
          >
            Iron Man{" "}
            <Form.Check type={"checkbox"} id="" label={`default checkbox`} />
          </ListGroup.Item>
          <ListGroup.Item
            style={{ display: "flex", justifyContent: "space-between" }}
            className="full-data"
          >
            Captain America{" "}
            <Form.Check type={"checkbox"} id="" label={`default checkbox`} />
          </ListGroup.Item>
          <ListGroup.Item
            style={{ display: "flex", justifyContent: "space-between" }}
            className="full-data"
          >
            Iron Man{" "}
            <Form.Check type={"checkbox"} id="" label={`default checkbox`} />
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  );
};

export default MyListGroup;
