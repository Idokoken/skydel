import React, { Component } from "react";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import { tablet } from "../Responsive";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Wrapper = styled.div`
      min-height: 50vh;
      font-family: var(--primary-font);
      background: var(--bg-color);

      .img-container {
        width: 100%;
        height: 30vh;
        position: relative;
        ${tablet({ height: "50vh" })}
      }
      img {
        width: 100%;
        height: 100%;
        margin-top: 0;
        margin-bottom: 0;
        object-fit: cover;
      }
      .office-name {
        font-weight: 600;
        font-size: 24px;
        color: rgba(30, 51, 187, 1);
        position: absolute;
        top: 60%;
        left: 5%;
        /* transform: translate(-50%, -50%); */
        ${tablet({ top: "70%" })}
      }
      .office-name p {
        margin: 0;
        border-radius: 1px solid blue;
      }
      h3 {
        color: rgba(30, 51, 187, 1);
      }
      .content {
        padding: 0 20px;
        ${tablet({ padding: "0 30px" })}
      }
      .content p {
        font-size: 20px;
        font-family: "Times New Roman", Times, serif;
      }
      .mission p {
      }
    `;

class About extends Component {
  render() {

    return (
      <>
        <Header />
        <Wrapper>
          <div className="about">
            <div className="img-container">
              <img src="/images/office.jpg" alt="office" />
              <div className="office-name">
                <p>Bways Hq</p>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
            <div className="content mt-4">
              <h3 className="pb-2 pt-0">About Us</h3>
              <p className="mt-2">
                Founded in 2022, Bways is a national leading direct-to-consumer
                online shop, providing well-selected products that are highly
                cost-effective to its registered users, with a national reach in
                all state of the federation and Abuja. In 2022. Bways devotes to
                improving customer service, including establishing a logistics and
                fulfillment system, to provide a 7/24 professional service to
                customers and all Migerians in general.
              </p>
              <p className="mt-3">
                Bways is among Nigeria's largest online shop and our mission is to
                become the engine of commerce and trade in Nigeria and Africa at
                large. We serve a retail customer base that continues to grow
                exponentially, offering products that span various categories
                including Phones, Computers, Clothing, Shoes, Home Appliances,
                Baby Products, personal care and much more. Our range of services
                are designed to ensure optimum levels of convenience and customer
                satisfaction with the retail process; these services include our
                lowest price guarantee, 7-day free return policy, order
                delivery-tracking, dedicated customer service support and many
                other premium services.
              </p>
              <p className="mt-3">
                As we continue to expand the shop, our scope of offerings will
                increase in variety, simplicity and convenience; join us and enjoy
                the increasing benefits. We are highly customer-centric and are
                committed towards finding innovative ways of improving our
                customers' shopping experience with us; so give us some feedback
                on help@newic.com. For any press related questions, kindly send us
                an email at @Bwaysng.com. Thank you and we hope you enjoy your
                experience with us.
              </p>
              <div className="mission">
                <h3 className="text-center my-3">Mission and Vision</h3>
                <p>
                  To deliver good, qaulity, durable, standard and affortable
                  products to every State in Nigeria and federal capital tertiary
                </p>
              </div>
            </div>
          </div>
          <Newsletter />
        </Wrapper>
        <Footer />
      </>
    );
  }
}

export default About;
