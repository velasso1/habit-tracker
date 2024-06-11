import { FC, useState } from "react";
import { AppBar, IconButton, Drawer, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Header: FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="static" color="transparent">
      <div className="interactive-box">
        <Typography
          style={{ fontFamily: "Rajdhani", fontSize: "25px" }}
          className="interactive__title"
          onClick={() => {
            navigate("/");
          }}
        >
          Habits Tracker
        </Typography>
        <IconButton
          onClick={() => setOpen(true)}
          size="medium"
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
      </div>
      <Drawer open={open} onClick={() => setOpen(false)} anchor="right">
        <Link to="/news">Hello</Link>
      </Drawer>
    </AppBar>
  );
};

export default Header;
