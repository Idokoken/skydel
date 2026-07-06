import React from "react";
import { Card, Button } from "@mui/material";

function OrderCard() {
  return (
    <Card className="flex justify-between items-center">
      <div className="flex items-center space-x-5">
        <img
          className="h-16 w-16"
          src="/images/items/project1.jpg"
          alt="order item"
        />
        <div className="">
          <p>Briani</p>
          <p>$300</p>
        </div>
      </div>
      <div>
        <Button className="cursor-not-allowed">Completed</Button>
      </div>
    </Card>
  );
}

export default OrderCard;
