"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { StyledAuthButton } from "./authButtonStyle";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

interface Props {
  text: string;
  image: StaticImageData;
  onClick: () => void;
}

const AuthButton = ({ text, onClick, image }: Props) => {

  return (
    <StyledAuthButton onClick={onClick}>
      <Image src={image} alt="Google Logo" width={20} height={20} />
      <span className="ml-4">{text}</span>
    </StyledAuthButton>
  );
};

export default AuthButton;
