import React from "react";
import "../pages/About.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
const Portfolio = () => {
  const myImage = process.env.PUBLIC_URL + '/images/adminKien.jpg';
  return (
    <>
      <div className="about-section">
        <Container>
          <Row>
            <Col md={6} className="d-flex align-items-center">
              <div>
                <h1>About Me</h1>
                <p>
                  Hi, I'm Trung Kien. I'm a Web Developer based in
                  HCM City. I have 0 years of experience in
                  Coding. I'm passionate about Computer and I want to create a valuable App.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-center mt-5">
                <Image
                  src={myImage}
                  roundedCircle
                  className="rounded img-thumbnail img-fluid profile-picture"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <h1>My Project</h1>

        <Row>
          <Col md={6} lg={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.ctfassets.net/freurdme1ae3/2HCYLUixcXQ9kKNo3P6TYL/410c2da5e5ce204f2ff32e965a9187db/Website-Design-new.jpeg?w=2048&h=1152&q=80&fit=fill&f=face"
              />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>Description of Project 1.</Card.Text>
                <a href="#">View Project</a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.xenonstack.com/hubfs/xenonstack-reactjs-project-structure.png"
              />
              <Card.Body>
                <Card.Title>Project 2</Card.Title>
                <Card.Text>Description of Project 2.</Card.Text>
                <a href="#">View Project</a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://bairesdev.mo.cloudinary.net/blog/2023/06/Best-Types-of-Projects-to-Use-React.jpg?tx=w_3840,q_auto"
              />
              <Card.Body>
                <Card.Title>Project 3</Card.Title>
                <Card.Text>Description of Project 3.</Card.Text>
                <a href="#">View Project</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
