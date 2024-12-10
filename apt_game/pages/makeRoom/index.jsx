import React, { useState } from 'react';
import styles from './MakeRoom.module.css';
import Modal from '../components/makeRoom/Modal';
import { supabase } from '../utils/supabase';

export default function MakeRoom() {
	const [makeRoom, setMakeRoom] = useState(false);
	const [roomId, setRoomId] = useState(null); // 초기값을 null로 설정

	const gameHandler = async (newRoomId, count) => {
		const { data, error } = await supabase
			.from('gameRoom')
			.insert([{ room_id: newRoomId, max_users: count }])
			.select();

		if (error) {
			console.error('Error creating room:', error);
			return; // 에러 처리
		}

		setRoomId(newRoomId); // 방 ID 설정
		setMakeRoom(true); // 모달 열기
	};

	return (
		<div className={styles.container}>
			<div>
				<button onClick={() => setMakeRoom(true)}>방 만들기</button>
			</div>
			{/* <ApartmentAnimation /> */}
			{makeRoom && (
				<Modal setMakeRoom={setMakeRoom} gameHandler={gameHandler} />
			)}
		</div>
	);
}
