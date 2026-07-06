import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function EventCard() {
  return (
    <div>
      <Card sx={{ width: "345" }}>
        <CardMedia sx={{ height: "234" }} image="/images/items/project1.jpg" />
        <CardContent>
          <Typography variant="h5">Indian Fast Food</Typography>
          <Typography variant="body2">50% Off on Your First Order</Typography>
          <div className="space-y-2 py-2">
            <p>{"Abuja"}</p>
            <p className="text-sm text-blue-500">June 20, 2026 08:00 AM</p>
            <p className="text-sm text-red-500">June 20, 2026 11:00 PM</p>
          </div>
        </CardContent>
        {true && (
          <CardActions>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </div>
  );
}

export default EventCard;
