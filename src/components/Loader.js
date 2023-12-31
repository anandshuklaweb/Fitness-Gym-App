import React from "react";
import { Stack } from "@mui/material";
import { Bars } from "react-loader-spinner";

const Loader = () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
    className="w-6"
  >
    <Bars color="grey" />
  </Stack>
);

export default Loader;
