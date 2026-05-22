import React from "react";
import styled from "styled-components";
import { tablet } from "../Responsive";
import Header from "../components/Header";
import Footer from "../components/Footer"
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin: 0;
  padding: 10px;
  min-height: 50vh;
`

function ErrorPage() {
  return <>
    <Header />

    <Wrapper>
      <h2>Page Not Found</h2>
      <Link to="/">Back Home</Link >
    </Wrapper>

    <Footer />
  </>
}

export default ErrorPage;
