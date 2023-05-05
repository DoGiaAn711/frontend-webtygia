import StockItem from '@components/item/stock/StockItem';
import { useStockList } from '@services/stock/useStock';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function StockList({
	data,
	isLoading,
	isError,
	user,
	saveStocks,
	deleteStocks,
	isInFollowPageAndOffline,
}) {
	const [isInFollowCategory, setIsInFollowCategory] = useState(false);
	const [followStocksLocalStorage, setFollowStocksLocalStorage] = useState(
		// typeof window !== 'undefined' &&
		[]
	);

	const router = useRouter();
	const path = router.asPath;

	useEffect(() => {
		if (path === '/danh-muc-theo-doi') {
			setIsInFollowCategory(true);
		}
	}, [typeof window]);

	useEffect(() => {
		if (!JSON.parse(localStorage.getItem('followStocks'))) {
			localStorage.setItem('followStocks', JSON.stringify([]));
		} else {
			setFollowStocksLocalStorage(
				JSON.parse(localStorage.getItem('followStocks'))
			);
		}
	}, [typeof window]);

	// if (isLoading) {
	// 	return (
	// 		<tr>
	// 			<td>Đang tải</td>
	// 		</tr>
	// 	);
	// }
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
					? data.slice(0, 4).map((stock, index) => (
							<StockItem
								saveStocks={saveStocks}
								deleteStocks={deleteStocks}
								user={user}
								key={stock.symbol}
								stock={stock}
								index={index}
								followStocksLocalStorage={
									followStocksLocalStorage
								}
								setFollowStocksLocalStorage={
									setFollowStocksLocalStorage
								}
								isInFollowPageAndOffline={
									isInFollowPageAndOffline
								}
								// exchangeName={exchangeName}
							/>
					  ))
					: data.map((stock, index) => (
							<StockItem
								saveStocks={saveStocks}
								deleteStocks={deleteStocks}
								user={user}
								key={stock.symbol}
								stock={stock}
								index={index}
								followStocksLocalStorage={
									followStocksLocalStorage
								}
								setFollowStocksLocalStorage={
									setFollowStocksLocalStorage
								}
								isInFollowPageAndOffline={
									isInFollowPageAndOffline
								}
								// exchangeName={exchangeName}
							/>
					  )))}
		</>
	);
}

export default StockList;
