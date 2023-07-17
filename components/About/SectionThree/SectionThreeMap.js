import React from 'react'
import { Container } from 'react-bootstrap';
import styles from './SectionThreeMap.module.scss'

function SectionThreeMap() {
  return (
     <Container>
          <div className={styles.BottomMap}>
                <img src='/images/map2.png' alt='map' />
            </div>
     </Container>
  )
}

export default SectionThreeMap