import React, { useContext } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import { AddReaction } from "@mui/icons-material";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const menu = [
  { title: "Orders", icon: <ShoppingBagIcon /> },
  { title: "Favorites", icon: <FavoriteIcon /> },
  { title: "Address", icon: <AddReaction /> },
  { title: "Payment", icon: <AccountBalanceWalletIcon /> },
  { title: "Notification", icon: <NotificationsActiveIcon /> },
  { title: "Events", icon: <EventIcon /> },
  { title: "Logout", icon: <LogoutIcon /> },
];

function ProfileNavigation({ open, handleClose }) {
  const isSmallScreen = useMediaQuery("(max-width: 900)");
  const navigate = useNavigate();
  const { logoutUser } = useContext(ShopContext);

  const handleNavigate = (item) => {
    if (item.title === "Logout") {
      logoutUser();
      navigate("/");
    } else {
      navigate(`/my-profile/${item.title.toLowerCase()}`);
    }
  };

  return (
    <div>
      <Drawer
        sx={{ zIndex: -1, position: "sticky" }}
        anchor="left"
        onClose={handleClose}
        variant={isSmallScreen ? "temporary" : "permanent"}
        open={isSmallScreen ? open : true}
      >
        <div className="w-[50vw] lg:w-[20vw] h-[90vh] flex flex-col justify-center text-xl gap-6 pt-20">
          {menu.map((item, i) => (
            <div key={i}>
              <div
                onClick={() => handleNavigate(item)}
                className="px-5 flex items-center space-x-5 cursor-pointer"
                key={i}
              >
                {item.icon}
                <span>{item.title}</span>
              </div>
              {i !== menu.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
}

export default ProfileNavigation;
