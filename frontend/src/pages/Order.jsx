import React from 'react'
import styled from "styled-components";
import { tablet } from "../Responsive";
import Header from "../components/Header";
import Footer from "../components/Footer"

const Wrapper = styled.div`
  margin: 0;
  padding: 10px;
  min-height: 50vh;
`

function Order() {
    return (
        <>
            <Header />

            <Wrapper>
                <h2>Order Page</h2>
            </Wrapper>

            <Footer />
        </>
    )
}

export default Order