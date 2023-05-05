import { useStockPreview } from '@services/stock/useStock';
import React from 'react';

function TopPreviewStock() {
	const { data, isLoading, isError, error, isFetching } = useStockPreview();
	console.log(data);
	return (
		<div>
			{data &&
				data.stockList.map((stock, index) => <div>stock.symbol</div>)}
		</div>
	);
}

export default TopPreviewStock;
