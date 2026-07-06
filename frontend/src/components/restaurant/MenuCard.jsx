import React from "react";
import {
  Button,
  Typography,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const demo = [
  {
    category: "Nuts and Seeds",
    ingredients: ["Cashew"],
  },
  {
    category: "Protein",
    ingredients: ["Grandnut Beef", "Bacon Streps"],
  },
];

function MenuCard() {
  const handleCheckBoxChange = (value) => {
    console.log("value");
  };
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:gap-5">
              <img
                className="w-[7rem] h-[7rem] object-cover"
                src="https://res.cloudinary.com/dmb6bzbfi/image/upload/v1733369870/pillars/ektq1enls3jhawc7n7bu.jpg"
                alt=""
              />
              <div className="space-y-1 lg:space-5 lg:max-w-2xl">
                <p className="font-semibold text-xl">Burger</p>
                <p>$499</p>
                <p className="">Nice Food</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form action="">
            <div className="flex gap-5 flex-wrap">
              {demo.map((item, i) => (
                <div key={i}>
                  <p>{item.category}</p>
                  {item.ingredients.map((ingr, id) => (
                    <FormGroup key={id}>
                      <FormControlLabel
                        onChange={() => handleCheckBoxChange(ingr)}
                        control={<Checkbox />}
                        label={ingr}
                      />
                    </FormGroup>
                  ))}
                </div>
              ))}
            </div>
            <div className="pt-5">
              <Button type="submit" variant="contained" disabled={false}>
                {true ? "Add to Cart" : "Out of Stock"}
              </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MenuCard;
