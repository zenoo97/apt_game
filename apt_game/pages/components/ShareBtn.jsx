import React, { useEffect } from 'react';

export default function ShareBtn() {
	const realUrl = 'https://apt-game.vercel.app';

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const { Kakao } = window;

			if (Kakao) {
				// Kakao가 정의되어 있을 때만 실행
				// init 해주기 전에 clean up 을 해준다.
				Kakao.cleanup();
				// 자신의 js 키를 넣어준다.
				Kakao.init('356b44aa2fda4577e42ab395c69f026b');
				// 잘 적용되면 true 를 뱉는다.
				console.log(Kakao.isInitialized());
			} else {
				console.error('Kakao SDK가 로드되지 않았습니다.');
			}
		}
	}, []);

	const shareKakao = () => {
		if (typeof window !== 'undefined') {
			const { Kakao } = window;

			if (Kakao && Kakao.isInitialized()) {
				// Kakao가 정의되고 초기화되었을 때만 실행
				Kakao.Share.createDefaultButton({
					container: '#kakaotalk-sharing-btn',
					objectType: 'feed',
					content: {
						title: '오늘의 디저트',
						description: '아메리카노, 빵, 케익',
						imageUrl:
							'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
						link: {
							mobileWebUrl: realUrl,
							webUrl: realUrl,
						},
					},
					itemContent: {
						profileText: 'Kakao',
						profileImageUrl:
							'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
						titleImageUrl:
							'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
						titleImageText: 'Cheese cake',
						titleImageCategory: 'Cake',
						items: [
							{ item: 'Cake1', itemOp: '1000원' },
							{ item: 'Cake2', itemOp: '2000원' },
							{ item: 'Cake3', itemOp: '3000원' },
							{ item: 'Cake4', itemOp: '4000원' },
							{ item: 'Cake5', itemOp: '5000원' },
						],
						sum: 'Total',
						sumOp: '15000원',
					},
					social: {
						likeCount: 10,
						commentCount: 20,
						sharedCount: 30,
					},
					buttons: [
						{
							title: '웹으로 이동',
							link: {
								mobileWebUrl: realUrl,
								webUrl: realUrl,
							},
						},
						{
							title: '앱으로 이동',
							link: {
								mobileWebUrl: realUrl,
								webUrl: realUrl,
							},
						},
					],
				});
			} else {
				console.error('Kakao가 초기화되지 않았습니다.');
			}
		}
	};

	return (
		<>
			<button className="grey-btn" onClick={shareKakao}>
				카카오톡 공유하기
			</button>
		</>
	);
}
