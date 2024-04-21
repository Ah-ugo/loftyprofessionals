import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/hospital-mgt.jpg";
import courseImg2 from "../../assests/images/kids-learning.png";
import courseImg3 from "../../assests/images/phonetics.jpg";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Hospital Administration/ Management",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "School Administration",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Phonetics and Phonology",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section id="courses">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-block d-md-flex d-lg-flex d-xl-flex justify-content-between align-items-center">
              <div className="course__top__left w-100 w-md-50 w-lg-50 w-xl-50">
                <h2>Our Popular Courses</h2>
                <p>
                At Lofty Consulting, we offer a diverse range of courses designed to elevate your professional journey. Our expert-led programs combine practical knowledge with industry insights, ensuring you stay ahead in your field. Here are some of our most sought-after courses:
                </p>
              </div>

              <div className="w-50 text-start text-md-end text-lg-end text-xl-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
