import React, { useState } from 'react';
import styles from './MakeRoom.module.css';
import Modal from '../components/makeRoom/Modal';
export default function MakeRoom() {
	const [makeRoom, setMakeRoom] = useState(false);
	const gameHandler = () => {
		setMakeRoom(true);
	};

	return (
		<div className={styles.container}>
			<div>
				<button onClick={gameHandler}>방 만들기</button>
			</div>
			{makeRoom && <Modal setMakeRoom={setMakeRoom} />}
		</div>
	);
}
