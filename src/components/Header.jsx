import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { ShoppingBasket } from "@mui/icons-material";

function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          MUI Shop
        </Typography>
        <IconButton color="inherit">
          <ShoppingBasket />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
