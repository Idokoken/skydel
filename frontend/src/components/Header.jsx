import React, { useState, useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import brand from "../assets/brand.png";
import { Avatar, Badge, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "styled-components";
import { Person } from "@mui/icons-material";
import { ShopContext } from "../context/ShopContext";

const Wrapper = styled.div`
  font-family: var(--primary-font);
  background: var(--bg-color);

  li {
    list-style-type: none;
  }
`;

function Header() {
  const navigate = useNavigate();
  const { user } = useContext(ShopContext);

  const handeleAvatarClick = () => {
    if (user?.role === "ROLE_CUSTOMER") {
      navigate("/my-profile");
    } else {
      navigate("/admin/restaurant");
    }
  };

  return (
    <Wrapper>
      <header>
        <Box className="sticky top-0 px-5 z-50 py-[0.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
          <div className="flex items-center space-x-4">
            <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
              <Link to="/">
                <img
                  src={brand}
                  alt="brand-icon"
                  className="w-[50px] h-[50px]"
                />
              </Link>
              <li className="logo font-semibold text-gray-300 text-2xl">
                Skydel
              </li>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-10">
              <div className="">
                <IconButton>
                  <SearchIcon sx={{ fontSize: "1.5rem" }} />
                </IconButton>
              </div>
              <div className="">
                {user ? (
                  <Avatar
                    onClick={handeleAvatarClick}
                    sx={{ bgcolor: "white", color: "green" }}
                  >
                    {user?.fullName[0].toUpperCase()}
                  </Avatar>
                ) : (
                  <IconButton onClick={() => navigate("/account/login")}>
                    <Person />
                  </IconButton>
                )}
              </div>
              <div className="">
                <IconButton>
                  <Badge color="primary" badgeContent={3}>
                    <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                  </Badge>
                </IconButton>
              </div>
            </div>
          </div>
        </Box>
      </header>
    </Wrapper>
  );
}

export default Header;
