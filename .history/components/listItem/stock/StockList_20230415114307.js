import StockItem from '@components/item/stock/StockItem';
import { useStockList } from '@services/stock/useStock';
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
	const [followStocksLocalStorage, setFollowStocksLocalStorage] = useState(
		// typeof window !== 'undefined' &&
		[]
	);

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
				data?.slice(0, 4).map((stock, index) => (
					<StockItem
						saveStocks={saveStocks}
						deleteStocks={deleteStocks}
						user={user}
						key={stock.symbol}
						stock={stock}
						index={index}
						followStocksLocalStorage={followStocksLocalStorage}
						setFollowStocksLocalStorage={
							setFollowStocksLocalStorage
						}
						isInFollowPageAndOffline={isInFollowPageAndOffline}
						// exchangeName={exchangeName}
					/>
				))}
		</>
	);
}

export default StockList;
