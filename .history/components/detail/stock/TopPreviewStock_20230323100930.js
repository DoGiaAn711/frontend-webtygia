import { useStockPreview } from '@services/stock/useStock';
import React from 'react';

function TopPreviewStock() {
	const { data, isLoading, isError, error, isFetching } = useStockPreview();
	return <div>TopPreviewStock</div>;
}

export default TopPreviewStock;
