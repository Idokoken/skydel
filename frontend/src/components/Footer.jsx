  import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "../Responsive";
import brand from '../assets/brand.png'

const Wrapper = styled.footer`
  background-color: black;
  padding: 0;
  margin: 0;
  color: rgba(255, 255, 255, 0.8);

  .footer {
    width: 100vw;
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
  }

  .footer .item {
    flex: 100%;
    ${tablet({ flex: "25%" })}
  }
  .footer .item h3 {
    color: rgba(30, 51, 187, 1);
    margin-bottom: 15px;
  }
  .footer .item a{
    display: block;
    text-decoration: none;
    color: inherit;
    margin-bottom: 10px;
    font-size: 18px;  
  }
  .footer .item a:hover{
     font-weight: 700;
     color: rgba(30, 51, 187, 0.6);
  }
  .rule {
    border: 4px solid white;
  }
  .copywite {
    text-align: center;
    padding-bottom: 20px;
  }
  .brand-img{
       width: 30px;
       height: 30px;
  }
  
  .brand {
    align-self: flex-start;
  }
  .icon-header {
    display: flex;
  }
  .icons-container{
    display: flex;
  }
  .icons-container span{
    border: 2px solid white;
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    padding: 2px;
    margin-right: 20px;
    border-radius: 10px;
  }
  .icon {

  }
  .mobile{
     display: flex;
  }
  .mobile a{
     height: 30px;
     width: 90px; 
  }
  .mobile-img {
    border-radius: 5px;
    height: 100%;
    width: 100%; 
    boject-fit: contain;
  }
  .mobile-container p {
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <div className="footer">
        <div className="item">
          <h3>SERVICES</h3>
          <Link to="/">Accessibility</Link>
          <Link to="/">Disclamers</Link>
          <Link to="/">Sitemap</Link>
          <Link to="/">Cookies </Link>
        </div>
        <div className="item">
          <h3>RESOURCES</h3>
          <Link to="/">Blog</Link>
          <Link to="/">Online training</Link>
          <Link to="/">National Resource Guide</Link>
        </div>
        <div className="item">
          <h3>OUR COMPANY</h3>
          <Link to="/contact-us">Contact</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/privacy-policy">Privacy policy</Link>
          <Link to="/terms-and-conditions">User agreement</Link>

        </div>
        <div className="item brand">
          <div className="icon-header">
            <img src={brand} alt="brand" className="brand-img" />{" "}
            <h3 className="ms-2">Skydel</h3>
          </div>
          <h4>Follow Us</h4>
          <div className="icons-container">
            <span><i className="fa-brands fa-facebook icon"></i></span>
            <span><i className="fa-solid fa-x icon"></i></span>
            <span><i className="fa-brands fa-instagram icon"></i></span>
            <span><i className="fa-brands fa-youtube icon"></i></span>
          </div>
          <div className="mobile-container mt-4">
            <p>Mobile</p>
            <div className="mobile">
              <Link to="/" className="me-3">
                <img
                  src="/images/apple.png"
                  className="mobile-img"
                  alt="mobile"
                />
              </Link>
              <Link to="/">
                <img
                  src="/images/google.png"
                  className="mobile-img"
                  alt="mobile"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="rule" />
      <p className="copywite">
        All Right reversed &copy; Skydel {new Date().getFullYear()}

      </p>
    </Wrapper>
  );
}

export default Footer;
