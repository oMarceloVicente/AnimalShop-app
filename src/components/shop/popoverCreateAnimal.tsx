import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

interface Props {
  open: boolean;
  closePopover: () => void;
}

const animals = ["Dog", "Cat", "Bird"];

const PopoverCreateAnimal = ({ open, closePopover }: Props) => {
  const [selectedAnimal, setSelectedAnimal] = useState("Dog");

  const handleAnimalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnimal(event.target.value);
  };

  return (
    <Dialog open={open} onClose={closePopover} fullWidth>
      <DialogTitle>Create your animal</DialogTitle>
      <DialogContent>
        <Stack gap={1} marginTop={1}>
          <Typography variant="subtitle2">Name</Typography>
          <TextField fullWidth placeholder="Name" />
          <Typography variant="subtitle2">Specie</Typography>
          <TextField
            select
            value={selectedAnimal}
            onChange={handleAnimalChange}
            fullWidth
          >
            {animals.map((animal) => (
              <MenuItem key={animal} value={animal}>
                {animal}
              </MenuItem>
            ))}
          </TextField>
          <Typography variant="subtitle2">Age</Typography>
          <TextField fullWidth placeholder="Age" />
          <Typography variant="subtitle2">Email</Typography>
          <TextField fullWidth placeholder="Email" />
          <Typography variant="subtitle2">Price</Typography>
          <TextField fullWidth placeholder="Price" />
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default PopoverCreateAnimal;
