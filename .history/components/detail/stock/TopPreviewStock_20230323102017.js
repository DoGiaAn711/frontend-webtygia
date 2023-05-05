import { useStockPreview } from '@services/stock/useStock';
import React from 'react';

function TopPreviewStock() {
	const { data, isLoading, isError, error, isFetching } = useStockPreview();
	console.log(data);
	return (
		<div className="flex justify-between">
			{data &&
				data.stockList.map((stock, index) => (
					<div className="bg-[#F5F5F5] w-full mx-[8px] h-[120px]">
						<span>{stock.symbol}</span>
					</div>
				))}
		</div>
	);
}

export default TopPreviewStock;
