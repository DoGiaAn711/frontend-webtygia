import { useStockPreview } from '@services/stock/useStock';
import React from 'react';

function TopPreviewStock() {
	const { data, isLoading, isError, error, isFetching } = useStockPreview();
	console.log(data);
	return (
		<div className="flex justify-between">
			{data &&
				[1, 2, 3, 4].map((stock, index) => (
					<div className="bg-[#F5F5F5] w-full mx-[4px] h-[120px]"></div>
				))}
		</div>
	);
}

export default TopPreviewStock;
