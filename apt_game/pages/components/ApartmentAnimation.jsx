import React from 'react';
import styles from './ApartmentAnimation.module.css';

const ApartmentAnimation = () => {
	return (
		<div className={styles.container}>
			<div className={styles.hands}>
				<div className={`${styles.hand} ${styles.left}`}></div>
				<div className={`${styles.hand} ${styles.right}`}></div>
			</div>
			<div className={styles.text}>아파트 아파트!</div>
		</div>
	);
};

export default ApartmentAnimation;
