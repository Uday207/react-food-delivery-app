import React from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";
import { FaFacebookF, FaGithub, FaYoutube, FaLinkedin, FaPaperPlane } from "react-icons/fa";

import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer py-2" style={{ backgroundColor: "#ffe6e6", fontSize: "0.8rem" }}>
      <Container>
        <Row>
          {/* Logo & Description */}
          <Col lg="3" md="6" className="mb-2">
            <div className="footer__logo d-flex align-items-center gap-2 mb-1">
              <img src={logo} alt="logo" width={30} height={30} />
              <h6 className="fw-bold mb-0">Tasty Treat</h6>
            </div>
            <p className="text-muted small mb-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur accusamus.
            </p>
          </Col>

          {/* Delivery Time */}
          <Col lg="3" md="6" className="mb-2">
            <h6 className="fw-bold mb-1">Delivery Time</h6>
            <p className="mb-1 fw-semibold small">Sunday - Thursday</p>
            <p className="text-muted small mb-1">10:00am - 11:00pm</p>
            <p className="mb-1 fw-semibold small">Friday - Saturday</p>
            <p className="text-muted small mb-1">Off day</p>
          </Col>

          {/* Contact */}
          <Col lg="3" md="6" className="mb-2">
            <h6 className="fw-bold mb-1">Contact</h6>
            <p className="text-muted small mb-1">ZindaBazar, Sylhet-3100, Bangladesh</p>
            <p className="fw-semibold mb-1 small">
              Phone: <span className="text-muted">01712345678</span>
            </p>
            <p className="fw-semibold small">
              Email: <span className="text-muted">example@gmail.com</span>
            </p>
          </Col>

          {/* Newsletter */}
          <Col lg="3" md="6" className="mb-2">
            <h6 className="fw-bold mb-1">Newsletter</h6>
            <p className="text-muted small mb-1">Subscribe to our newsletter</p>
            <div className="d-flex">
              <Input type="email" placeholder="Email" className="form-control form-control-sm me-2" />
              <Button color="danger" size="sm">
                <FaPaperPlane />
              </Button>
            </div>
          </Col>
        </Row>

        <hr className="my-2" />

        {/* Bottom Section */}
        <Row className="align-items-center">
          <Col md="6">
            <p className="text-danger small m-0">
              © 2025, made by Uday Kumar. All Rights Reserved.
            </p>
          </Col>
          <Col md="6" className="text-md-end mt-2 mt-md-0">
            <span className="me-2 fw-semibold small">Follow:</span>
            <a href="#" className="me-2 text-danger small"><FaFacebookF size={12} /></a>
            <a href="#" className="me-2 text-danger small"><FaGithub size={12} /></a>
            <a href="#" className="me-2 text-danger small"><FaYoutube size={12} /></a>
            <a href="#" className="text-danger small"><FaLinkedin size={12} /></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
