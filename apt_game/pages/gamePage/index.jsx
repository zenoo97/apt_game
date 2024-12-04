import React, { useState } from 'react';
import styles from './GamePage.module.css';
import GamePageModal from '../components/gapePage/GamePageModal';
export default function GamePage() {
	const [open, setOpen] = useState(true);
	const [result, setResult] = useState();
	const [nickName, setNickName] = useState();
	return (
		<div className={styles.container}>
			<div>
				<button>초대링크 보내기</button>
			</div>
			{open && (
				<GamePageModal
					setOpen={setOpen}
					setNickName={setNickName}
					setResult={setResult}
					nickName={nickName}
				/>
			)}
			<div>{result}</div>
			<div className={styles.users}>
				<div className={styles.left}></div>
				<div className={styles.right}></div>
			</div>
			<div>
				<button>게임시작</button>
			</div>
		</div>
	);
}
