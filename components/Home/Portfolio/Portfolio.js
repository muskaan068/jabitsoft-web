import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import styles from "../Portfolio/Portfolio.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";

function Portfolio() {
  const router = useRouter();
  const matches = useMediaQuery("(max-width:992px)");

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in",
      delay: 100,
    });
  }, []);
  const ServiceClickhandler = (path) => {
    router.push(path);
  };
  return (
    <div className={styles.PortfolioWrapper}>
      <Container>
        <div className={styles.PortfolioContainer}>
          <div
            className={styles.InfoText}
            data-aos={matches ? null : "fade-up"}
          >
            <h1>PORTFOLIO</h1>
            <p>
              {" "}
              At JABITSOFT, our portfolio demonstrates our proficiency in
              developing outstanding websites for a variety of clientele. We
              take great satisfaction in being able to produce visually
              attractive designs, seamless user interfaces, and powerful
              functionality. Our portfolio, which ranges from corporate websites
              to e-commerce platforms, demonstrates our dedication to excellence
              and innovation. View the impressive web solutions we have created
              for our happy clients in our portfolio. Join forces with
              JABITSOFT, and we'll be happy to add your success to our list of
              achievements.{" "}
            </p>
          </div>
          <div
            className={styles.InfoImgContainer}
            data-aos={matches ? null : "zoom-in"}
          >
            {/* <img className={styles.InfoImg1} src="/images/note.png" />
                        <img className={styles.InfoImg2} src="/images/gallary.png" />
                        <img className={styles.InfoImg3} src="/images/user-info.png" /> */}
            <img
              className={styles.PortfolioImg}
              src="/images/portfolio-img.png"
              alt="portfolio-img"
            />
          </div>
        </div>
        <div
          className={styles.ContainerInfoBoxes}
          data-aos={matches ? null : "fade-up"}
        >
          <div
            className={styles.ContainerItemBox}
            onClick={(e) => ServiceClickhandler("/services/web-development")}
          >
            <img src="/images/Web-Dev1.png" alt="user" />
            <div>
              <h5>Website</h5>
              <h5>Development</h5>
            </div>
          </div>
          <div
            className={styles.ContainerItemBox}
            onClick={(e) => ServiceClickhandler("/services/uix-design")}
          >
            <img src="/images/Web-Des1.png" alt="user" />
            <div>
              <h5>UI UX</h5>
              <h5>Design</h5>
            </div>
          </div>
          <div
            className={styles.ContainerItemBox}
            onClick={(e) => ServiceClickhandler("/services/mobile-application")}
          >
            <img src="/images/App-Dev1.png" alt="user" />
            <div>
              <h5>Mobile</h5>
              <h5>Application</h5>
              <h5>Development</h5>
            </div>
          </div>
          <div
            className={styles.ContainerItemBox}
            onClick={(e) => ServiceClickhandler("/services/customize-software")}
          >
            <img src="/images/Software-Dev1.png" alt="user" />
            <div>
              <h5>Customize</h5>
              <h5>Software</h5>
            </div>
          </div>
          <div
            className={styles.ContainerItemBox}
            onClick={(e) =>
              ServiceClickhandler("/services/database-management")
            }
          >
            <img src="/images/Data-Mgnt.png" alt="user" />
            <div>
              <h5>Data</h5>
              <h5>Management</h5>
              <h5>Solution</h5>
            </div>
          </div>
          <div
            className={styles.ContainerItemBox}
            onClick={(e) =>
              ServiceClickhandler("/services/billing-invoicing-software")
            }
          >
            <img src="/images/invoicing-Sftw.png" alt="user" />
            <div>
              <h5>Billing &</h5>
              <h5>Invoicing</h5>
              <h5>Software</h5>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Portfolio;
