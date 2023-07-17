import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import styles from "../WhatToDo/WhatToDo.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";

function WhatToDo() {
  const router = useRouter();
  const matches = useMediaQuery("(max-width:992px)");
  const data = [
    {
      id: 1,
      img: "/images/Vision.png",
      title: "Vision",
      paragraph: `Empowering businesses with tailored web solutions.`,
    },
    {
      id: 2,
      img: "/images/Mission.png",
      title: "Mission",
      paragraph: "Empowering website and driving success.",
    },
    {
      id: 3,
      img: "/images/Goal.png",
      title: "Goal",
      paragraph: `Deliver exceptional website development solutions.`,
    },
  ];
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
    <div className={styles.WhatToDoWrapper}>
      <Container>
        <div
          className={styles.ItemBoxeContainer}
          data-aos={matches ? "" : "fade-up"}
        >
          {data &&
            data.map((item, index) => (
              <div className={styles.ItemBox} key={index}>
                <img src={item && item.img} alt={item && item.title} />
                <div className={styles.InfoContainer}>
                  <h5>{item && item.title}</h5>
                  <p>{item && item.paragraph}</p>
                </div>
              </div>
            ))}
        </div>
        <div
          className={styles.WhatToDoBoxContainer}
          data-aos={matches ? "" : "fade-up"}
        >
          <h1>WHAT WE DO?</h1>
          <div className={styles.WhatToDoItemBoxContainer}>
            <div
              className={styles.WhatToDoItemBox}
              onClick={(e) => ServiceClickhandler("/services/web-development")}
            >
              <img src="/images/Web-Dev.png" alt="Software-Development" />
              <h4>Website</h4>
              <h4> Development</h4>
            </div>
            <div
              className={styles.WhatToDoItemBox}
              onClick={(e) => ServiceClickhandler("/services/uix-design")}
            >
              <img src="/images/Web-Des.png" alt="Web-Design" />
              <h4>UI UX </h4>
              <h4>Design</h4>
            </div>
            <div
              className={styles.WhatToDoItemBox}
              onClick={(e) =>
                ServiceClickhandler("/services/mobile-application")
              }
            >
              <img src="/images/App-Dev.png" alt="Software-Development" />
              <h4>Mobile Application</h4>
              <h4>Development</h4>
            </div>
            <div
              className={styles.WhatToDoItemBox}
              onClick={(e) =>
                ServiceClickhandler("/services/customize-software")
              }
            >
              <img src="/images/Software-Dev.png" alt="Software-Development" />
              <h4>Customize</h4>
              <h4>Software</h4>
            </div>
          </div>
          <div className={styles.ButtonContainer}>
            <button onClick={(e) => ServiceClickhandler("/services")}>
              See All Services
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WhatToDo;
