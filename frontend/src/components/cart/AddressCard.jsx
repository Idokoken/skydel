import React from "react";
import { Card, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

function AddressCard({ item, showButton, handleSelectAddress }) {
  return (
    <Card className="w-64 p-4 flex gap-5">
      <HomeIcon />
      <div className="space-y-3 text-gray-500">
        <h1 className="font-semibold text-lg text-white">Home</h1>
        <p>NO 20 Atta A.A Street D Rock Plaza Kado Estate Abuja</p>
        {showButton && (
          <Button
            variant="outlined"
            fullWidth
            onClick={() => handleSelectAddress()}
          >
            Select
          </Button>
        )}
      </div>
    </Card>
  );
}

export default AddressCard;
