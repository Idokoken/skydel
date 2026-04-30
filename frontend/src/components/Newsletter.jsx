import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #dee6e8;
  background-image: url("/images/letter_bg.jpg");
  background-size: cover;
  color: white;

  h4 {
    margin-bottom: 20px;
    font-family: "Times New Roman", Times, serif;
    /* margin-top: 5px; */
  }
  div {
    display: flex;
  }
  input {
    padding: 5px;
    border: none;
    border-radius: 20px 0 0 20px;
  }
  button {
    padding: 5px;
    background: teal;
    color: white;
    border: none;
    border-radius: 0 20px 20px 0;
  }
`;

function Newsletter() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <div className="text-center my-3">
        <p className="text-2xl font-medium text-gray-800 ">Subscribe Now and Get 20% OFF </p>
        <p className="text-gray-400 mt-3 "> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eum, itaque.
        </p>
        <form onSubmit={handleSubmit} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
          <input className="w-full sm:flex-1 outline-none" type="email" name="email" id="email"
            placeholder="Enter Your Email" required />
          <button type="submit" className="bg-black text-white text-xs px-10 py-4">SUBSCRIBE</button>
        </form>
      </div>
    </>
  )
}

export default Newsletter;
