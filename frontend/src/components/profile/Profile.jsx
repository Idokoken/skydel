import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProfileNavigation from "./ProfileNavigation";
import Header from "../Header";
import Address from "./Address";
import UserProfile from "./UserProfile";
import Favorites from "./Favorites";
import Events from "./Events";
import Orders from "./Orders";

function Profile() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      {/* <Header /> */}
      <div className="lg:flex justify-between">
        <div className="sticky h-[80vh] lg:w-[20%]">
          <ProfileNavigation open={openSidebar} />
        </div>
        <div className="lg:w-[80%]">
          <Routes>
            <Route path="/" element={<UserProfile />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/address" element={<Address />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Profile;
