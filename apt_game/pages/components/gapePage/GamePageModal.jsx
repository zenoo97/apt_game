import React, { useState } from 'react';
import styles from './GamePageModal.module.css';
import { useRouter } from 'next/router';
export default function GamePageModal({
	setOpen,
	setNickName,
	setResult,
	nickName,
}) {
	const modalHandler = () => {
		setOpen(false);
		setResult(nickName);
	};
	return (
		<div className={styles.container}>
			<div className={styles.modalContainer}>
				<div className={styles.count}>
					<div>닉네임: </div>
					<div>
						<input onChange={e => setNickName(e.target.value)}></input>
					</div>
				</div>

				<div></div>
				<div className={styles.btn}>
					<button onClick={modalHandler}>확인</button>
				</div>
			</div>
		</div>
	);
}
