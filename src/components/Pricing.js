import React from "react";
import { Col, Container, Row, Card } from "./Unity/Layout";

export const Pricing = () => {
  return (
    <Container>
      <h1>Pricing</h1>
      <hr></hr>
      <Row>
        <Col>
          <Card>
            <h2>Personal</h2>
            <p>from $99</p>
            <ul>
              <li>3 page site</li>
              <li>Branding</li>
              <li></li>
              <li></li>
            </ul>
          </Card>
        </Col>

        <Col>
          <Card>
            <h2>Small business</h2>
            <p>from $399</p>
            <ul>
              <li>5 page site</li>
              <li>Branding</li>
              <li>Advertising</li>
              <li>Google Integration</li>
            </ul>
          </Card>
        </Col>

        <Col>
          <Card>
            <h2>Custom</h2>
            <p>Book a free consultation</p>
            <ul>
              <li>5 page site</li>
              <li>Branding</li>
              <li>Advertising</li>
              <li>Google Integration</li>
              <li>Blogging</li>
              <li>Ecommerce</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
