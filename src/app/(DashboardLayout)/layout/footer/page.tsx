"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
const Footer = () => {
  return (
    <Box sx={{ pt: 6, textAlign: "center" }}>
      <Typography>
        © 2023 All rights reserved by{" "}
        <Link href="https://www.facebook.com/emad.moenes/">
          Emad_moanes@facebook
        </Link>{" "}
      </Typography>
    </Box>
  );
};

export default Footer;
