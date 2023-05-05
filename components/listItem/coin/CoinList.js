import CoinItem from '@components/item/coin/CoinItem';
import { useCoinList } from '@services/coin/useCoin';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function CoinList({
	data,
	isLoading,
	isError,
	user,
	saveCoins,
	deleteCoins,
	isInFollowPageAndOffline,
}) {
	// const { data, isLoading, isError, error, isFetching } = useCoinList();
	const [isInFollowCategory, setIsInFollowCategory] = useState(false);
	const [followCoinsLocalStorage, setFollowCoinsLocalStorage] = useState(
		typeof window !== 'undefined' &&
			(JSON.parse(localStorage.getItem('followCoins')) || [])
	);

	const router = useRouter();
	const path = router.asPath;

	useEffect(() => {
		if (path === '/danh-muc-theo-doi') {
			setIsInFollowCategory(true);
		}
	}, [typeof window]);

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
				(isInFollowCategory
					? data
							.slice(0, 4)
							.map((coin, index) => (
								<CoinItem
									user={user}
									saveCoins={saveCoins}
									deleteCoins={deleteCoins}
									key={coin.nameId}
									coin={coin}
									index={index}
									followCoinsLocalStorage={
										followCoinsLocalStorage
									}
									setFollowCoinsLocalStorage={
										setFollowCoinsLocalStorage
									}
									isInFollowPageAndOffline={
										isInFollowPageAndOffline
									}
								/>
							))
					: data.map((coin, index) => (
							<CoinItem
								user={user}
								saveCoins={saveCoins}
								deleteCoins={deleteCoins}
								key={coin.nameId}
								coin={coin}
								index={index}
								followCoinsLocalStorage={
									followCoinsLocalStorage
								}
								setFollowCoinsLocalStorage={
									setFollowCoinsLocalStorage
								}
								isInFollowPageAndOffline={
									isInFollowPageAndOffline
								}
							/>
					  )))}
		</>
	);
}

export default CoinList;
