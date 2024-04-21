import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section id="chooseUs">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
              At Lofty Professional and Career Development Consulting Ltd, we are committed to empowering professionals like you to reach new heights in your career. Here’s why you should choose us:

              <ul>
                <li><b>Expertise and Insight:</b> Our team comprises seasoned professionals with extensive industry experience. We understand the nuances of various fields and can provide tailored guidance to help you excel.</li>
                <li><b>Cutting-Edge Training:</b> Stay ahead of the curve with our cutting-edge training programs. From industry-specific certifications to soft skills workshops, we equip you with the tools needed to thrive in today’s dynamic workplace.</li>
                <li><b>Career Mapping:</b> Let us be your compass. We’ll help you map out a strategic career plan, set achievable goals, and guide you toward success.</li>
              </ul>
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
