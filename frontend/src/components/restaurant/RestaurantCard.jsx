import React from "react";
import { Card, IconButton, Chip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function RestaurantCard() {
  return (
    <Card className=" w-[18rem]">
      <div
        className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}
      >
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src="https://res.cloudinary.com/dmb6bzbfi/image/upload/v1700021207/allvoiceBlog/ta31rb8kjlw8fbpq8ymd.png"
          alt="restaurant"
        />
        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={true ? "sucess" : "error"}
          label={true ? "open" : "closed"}
        />
      </div>
      <div className="textPart p-4 lg:flex w-full justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-lg">Bento Fast Food</p>
          <p className="text-gray-500 text-sm">
            Craving it all, Dive into our global Fla..
          </p>
        </div>
        <div className="">
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  );
}

export default RestaurantCard;
