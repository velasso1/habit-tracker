import { FC, useState } from "react";
import { AppBar, IconButton, Drawer, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Header: FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <AppBar position="static" color="transparent">
        <div className="interactive-box">
          <div className="interactive-box__logo">
            <img src="PATH TO ICON" alt="logo" />
          </div>
          <div className="interactive-box__title">
            <Typography
              style={{
                fontFamily: "Rajdhani",
                fontSize: "25px",
                cursor: "pointer",
              }}
              className="interactive-box__title"
              onClick={() => {
                navigate("/");
              }}
            >
              Habits Tracker
            </Typography>
          </div>
          <div className="interactive-box__menu">
            <IconButton
              onClick={() => setOpen(true)}
              size="medium"
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
        <Drawer open={open} onClick={() => setOpen(false)} anchor="right">
          <Link to="/news">Hello</Link>
        </Drawer>
      </AppBar>
    </header>
  );
};

export default Header;
