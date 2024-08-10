import React, { useState } from "react";
import { IconButton, Input, Box, Drawer } from "@mui/material";
import { IconSearch, IconX } from "@tabler/icons-react";

const Search: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <IconButton
        aria-label="search"
        color="inherit"
        onClick={handleDrawerToggle}
        size="large"
      >
        <IconSearch height="20" width="20" strokeWidth="1.5" />
      </IconButton>
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            padding: "15px 30px",
            display: "flex",
            alignItems: "center",
          },
        }}
      >
        <Input
          placeholder="Search here"
          aria-label="search-input"
          fullWidth
          sx={{ mr: 2 }}
        />
        <IconButton onClick={handleDrawerToggle}>
          <IconX height="20" width="20" />
        </IconButton>
      </Drawer>
    </>
  );
};

export default Search;
