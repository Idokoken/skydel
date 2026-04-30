import React from "react";
import Products from "../components/Products";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import Hero from "../components/Hero";


const Wrapper = styled.div`
  // min-height: 60vh;
  font-family: var(--primary-font);
  
`

function Home() {
  return (
    <>
      <Header />
      <Wrapper>
        <Hero />
      
        {/* <Products /> */}
        
      </Wrapper>
      <Footer />
    </>
  );
}

export default Home;
