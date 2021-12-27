/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer4 b-t spacer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">
              Project By - <b className="font-bold">Group 3</b>
            </h5>
            <p>01 - Ranesh</p>
            <p>07 - Deepika</p>
            <p>09 - Akhilesh</p>
            <p>10 - Lokesh</p>
            <p>14 - Pranav</p>
            <p>25 - Shirisha</p>
            <p>47 - Katyayani</p>
            <p>18-46 - Mohan</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
