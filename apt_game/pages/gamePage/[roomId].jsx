import React, { useEffect, useState } from 'react';
import styles from './GamePage.module.css';
import GamePageModal from '../components/gamePage/GamePageModal';
import ApartmentAnimation from '../components/ApartmentAnimation';
import FloorSelectModal from '../components/gamePage/FloorSelectModal';
import { supabase } from '../utils/supabase';

export default function GamePage() {
	const [open, setOpen] = useState(true);
	// const [result, setResult] = useState();
	const [nickName, setNickName] = useState();
	const [gameStart, setGameStart] = useState(false);
	// const [currentUrl, setCurrentUrl] = useState('');
	const [parcingValue, setParcingValue] = useState('');
	const [showAnimation, setShowAnimation] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [floor, setFloor] = useState();
	const [confirmFloor, setConfirmFloor] = useState();
	const [gameStatus, setGameStatus] = useState(false);
	const [floorSelected, setFloorSelected] = useState(false);
	const [usersInRoom, setUsersInRoom] = useState([]);

	const gameHandler = () => {
		setGameStart(true);
		setShowAnimation(true);
		setTimeout(() => {
			setShowAnimation(false);
			setShowModal(true);
		}, 4000);
	};

	useEffect(() => {
		let subscription;

		if (typeof window !== 'undefined') {
			const url = window.location.href;
			// setCurrentUrl(url);
			const value = url.split('/')[4];
			setParcingValue(value);
		}

		if (parcingValue) {
			// 방에 있는 사용자 목록을 초기 로딩 시 가져오기
			const fetchUsers = async () => {
				const { data } = await supabase
					.from('users')
					.select('*')
					.eq('roomId', parcingValue);

				setUsersInRoom(data);
			};

			fetchUsers();

			// Subscribe to changes for user inserts
			const handleInserts = payload => {
				console.log('Change received!', payload);
				// 새로운 사용자 추가 시 상태 업데이트
				setUsersInRoom(prev => [...prev, payload.new]);
			};

			subscription = supabase
				.channel('users')
				.on(
					'postgres_changes',
					{
						event: 'INSERT',
						schema: 'public',
						table: 'users',
					},
					handleInserts,
				)
				.subscribe();
		}

		// Cleanup subscription on unmount or roomId change
		return () => {
			if (subscription) {
				supabase.removeChannel(subscription);
			}
		};
	}, [parcingValue]);

	return (
		<div className={styles.container}>
			<div className={styles.floorInfo}>
				{gameStatus && `${confirmFloor} 층`}
			</div>
			{open && (
				<GamePageModal
					setOpen={setOpen}
					setNickName={setNickName}
					// setResult={setResult}
					nickName={nickName}
					parcingValue={parcingValue}
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
					setFloorSelected={setFloorSelected}
				/>
			)}
			<div className={styles.users}>
				<div className={styles.left}>
					{/* 방에 있는 사용자 목록 표시 */}
					{usersInRoom.length > 0 && (
						<div>
							<h2>방에 있는 사용자:</h2>
							<ul>
								{usersInRoom.map(user => (
									<li key={user.id}>{user.nickname}</li>
								))}
							</ul>
						</div>
					)}
				</div>
				<div className={styles.right}></div>
			</div>
			<div>
				{!floorSelected && <button onClick={gameHandler}>게임시작</button>}
			</div>
			{floorSelected && (
				<div className={styles.button}>
					<div className={styles.leftBtn}>
						<button>🡸</button>
					</div>
					<div className={styles.rightBtn}>
						<button>🡺</button>
					</div>
				</div>
			)}
		</div>
	);
}
