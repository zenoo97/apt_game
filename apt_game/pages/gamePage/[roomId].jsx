import React, { useEffect, useState } from 'react';
import styles from './GamePage.module.css';
import GamePageModal from '../components/gamePage/GamePageModal';
import ApartmentAnimation from '../components/ApartmentAnimation';
import FloorSelectModal from '../components/gamePage/FloorSelectModal';
// import ShareBtn from '../components/ShareBtn';

export default function GamePage() {
	const [open, setOpen] = useState(true);
	const [result, setResult] = useState();
	const [nickName, setNickName] = useState();
	const [gameStart, setGameStart] = useState(false);
	const [currentUrl, setCurrentUrl] = useState('');
	const [parcingValue, setParcingValue] = useState('');
	const [showAnimation, setShowAnimation] = useState(false); // 애니메이션 표시 상태 추가
	const [showModal, setShowModal] = useState(false);
	const [floor, setFloor] = useState();
	const [confirmFloor, setConfirmFloor] = useState();
	const [gameStatus, setGameStatus] = useState(false);
	const gameHandler = () => {
		setGameStart(true);
		setShowAnimation(true); // 애니메이션 표시 상태 설정
		setTimeout(() => {
			setShowAnimation(false); // 4초 후 애니메이션 숨기기
			setShowModal(true);
		}, 4000);
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
			{/* <div>
				<ShareBtn />
			</div> */}
			<div className={styles.floorInfo}>
				{gameStatus && `${confirmFloor} 층`}
			</div>
			{open && (
				<GamePageModal
					setOpen={setOpen}
					setNickName={setNickName}
					setResult={setResult}
					nickName={nickName}
				/>
			)}
			<div className={styles.animation}>
				{showAnimation && gameStart && <ApartmentAnimation />}
			</div>
			{showModal && (
				<FloorSelectModal
					setShowModal={setShowModal}
					setFloor={setFloor}
					floor={floor}
					setConfirmFloor={setConfirmFloor}
					setGameStatus={setGameStatus}
				/>
			)}
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
