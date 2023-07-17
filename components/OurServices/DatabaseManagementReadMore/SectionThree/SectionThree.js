import React from "react";
import { Container } from "react-bootstrap";
import styles from "./SectionThree.module.scss";

function SectionThree() {
  const infoData = [
    {
      id: 1,
      icon_url: "/images/data-security.png",
      title: "ENHANCED DATA SECURITY",
      desc: `Protect your valuable data from unauthorized access and ensure
      compliance with data privacy regulations.`,
    },
    {
      id: 2,
      icon_url: "/images/data-quality.png",
      title: "IMPROVED DATA QUALITY",
      desc: `Eliminate errors, inconsistencies, and duplication in your data,
      resulting in accurate and reliable information for better decision-making.`,
    },
    {
      id: 3,
      icon_url: "/images/data-integrate.png",
      title: "EFFICIENT DATA INTEGRATION",
      desc: `Seamlessly integrate data from multiple sources, enabling smooth
      data flow and interoperability across systems.`,
    },
    {
      id: 4,
      icon_url: "/images/scalable.png",
      title: "SCALABILITY AND FLEXIBILITY",
      desc: `Scale your data management infrastructure as your business grows
      and adapt to changing requirements with flexible solutions.`,
    },
    {
      id: 5,
      icon_url: "/images/compliance.png",
      title: "COMPLIANCE AND GOVERNANCE",
      desc: `Maintain regulatory compliance by implementing robust data
      governance practices and adhering to industry standards.`,
    },
  ];
  return (
    <div className={styles.SectionThreeWrapper}>
      <div className={styles.SectionThreeSubWrapper}>
        <Container>
          <div className={styles.ContainerBoxRightRds}>
            <div className={styles.InfoContainer}>
              <h3>ADVANTAGES OF A SUCCCESSFUL DATA MANAGEMENT SOLUTION</h3>
              <p>
                At JABITSOFT, we understand the importance of successful data
                management solutions and offer comprehensive services to help
                you achieve these advantages. Our experienced team combines
                industry-leading technologies with best practices to ensure the
                security, quality, integration, scalability, and compliance of
                your data management processes.Here are some of the reasons why
                you should choose JABITSOFT for Data Management Solutions:
              </p>
            </div>
            <div className={styles.InfoItemBoxesContainer}>
              {infoData &&
                infoData.map((item, index) => (
                  <div className={styles.InfoItemBox} key={index}>
                    <div className={styles.IconBox}>
                      <img
                        src={item && item.icon_url}
                        alt={item && item.title}
                      />
                    </div>
                    <div className={styles.InfoTextBox}>
                      <h3>{item && item.title}</h3>
                      <p>{item && item.desc}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default SectionThree;
