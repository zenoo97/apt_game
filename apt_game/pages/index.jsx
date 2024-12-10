import Image from 'next/image';
import styles from './Home.module.css';
import { useRouter } from 'next/router';

export default function Home() {
	const route = useRouter();
	const nextPageHandler = () => {
		route.push('/makeRoom');
	};
	return (
		<div className={styles.container}>
			{/* <Image src="@/public/logo.jpg" alt="apt_game" width={100} height={100} /> */}
			<div>
				<h1>아파트 게임</h1>
			</div>
			<div className={styles.imageContainer}>
				<Image src="/logo.jpg" alt="apt_game" layout="fill" object="cover" />
			</div>
			<button onClick={nextPageHandler}>게임 시작</button>
		</div>
	);
}
