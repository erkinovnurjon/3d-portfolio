import { Box, Button, ButtonGroup, Container } from "@mui/material";
import React from "react";
import Logo from "./logo";

const Navbar = () => {
  return (
    <Box>
      <div className=" flex justify-between  items-center">
            <Logo />
            <Button>Button</Button>
      </div>
    </Box>
  );
};

export default Navbar;
