import React, { useState } from "react";
import {
  Divider,
  FormControl,
  Grid,
  RadioGroup,
  Typography,
  FormControlLabel,
  Radio,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuCard from "./MenuCard";

const categories = ["Pizza", "Bryani", "Burger", "Chicen ", "Rice"];
const foodType = [
  { label: "all", value: "all" },
  { label: "vagetarian", value: "vegetarian only" },
  { label: "Non-vegetarian", value: "non-vegetarian" },
  { label: "Seasonal", value: "Seasonal" },
];
const menu = [1, 1, 1, 1, 1];

function RestaurantDetails() {
  const [foodType, setFoodType] = useState("all");
  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
  };

  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          Home/Indian/Bento Fast Food
        </h3>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">Bento Indian Kitecken</h1>
          <p className="text-gray-500 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            eveniet quia fugiat itaque quam. Aut mollitia dicta sequi alias
            placeat. Rerum unde perferendis architecto provident quam aspernatur
            odit deleniti id.
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>Kado Estate, Abuja Nigeria</span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon />
              <span>Mon - Sun 9:00 AM - 9:00 PM (Today)</span>
            </p>
          </div>
        </div>
        <div className="">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                src="https://res.cloudinary.com/dmb6bzbfi/image/upload/v1733369870/pillars/ektq1enls3jhawc7n7bu.jpg"
                alt=""
                className="w-full h-[40vh] object-cover"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                src="https://res.cloudinary.com/dmb6bzbfi/image/upload/v1733369870/pillars/ektq1enls3jhawc7n7bu.jpg"
                alt=""
                className="w-full h-[40vh] object-cover"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                src="https://res.cloudinary.com/dmb6bzbfi/image/upload/v1733369870/pillars/ektq1enls3jhawc7n7bu.jpg"
                alt=""
                className="w-full h-[40vh] object-cover"
              />
            </Grid>
          </Grid>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28 p-5 shadow-md">
            {/* <div className="">
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>
              <FormControl>
                <RadioGroup
                  className="py-10 space-y-5"
                  Component={"filedset"}
                  name="food_type"
                  value={foodType}
                  onChange={handleFilter}
                >
                  {foodType.map((item, id) => (
                    <FormControlLabel
                      key={id}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div> */}

            <Divider />
            <div className="">
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>
              <FormControl>
                <RadioGroup
                  className="py-10 space-y-5"
                  Component={"filedset"}
                  name="food_type"
                  value={foodType}
                  onChange={handleFilter}
                >
                  {categories.map((item, id) => (
                    <FormControlLabel
                      key={id}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10 filter">
          {menu.map((item, id) => (
            <MenuCard key={id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default RestaurantDetails;
