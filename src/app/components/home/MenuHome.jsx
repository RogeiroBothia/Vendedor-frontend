import React from "react";
import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InventoryIcon from "@mui/icons-material/Inventory";

export default function MenuList() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <ListItemButton
        onClick={() => {
          navigate("/vendedores");
        }}
      >
        <ListItemIcon>
          <InventoryIcon sx={{ color: "blue" }} />
        </ListItemIcon>
        <ListItemText primary="Vendedores" />
      </ListItemButton>
    </React.Fragment>
  );
}
