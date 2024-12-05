import React, { useState } from 'react';
import styles from './Modal.module.css';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

export default function Modal({ setMakeRoom, gameHandler }) {
	const route = useRouter();
	const [count, setCount] = useState();

	const modalHandler = () => {
		setMakeRoom(false);
	};

	const createRoom = () => {
		const newRoomId = uuidv4(); // 새로운 방 ID 생성
		gameHandler(newRoomId, count); // MakeRoom의 gameHandler 호출
		modalHandler(); // 모달 닫기
		route.push(`/gamePage/${newRoomId}`); // 새로운 페이지로 이동
	};

	return (
		<div className={styles.container}>
			<div className={styles.modalContainer}>
				<div className={styles.count}>
					<div>인원: </div>
					<div>
						<input onChange={e => setCount(e.target.value)}></input>
					</div>
				</div>

				<div></div>
				<div className={styles.btn}>
					<button onClick={createRoom}>방 만들기</button>
					<button onClick={modalHandler}>닫기</button>
				</div>
			</div>
		</div>
	);
}
