import React from "react";
import styled from "styled-components";
import { tablet } from "../Responsive";
import Header from "../components/Header";
import Footer from "../components/Footer"

const Wrapper = styled.div`
  margin: 0;
  padding: 10px;
  min-height: 50vh;
  background-image: linear-gradient(
    to bottom right,
    rgba(92, 122, 169, 1),
    white,
    white,
    rgba(92, 122, 169, 1)
  );

  .content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    ${tablet({ flexDirection: "row" })}
  }
  .cart {
    flex: 100%;
    background: linear-gradient(159.48deg, #37ac97 26.53%, #ffffff 71.2%);
    /* box-shadow: 4px 4px 5px 5px rgba(0, 0, 0, 0.25); */
    color: black;
    ${tablet({ flex: "70%" })}
  }
  .cart-items {
    display: grid;
    grid-template-columns: 20% 30% 15% 15% 20%;
    place-content: center;
    padding: 5px;
    z-index: 10;
  }
  .summary {
    flex: 100%;
    background-color: aliceblue;
    padding: 20px;
    ${tablet({ flex: "30%", alignSelf: "center" })}
  }
  .img-container {
    height: 50px;
    width: 50px;
  }
  img {
    height: 100%;
    width: 100%;
    border: 2px solid #ffffff;
    border-radius: 10px;
  }
  .del {
    height: 40px;
    ${tablet({ marginRight: "20px" })}
  }
  input {
    width: 40px;
    height: 35px;
  }
  .cart p {
    align-self: center;
  }
  h2 {
    color: rgba(30, 51, 187, 1);
    margin: 20px 0;
  }
`;

function Cart(props) {
  // const productId = props.match.params.id;
  // const qty = props.location.search ? Number(props.location.split("=")[1]) : 1;

  return (
    <>
      <Header />

      <Wrapper>
        <h2>Cart screen</h2>
        {/* <p>
          ADD TO CART: productID: {productId} Qty: {qty}
        </p> */}
        <div className="content">
          <div className="cart">
            <div className="cart-items">
              <div className="img-container">
                <img src="images/items/project1.jpg" alt="product icon" />
              </div>
              <p className="name">Name of item</p>
              <input type="number" />
              <p className="price">$904</p>
              <button className="btn btn-danger del">Delete</button>
            </div>
            <div className="cart-items">
              <div className="img-container">
                <img src="/images/items/project2.jpg" alt="product icon" />
              </div>
              <p className="name">Name of item</p>
              <input type="number" />
              <p className="price">$904</p>
              <button className="btn btn-danger del">Delete</button>
            </div>
          </div>
          <div className="summary">
            <p className="total">
              Subtotal(9 items): $<span>180</span>
            </p>
            <button className="btn btn-info">Proceed to Checkout</button>
          </div>
        </div>
      </Wrapper>

      <Footer />
    </>
  );
}

export default Cart;
