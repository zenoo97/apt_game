import React, { useState } from 'react';
import styles from './FloorSelectModal.module.css';

export default function FloorSelectModal({
	setShowModal,
	setFloor,
	setConfirmFloor,
	floor,
	setGameStatus,
}) {
	const startGame = () => {
		setShowModal(false);
		setConfirmFloor(floor);
		setGameStatus(true);
	};
	return (
		<div className={styles.container}>
			<div className={styles.modalContainer}>
				<div className={styles.count}>
					<div>몇층?!: </div>
					<div>
						<input onChange={e => setFloor(e.target.value)}></input>
					</div>
				</div>

				<div></div>
				<div className={styles.btn}>
					<button onClick={startGame}>시작하기</button>
				</div>
			</div>
		</div>
	);
}
