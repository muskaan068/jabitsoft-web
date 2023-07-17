import React from 'react'
import { Container } from 'react-bootstrap';
import styles from './SectionFive.module.scss'

function SectionFive({portfolioData}) {
  return (
    <div className={styles.SectionFiveWrapper}>
        <Container>
        <div className={styles.ContainerBox}>
                <h3>CHALLENGES</h3>
                    <p>
                       {portfolioData && portfolioData[0]?.portfolioList[0]?.challenges}
                    </p>
                    <h3>CONCLUSION</h3>
                    <p>
                       {portfolioData && portfolioData[0]?.portfolioList[0]?.conclusion}
                    </p>
            </div>
        </Container>
    </div>
  )
}

export default SectionFive