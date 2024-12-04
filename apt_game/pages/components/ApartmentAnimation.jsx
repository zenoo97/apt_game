import React, { useState, useEffect } from 'react';
import styles from './ApartmentAnimation.module.css'; // CSS 모듈 import

const ApartmentAnimation = () => {
	const [step, setStep] = useState(0); // 애니메이션 단계
	const [isLeftHandDown, setIsLeftHandDown] = useState(true); // 왼손이 아래에 있는지 여부

	useEffect(() => {
		const interval = setInterval(() => {
			if (step < 5) {
				// 총 5단계
				if (step === 0 || step === 1) {
					setIsLeftHandDown(true); // 왼손을 아래로
				} else if (step === 2) {
					setIsLeftHandDown(false); // 오른손을 아래로
				} else if (step >= 3) {
					setIsLeftHandDown(prev => !prev); // 왼손을 두 번 흔드는 단계
				}
				setStep(prev => prev + 1); // 단계 증가
			}
		}, 1000); // 1초마다 손 위치 변경

		return () => clearInterval(interval);
	}, [step]);

	return (
		<div className={styles.container}>
			<div className={styles.hands}>
				<div
					className={`${styles.hand} ${styles.left} ${isLeftHandDown ? styles.down : styles.up}`}
				></div>
				<div
					className={`${styles.hand} ${styles.right} ${isLeftHandDown ? styles.up : styles.down}`}
				></div>
			</div>
			<div className={styles.text}>아파트 아파트!</div>
		</div>
	);
};

export default ApartmentAnimation;
