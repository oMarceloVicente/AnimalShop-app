"use client";

import AnimalMenu from "@/components/shop/animalMenu";
import CreateButton from "@/components/shop/createButton";
import PopoverCreateAnimal from "@/components/shop/popoverCreateAnimal";
import ShopTitle from "@/components/shop/shopTitle";
import React, { useState } from "react";

const ShopSection = () => {
  const [openPopover, setOpenPopover] = useState(false);

  const handleClick = () => {
    setOpenPopover(true);
  };

  const handleClose = () => {
    setOpenPopover(false);
  };

  return (
    <>
      <ShopTitle />
      <CreateButton handleClick={handleClick} />
      <PopoverCreateAnimal open={openPopover} closePopover={handleClose} />
      <AnimalMenu />
    </>
  );
};

export default ShopSection;
