import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
        
            <img src={"https://img.freepik.com/premium-vector/letter-n-logo-modern-stylish-design_196200-1669.jpg"} alt="Logo" style={{height:"60px",width:"60px", borderRadius:"5px"}}/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
        
            <div className="social-icon">
            <p>Contact Us :- +919067724023</p>
            <p>Gmail :- nileshgulhane2001@gmail.com</p>
            <p>Wardha, Maharashtra, India 442201</p>
              <a href="https://www.linkedin.com/in/nilesh-gulhane-2480952b5/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://m.facebook.com/profile.php?id=100043688539948&name=xhp_nt__fb__action__open_user"><img src={navIcon2} alt="Icon" /></a>
              <a href=""><img src={navIcon3} alt="Icon" /></a>
            </div>  
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
