import CoinItem from '@components/item/coin/CoinItem';
import { useCoinList } from '@services/coin/useCoin';
import { useEffect, useState } from 'react';

function CoinList({
	data,
	isLoading,
	isError,
	user,
	saveCoins,
	deleteCoins,
	deleteCoinsFollowOffline,
}) {
	// const { data, isLoading, isError, error, isFetching } = useCoinList();
	const [followCoinsLocalStorage, setFollowCoinsLocalStorage] = useState(
		typeof window !== 'undefined' &&
			(JSON.parse(localStorage.getItem('followCoins')) || [])
	);

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
				<td>Có lỗi</td>
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
						setFollowCoinsLocalStorage={setFollowCoinsLocalStorage}
						deleteCoinsFollowOffline={deleteCoinsFollowOffline}
					/>
				))}
		</>
	);
}

export default CoinList;
