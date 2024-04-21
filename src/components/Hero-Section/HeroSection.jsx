import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Welcome to <br /> Loft professional and <br /> career development consulting LTD
              </h2>
              <p className="mb-5">
              Discover how our tailored solutions and expert guidance can empower your career journey. <br /> Our team is dedicated to helping you achieve your professional goals, whether through skill development, strategic planning, e.t.c.
            <br/>Let's elevate your career together!
              </p>
            </div>
            <div className="search" style={{width: "100%"}}>
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
