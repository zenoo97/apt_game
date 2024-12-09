import React, { useEffect, useState } from 'react';
import styles from './GamePage.module.css';
import GamePageModal from '../components/gamePage/GamePageModal';
import ApartmentAnimation from '../components/ApartmentAnimation';
import ShareBtn from '../components/ShareBtn';

export default function GamePage() {
	const [open, setOpen] = useState(true);
	const [result, setResult] = useState();
	const [nickName, setNickName] = useState();
	const [gameStart, setGameStart] = useState(false);
	const [currentUrl, setCurrentUrl] = useState('');
	const [parcingValue, setParcingValue] = useState('');

	const gameHandler = () => {
		setGameStart(true);
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const url = window.location.href;
			setCurrentUrl(url);
			const value = url.split('/')[4];
			setParcingValue(value);
		}
	}, []);

	return (
		<div className={styles.container}>
			<div>
				<ShareBtn />
			</div>
			{open && (
				<GamePageModal
					setOpen={setOpen}
					setNickName={setNickName}
					setResult={setResult}
					nickName={nickName}
				/>
			)}
			<div>{gameStart && <ApartmentAnimation />}</div>
			<div className={styles.users}>
				<div className={styles.left}>
					<div>{result}</div>
				</div>
				<div className={styles.right}></div>
			</div>
			<div>
				<button onClick={gameHandler}>게임시작</button>
				<button>게임끝내기</button>
			</div>
		</div>
	);
}
