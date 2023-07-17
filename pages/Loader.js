import React, { useEffect } from 'react';
import styles from './Loader.module.scss'

function Loader() {
  return (
    <div className={styles.wrapper}>
            <img src="/images/Logo.png" alt='logo' />
            <div className={styles.loader}>   
             </div>
        </div>
  )
}

export default Loader