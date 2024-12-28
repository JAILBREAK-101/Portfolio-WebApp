import React from 'react';
import styles from '../../styles/component.module/Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.loader}>
        <div className={styles.spinner}></div>
    </div>
  );
}

