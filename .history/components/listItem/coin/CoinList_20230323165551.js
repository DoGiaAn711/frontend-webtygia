import CoinItem from '@components/item/coin/CoinItem';
import { useCoinList } from '@services/coin/useCoin';
import { useEffect, useState } from 'react';

function CoinList({ data, isLoading, isError, user, saveCoins, deleteCoins }) {
	// const { data, isLoading, isError, error, isFetching } = useCoinList();
	const [followCoinsLocalStorage, setFollowCoinsLocalStorage] = useState(
		JSON.parse(localStorage.getItem('followCoins'))
	);
	useEffect(() => {
		if (!localStorage.getItem('followCoins')) {
			localStorage.setItem('followCoins', JSON.stringify([]));
		}
		// setFollowCoinsLocalStorage(
		// 	JSON.parse(localStorage.getItem('followCoins'))
		// );
		function checkUserData() {
			const item = localStorage.getItem('followCoins');

			if (item) {
				setFollowCoinsLocalStorage(item);
			}
		}

		window.addEventListener('storage', checkUserData);

		return () => {
			window.removeEventListener('storage', checkUserData);
		};
	}, []);

	if (isLoading) {
		return (
			<tr>
				<td>Đang tải</td>
			</tr>
		);
	}
	if (isError) {
		return (
			<tr>
				<td>{error.message}</td>
			</tr>
		);
	}
	return (
		<>
			{data &&
				data.map((coin, index) => (
					<CoinItem
						user={user}
						saveCoins={saveCoins}
						deleteCoins={deleteCoins}
						key={coin.nameId}
						coin={coin}
						index={index}
						followCoinsLocalStorage={followCoinsLocalStorage}
					/>
				))}
		</>
	);
}

export default CoinList;
