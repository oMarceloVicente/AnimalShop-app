import { Stack, Typography } from "@mui/material";
import React from "react";

const ShopTitle = () => {
  return (
    <Stack textAlign={"center"} gap={2}>
      <Typography
        variant="h2"
        sx={{ fontWeight: 600, fontFamily: "Lucida Console", color: "#8FBC8F" }}
      >
        Pawstore
      </Typography>
      <Typography
        variant="h4"
        sx={{ fontWeight: 400, fontFamily: "Lucida Console", color: "#080808" }}
      >
        Welcome to the best animal store in the world
      </Typography>
    </Stack>
  );
};

export default ShopTitle;
