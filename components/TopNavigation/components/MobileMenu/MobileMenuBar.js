import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./MobileMenuBar.module.scss";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Link from "next/link";
import CloseIcon from '@mui/icons-material/Close';


 function MobileMenuBar() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={styles.header}>
        <Toolbar>
          <div className={styles.MobileHeaderContainer}>
            <div className={styles.Logo}>
            <img
                src={"/images/mobile-logo.png"}
                alt="Logo"
                layout="fixed"
                height={49}
                width={75}
                quality={100}
              />
            </div>
            <div className={styles.SideBarDrawer}>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
            </div>

          </div>
        
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        className={styles.MainContainer}
        
      >
        <Box
          sx={{ width: 252}}
          role="presentation"
          // onClick={toggleDrawer(false)}
          // onKeyDown={toggleDrawer(false)}
        >
               <div className={styles.CloseSideBarBox}>
                  <CloseIcon onClick={toggleDrawer(false)} fontSize="large" className={styles.CloseIcon} />
               </div>
               <div className={styles.MainMenu}>
                   <div className={styles.MenuList}>
                        <Link href={"/"}>
                            <a>Home</a>
                        </Link>
                        <Link href={"/aboutus"}>
                            <a>About Us</a>
                        </Link>
                        <Link href={"/services"}>
                            <a>Services</a>
                        </Link>
                        <Link href={"/portfolio"}>
                            <a>Portfolio</a>
                        </Link>
                        <Link href={"/testimonial"}>
                            <a>Testitmonial</a>
                        </Link>
                        <Link href={"/blogs"}>
                            <a>Blog</a>
                        </Link>
                        <Link href={"/contactus"}>
                            <a>Contact Us</a>
                        </Link>
                   </div>
                </div>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
}

export default MobileMenuBar;