import { FC, useState } from "react";
import { AppBar, IconButton, Drawer, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header: FC = () => {

    const [open, setOpen] = useState(false);

    return ( 
        <AppBar position="static">
            <Typography>Habits Tracker</Typography>
            <IconButton
                size="large"
                color="inherit"
                aria-label="open drawer">
            <MenuIcon onClick={() => setOpen(true)}/>
          </IconButton>
          <Drawer open={open} onClick={() => setOpen(false)}/>
        </AppBar>
     );
}
 
export default Header;