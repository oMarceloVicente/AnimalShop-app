"use client";

import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

interface Props {
  handleClick: () => void;
}

const CreateButton = ({ handleClick }: Props) => {
  return (
    <Stack direction="row" justifyContent="flex-end">
      <Button
        variant="contained"
        sx={{
          background: "#8FBC8F",
          borderRadius: 6,
          ":hover": { background: "#6c9d6c" },
        }}
        onClick={handleClick}
      >
        Sell Animal
      </Button>
    </Stack>
  );
};

export default CreateButton;
