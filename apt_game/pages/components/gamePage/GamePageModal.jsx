import { supabase } from '../../utils/supabase';
import styles from './GamePageModal.module.css';

export default function GamePageModal({
	setOpen,
	setNickName,
	setResult,
	nickName,
	parcingValue,
}) {
	const postNickName = async () => {
		const { data, error } = await supabase
			.from('users')
			.insert([{ nickname: nickName, roomId: parcingValue }])
			.select();
	};
	const modalHandler = () => {
		setOpen(false);
		setResult(nickName);
		postNickName();
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
