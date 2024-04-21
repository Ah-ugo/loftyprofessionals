import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Logo from "../../assests/images/logo.png"


import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About US",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },

  {
    display: "Blog",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },

  {
    display: "Purchases Guide",
    url: "#",
  },

  {
    display: "Terms of Service",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
          <div className=" d-flex align-items-center gap-1" style={{overflow: "hidden", scrollbarWidth: "none", overflowY: "hidden", width: "100%"}}>
              {/* <i class="ri-pantone-line"></i> Learners. */}
              <img src={Logo} width={70} height={70} className="d-block d-lg-none d-xl-none d-md-none"/>
              <h1 className="w-20" style={{fontSize: 20, display: "flex",overflowY: "hidden"}}>Lofty Professional and <br className="d-block d-lg-none d-md-none d-xl-none"/>Career Development<br className="d-block d-lg-none d-md-none d-xl-none"/> Consulting Ltd</h1>
            </div>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Address 1: MFM second gate 
MCC road Uratta Owerri Imo State</p>
<p>Address 2: 12 Ose Oluwa  street Igbopa off Abule eko Ijede road
Lagos</p>
            <p> Phone 1: 08038962147 </p>
            <p> Phone 2: 08038864474 </p>
            {/* <p> Phone 3: 09019203703 </p> */}
            <p>Email: loftyprofessionals@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
