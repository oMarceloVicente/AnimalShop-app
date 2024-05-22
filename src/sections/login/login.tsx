"use client";

import AuthButton from "@/components/buttons/authButton";
import googleLogo from "/public/logo/googleLogo.png";
import facebookLogo from "/public/logo/facebookLogo.png";
import loginImage from "/public/loginImageLabrator.jpeg";
import React from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Grid, Icon, Link, Stack, Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";

const Login = () => {
  const searchParams = useSearchParams();

  let callback = "";

  if (searchParams.get("returnTo")) {
    callback = `${window.location.origin}${searchParams.get("returnTo")}`;
  } else {
    callback = `${window.location.origin}/pawstore/home`;
  }

  const handleClickGoogle = async () => {
    try {
      signIn("google", {
        callbackUrl: callback,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickFacebook = async () => {
    try {
      signIn("facebook", {
        callbackUrl: callback,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#8FBC8F"
    >
      <Stack
        sx={{
          width: 1000,
          height: 600,
          display: "flex",
          borderRadius: 6,
          bgcolor: "#FFFFF0",
        }}
      >
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={6}>
            <Stack
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              marginTop={10}
              gap={0.5}
            >
              <PetsIcon fontSize="large" />
              <Typography variant="h5">PAWSTORE</Typography>
            </Stack>
            <Stack marginLeft={5} marginRight={5} marginTop={8}>
              <AuthButton
                image={googleLogo}
                text="Sign in with Google"
                onClick={handleClickGoogle}
              />
              <AuthButton
                image={facebookLogo}
                text="Sign in with Facebook"
                onClick={handleClickFacebook}
              />
              <Stack marginTop={4}>
                <Typography
                  sx={{
                    mt: 1.5,
                    fontSize: 12,
                    fontWeight: 400,
                    textAlign: "center",
                    color: "var(--text-secondary, #637381)",
                  }}
                >
                  By signing in, I agree to{" "}
                  <Link
                    href="https://brainwised.com/terms-and-conditions/"
                    target="_blank"
                    sx={{ textDecoration: "underline", color: "black" }}
                  >
                    Terms of Use and Privacy Policy
                  </Link>
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sx={{ height: "100%" }}>
            <Stack
              sx={{
                backgroundImage: `url(${loginImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                borderBottomRightRadius: 23,
                borderTopRightRadius: 23,
              }}
              display={"flex"}
              alignItems={"center"}
            >
              <Stack
                display={"flex"}
                alignItems={"center"}
                textAlign={"center"}
                marginTop={3}
                gap={1}
              >
                <Typography variant="h4" color={"#FFFFF0"}>
                  Welcome !
                </Typography>

                <Typography variant="h5" color={"#FFFFF0"}>
                  Join the pawstore community and explore more!
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Login;
