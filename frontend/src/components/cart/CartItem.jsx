import React from "react";
import { IconButton, Chip } from "@mui/material";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

function CartItem() {
  return (
    <>
      <div className="lg:flex items-center">
        <div>
          <img
            src="https://res.cloudinary.com/dmb6bzbfi/image/upload/v1733369870/pillars/ektq1enls3jhawc7n7bu.jpg"
            alt="product"
            className="w-[5rem] h-[5rem] object-cover"
          />
        </div>
        <div className="flex items-center justify-between lg:w-[70%]">
          <div className="space-y-1 lg:space-y-3 w-full">
            <p>Bryani</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1">
                <IconButton>
                  <RemoveCircleOutlinedIcon />
                </IconButton>
                <div className="w-5 h-5 text-xs flex items-center justify-center">
                  {5}
                </div>
                <IconButton>
                  <AddCircleOutlinedIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <p>$123</p>
        </div>
      </div>
      <div className="pt-3 space-x-2">
        {[1, 1].map((item, id) => (
          <Chip label={"bread"} key={id} />
        ))}
      </div>
    </>
  );
}

export default CartItem;
