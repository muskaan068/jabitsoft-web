// import Link from 'next/link';
// import React from 'react';
// import { Container, Nav } from 'react-bootstrap';
// import styles from '../TopNavigation/TopNavigation.module.scss'

// function TopNavigation() {
//   return (
//     <div className={styles.TotNavigation}>
//          <Container>
//             <Nav className={styles.NavBar}>
//                 <div className={styles.BrandLogo}>
//                   <img className={styles.Logo} src='/images/Logo.png' alt="Logo"  />
//                 </div>
//                 <div className={styles.MainMenu}>
//                    <div className={styles.MenuList}>
//                         <Link href={"/"}>
//                             <a>Home</a>
//                         </Link>
//                         <Link href={"/aboutus"}>
//                             <a>About Us</a>
//                         </Link>
//                         <Link href={"/services"}>
//                             <a>Services</a>
//                         </Link>
//                         <Link href={"/portfolio"}>
//                             <a>Portfolio</a>
//                         </Link>
//                         <Link href={"/testimonial"}>
//                             <a>Testitmonial</a>
//                         </Link>
//                         <Link href={"/blogs"}>
//                             <a>Blog</a>
//                         </Link>
//                         <Link href={"/contactus"}>
//                             <a>Contact Us</a>
//                         </Link>
//                    </div>
//                 </div>
//             </Nav>
//          </Container>
//     </div>
//   )
// }

// export default TopNavigation

import React from "react";
import WebMenuBar  from "./components/WebMenu/WebMenuBar";
import { Container } from "react-bootstrap";
import MobileMenuBar from "./components/MobileMenu/MobileMenuBar";
// import styles from "./TopNavigation.module.scss";
import useMediaQuery from "@mui/material/useMediaQuery";
const TopNavigation = () => {
  const matches = useMediaQuery("(min-width:992px)");
  return (
    <>
      {matches ? (
          <WebMenuBar />
      ) : (
        <MobileMenuBar/>
      )}
    </>
  );
};

export default TopNavigation;