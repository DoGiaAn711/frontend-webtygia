import React from 'react';
import StockPageDetailView from '@views/co-phieu/[symbol]';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { fetchStockDescription } from '@services/stock/fetchStock';
import { useStockDescription } from '@services/stock/useStock';

function StockPageDetail() {
	return <StockPageDetailView />;
}

export default StockPageDetail;
