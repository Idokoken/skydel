import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { tablet } from "../Responsive";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Wrapper = styled.div`
      min-height: 50vh;
      font-family: var(--primary-font);
      background: var(--bg-color);

      .tel {
        display: flex;
        align-items: center;
      }
      .contact {
        height: 15vh;
        background-image: url("/images/contact.jpg");
        margin: 0;
        padding: 20px;
        ${tablet({ height: "20vh" })}
      }
      h4 {
        color: rgba(30, 51, 187, 1);
      }
      .address {
        margin: 20px;
        font-weight: 500;
        font-family: "Times New Roman", Times, serif;
        font-size: 20px;
      }
      .address h2 {
        color: rgba(30, 51, 187, 1);
      }
      .form {
        background-image: url("/assets/form.jpg");
        padding: 30px;
        border-radius: 10px;
        color: rgba(30, 51, 187, 1);
      }
      .form label {
        font-size: 20px;
        font-weight: 500;
      }
    `;

class Contact extends Component {
  render() {

    return (
      <>
        <Header />
        <Wrapper>
          <div className="contact">
            <h4>
              <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
                Home
              </Link>{" "}
              -- Contact
            </h4>
          </div>
          <div className="address">
            <h2>Office Address</h2>
            <p>No 14 Gida Steeet Lekki Phase One</p>
            <p>Lagos, Nigeria</p>
            <div className="tel">
              <Link
                to="tel:#"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontSize: "1rem",
                }}
              >
                <p>Tel: +2349037779547</p>
              </Link>
            </div>
            <p>Email: bwayng@yahoo.com</p>
          </div>
          <div className="container py-5">
            <div className="form">
              <h3 className="text-center mb-2">Send Us your Enquiry</h3>
              <form method="post" action="/contact">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" name="name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    cols="20"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </Wrapper>
        <Footer />
      </>
    );
  }
}

export default Contact;
