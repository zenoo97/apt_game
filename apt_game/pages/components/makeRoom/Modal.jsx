import React, { useState } from 'react';
import styles from './Modal.module.css';
import { useRouter } from 'next/router';
export default function Modal({ setMakeRoom }) {
	const route = useRouter();
	const [count, setCount] = useState();
	const modalHandler = () => {
		setMakeRoom(false);
	};
	const gameHandler = () => {
		setMakeRoom(false);
		route.push('/gamePage');
	};
	console.log(count);
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
					<button onClick={gameHandler}>방만들기</button>
					<button onClick={modalHandler}>닫기</button>
				</div>
			</div>
		</div>
	);
}
