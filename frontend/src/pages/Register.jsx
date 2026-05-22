import React from "react";
import styled from "styled-components";
import { tablet } from "../Responsive";
import { Link } from "react-router-dom";
import brand from "../assets/brand.png"

const Wrapper = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;

  .content {
    background-image: url("/assets/wall.jpg");
    min-height: 400px;
    width: 70%;
    padding: 20px;
    margin: 30px;
    border-radius: 20px;
    color: white;
    ${tablet({ width: "50%" })}
  }
  .head {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }

  img {
    border: 2px solid black;
    border-radius: 50%;
  }
  label,
  h3 {
    font-weight: 600;
    color: white;
  }
  input {
    border-radius: 20px;
  }
  button {
    width: 100%;
    border-radius: 20px;
  }
`;

function Register() {
  return (
    <Wrapper>
      <div className="content">
        <div className="head">
          <img src={brand} alt="brand" width="50" height="50" />
          <h3 className="my-2">Register</h3>
        </div>
        <form>
          <div className="form-group">
            <label className="my-2">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="enter username"
            />
          </div>
          <div className="form-group">
            <label className="my-2">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="enter email"
            />
          </div>
          <div className="form-group">
            <label className="my-2">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="enter password"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary mt-5">Submit</button>
          </div>
        </form>

        <p className="my-3">
          Already a member?{" "}
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <span style={{ fontStyle: "italic", color: "yellow" }}>login</span>
          </Link>
        </p>
      </div>
    </Wrapper>
  );
}

export default Register;
