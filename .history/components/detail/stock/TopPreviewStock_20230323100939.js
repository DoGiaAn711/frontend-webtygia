import { useStockPreview } from '@services/stock/useStock';
import React from 'react';

function TopPreviewStock() {
	const { data, isLoading, isError, error, isFetching } = useStockPreview();
	console.log(data);
	return <div>TopPreviewStock</div>;
}

export default TopPreviewStock;
