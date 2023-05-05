import StockItem from '@components/item/stock/StockItem';
import { useStockList } from '@services/stock/useStock';
import { useState } from 'react';

function StockList({
	data,
	isLoading,
	isError,
	user,
	saveStocks,
	deleteStocks,
}) {
	const [followStocksLocalStorage, setFollowStocksLocalStorage] = useState(
		JSON.parse(localStorage.getItem('followStocks')) || []
	);
	// const { data, isLoading, isError, error, isFetching } = useStockList('hnx');
	// if (isLoading) {
	// 	return (
	// 		<tr>
	// 			<td>Đang tải</td>
	// 		</tr>
	// 	);
	// }
	// if (isError) {
	// 	return (
	// 		<tr>
	// 			<td>{error.message}</td>
	// 		</tr>
	// 	);
	// }
	return (
		<>
			{data &&
				data.map((stock, index) => (
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
						// exchangeName={exchangeName}
					/>
				))}
		</>
	);
}

export default StockList;
