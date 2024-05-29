"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import DogShop from "@/sections/shop/dogShop";
import CatShop from "@/sections/shop/catShop";
import BirdShop from "@/sections/shop/birdShop";

const AnimalMenu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%", color: "#8FBC8F", marginBottom: 2 }}>
        <Box sx={{ borderBottom: 1, borderColor: "#8FBC8F" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              "& .MuiTab-root": { color: "#080808" },
              "& .MuiTabs-indicator": { backgroundColor: "#8FBC8F" },
              "& .Mui-selected": { color: "#8FBC8F !important" },
            }}
          >
            <Tab label="Dogs" />
            <Tab label="Cats" />
            <Tab label="Birds" />
          </Tabs>
        </Box>
      </Box>
      {value === 0 && <DogShop />}
      {value === 1 && <CatShop />}
      {value === 2 && <BirdShop />}
    </div>
  );
};

export default AnimalMenu;
