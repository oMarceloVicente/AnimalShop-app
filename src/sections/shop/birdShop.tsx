import AnimalCard from "@/components/shop/animalCard";
import { getAnimalBySpecie } from "@/data/animal";
import Grid from "@mui/material/Grid";
import React from "react";

const BirdShop = () => {
  const { data } = getAnimalBySpecie("bird");

  return (
    <Grid container spacing={2}>
      {data &&
        data.map((animal) => (
          <Grid item xs={12} sm={4}>
            <AnimalCard
              name={animal.name}
              age={animal.age}
              price={animal.price}
              ownerEmail={animal.ownerEmail}
              image={animal.image}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default BirdShop;
