"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { Animal } from "@/data/animal";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import UploadedFileBox from "./uploadedFileBox";

interface Props {
  open: boolean;
  closePopover: () => void;
}

const animals = ["Dog", "Cat", "Bird"];

const PopoverCreateAnimal = ({ open, closePopover }: Props) => {
  const [selectedAnimal, setSelectedAnimal] = useState("Dog");
  const [file, setFile] = useState<File | null>(null);

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const {
    register,
    control,
    formState: { errors },
  } = useForm<Animal>();

  const handleAnimalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnimal(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleFileRemove = () => {
    setFile(null);
  };

  return (
    <Dialog open={open} onClose={closePopover} fullWidth>
      <DialogTitle>Create your animal</DialogTitle>
      <DialogContent>
        <Stack gap={1} marginTop={1}>
          <Typography variant="subtitle1" sx={{ color: "#8FBC8F" }}>
            Name
          </Typography>
          <TextField
            fullWidth
            placeholder="Name"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "#8FBC8F",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#8FBC8F",
                },
              },
              "& .MuiFormLabel-root": {
                color: "#8FBC8F",
              },
              "& .MuiFormLabel-root.Mui-focused": {
                color: "#8FBC8F",
              },
            }}
            error={!!errors.name}
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />
          <Typography variant="subtitle1" sx={{ color: "#8FBC8F" }}>
            Specie
          </Typography>
          <TextField
            select
            value={selectedAnimal}
            onChange={handleAnimalChange}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "#8FBC8F",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#8FBC8F",
                },
              },
              "& .MuiFormLabel-root": {
                color: "#8FBC8F",
              },
              "& .MuiFormLabel-root.Mui-focused": {
                color: "#8FBC8F",
              },
            }}
          >
            {animals.map((animal) => (
              <MenuItem key={animal} value={animal}>
                {animal}
              </MenuItem>
            ))}
          </TextField>
          <Typography variant="subtitle1" sx={{ color: "#8FBC8F" }}>
            Age
          </Typography>
          <TextField
            placeholder="Age"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "#8FBC8F",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#8FBC8F",
                },
              },
              "& .MuiFormLabel-root": {
                color: "#8FBC8F",
              },
              "& .MuiFormLabel-root.Mui-focused": {
                color: "#8FBC8F",
              },
            }}
          />
          <Typography variant="subtitle1" sx={{ color: "#8FBC8F" }}>
            Price
          </Typography>
          <TextField
            fullWidth
            placeholder="Price"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{"€"}</InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "#8FBC8F",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#8FBC8F",
                },
              },
              "& .MuiFormLabel-root": {
                color: "#8FBC8F",
              },
              "& .MuiFormLabel-root.Mui-focused": {
                color: "#8FBC8F",
              },
            }}
          />
          <Typography variant="subtitle1" sx={{ color: "#8FBC8F" }}>
            Email
          </Typography>
          <TextField
            fullWidth
            placeholder="Email"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "#8FBC8F",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#8FBC8F",
                },
              },
              "& .MuiFormLabel-root": {
                color: "#8FBC8F",
              },
              "& .MuiFormLabel-root.Mui-focused": {
                color: "#8FBC8F",
              },
            }}
          />
          <Typography variant="subtitle1" sx={{ color: "#8FBC8F" }}>
            Image
          </Typography>
          <Controller
            name="image"
            control={control}
            rules={{
              required: "Image is required",
            }}
            render={({ field }) => (
              <>
                {file ? (
                  <UploadedFileBox
                    name={file.name}
                    size={file.size.toString()}
                    handleIcon={handleFileRemove}
                    icon={<Inventory2Icon fontSize="small" color="error" />}
                  />
                ) : (
                  <Stack>
                    <Button
                      component="label"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                      startIcon={<CloudUploadIcon />}
                      sx={{
                        color: "#080808",
                        background: "#6c9d6c",
                        borderRadius: 2,
                        ":hover": { background: "#8FBC8F" },
                      }}
                    >
                      Upload file
                      <VisuallyHiddenInput
                        type="file"
                        onChange={handleFileChange}
                      />
                    </Button>
                  </Stack>
                )}
              </>
            )}
          />
        </Stack>
        <Stack direction="row" justifyContent="flex-end" marginTop={2} gap={2}>
          <Button
            variant="contained"
            sx={{
              color: "#080808",
              background: "#8FBC8F",
              borderRadius: 2,
              ":hover": { background: "#6c9d6c" },
            }}
            onClick={closePopover}
          >
            Close
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              color: "#080808",
              background: "#8FBC8F",
              borderRadius: 2,
              ":hover": { background: "#6c9d6c" },
            }}
          >
            Save
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default PopoverCreateAnimal;
