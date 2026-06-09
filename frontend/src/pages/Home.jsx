import React from "react";
import Products from "../components/Products";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import MultiItemSliders from "../components/MultiItemSliders";
import RestaurantCard from "../components/restaurant/RestaurantCard";

const Wrapper = styled.div`
  // min-height: 60vh;
  font-family: var(--primary-font);

  .banner {
    background: url("/images/banner.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 90vh;

    .cover {
      width: 100vw;
      height: 90vh;
      color: black;
      opacity: 0.4;
    }
  }
`;

function Home() {
  const retaurants = [1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <>
      <Header />

      <Wrapper>
        <section className="banner z-50 relative flex flex-col justify-center items-center">
          <div className="w-[50vw] z-10 text-center">
            <p className="text-2xl lg:text-6xl font-bold z-10 py-5">
              Skydel Food & and Parcel
            </p>
            <p className="text-gray-300 text-xl z-10 lg:text-4xl">
              Taste the Convinence: Your Meal Delivered Fresh and Fast
            </p>
          </div>
          <div className="cover absolute top-0 right-0 left-0"></div>
          <div className="fadout"></div>
        </section>

        <section className="topmeal-section p-10 lg:py-10 lg:px-20">
          <p className="text-2xl text-gray-400 font-semibold py-3 pb-10">
            Top Meals
          </p>
          <MultiItemSliders />
        </section>

        <section className="px-5 lg:px-20 pt-20">
          <h1 className="text-2xl text-gray-400 font-semibold pb-8">
            Order from our handpicked Favourites
          </h1>
          <div className="flex flex-wrap justify-around items-center gap-5">
            {retaurants.map((item, i) => (
              <RestaurantCard key={i} />
            ))}
          </div>
        </section>
      </Wrapper>

      <Footer />
    </>
  );
}

export default Home;
