"use client";

import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import React from "react";

interface Props {
  name: string;
  age: string;
  ownerEmail: string;
  price: string;
  image: string;
}

const AnimalCard = ({ name, age, ownerEmail, price }: Props) => {
  return (
    <Card>
      <CardHeader title={`${name} - ${age}y`} />
      <CardContent>
        <Typography>Price: {price}€</Typography>
        <Typography>Contact Owner: {ownerEmail}</Typography>
      </CardContent>
    </Card>
  );
};

export default AnimalCard;
