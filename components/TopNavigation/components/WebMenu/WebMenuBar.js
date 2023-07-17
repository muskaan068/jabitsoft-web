import Nav from "react-bootstrap/Nav";
import styles from "./MenuBar.module.scss";
import { Container } from "react-bootstrap";
import Link from "next/link";

const WebMenuBar = () => {
  return (
    <div className={styles.TotNavigation}>
      <Container>
        <Nav className={styles.NavBar}>
          <div className={styles.BrandLogo}>
            <img className={styles.Logo} src="/images/Logo.png" alt="Logo" />
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
                <a>Testimonial</a>
              </Link>
              <Link href={"/blogs"}>
                <a>Blog</a>
              </Link>
              <Link href={"/contactus"}>
                <a>Contact Us</a>
              </Link>
            </div>
          </div>
        </Nav>
      </Container>
    </div>
  );
};

export default WebMenuBar;
