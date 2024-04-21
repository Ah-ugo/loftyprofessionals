import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Accelerate your growth with focused modules, interactive sessions, and adaptive techniques. Stay ahead, enhance career agility, and boost confidence. Let’s elevate your career together!",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "At Lofty, we’re more than consultants; we’re your unwavering support system. Choose Lofty because uninterrupted progress is our commitment. Let’s elevate your career together!",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Our certifications aren’t just pieces of paper—they’re industry gold. When you earn a Lofty certification, you’re gaining recognition from employers, peers, and industry leaders.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section id="feature">
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
