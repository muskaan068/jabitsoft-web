import React from 'react'
import { Container } from 'react-bootstrap';
import styles from '../DevProcess/DevProcess.module.scss'

function DevProcess() {
  return (
    <div className={styles.DevProcessWrapper}>
        <Container>
            <div className={styles.ContainerBox}>
                <h3>DEVELOPMENT PROCESS</h3>
                <p>Website development is like constructing a dream home. Content is the base of website pages and we embed it with HTML. Website is decorated with style sheets and validation is done through script language.</p>
            </div>
        </Container>
    </div>
  )
}

export default DevProcess