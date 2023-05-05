import React from 'react';
import StockPageDetailView from '@views/co-phieu/[symbol]';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { fetchStockDescription } from '@services/stock/fetchStock';
import { useStockDescription } from '@services/stock/useStock';

function StockPageDetail({ symbol }) {
	const { isSuccess, data, isLoading, isError } = useStockDescription(symbol);
	// console.log(data);
	return <StockPageDetailView description={data} />;
}

export default StockPageDetail;

export const getStaticProps = async (context) => {
	const symbol = context.params?.symbol;
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery(['getStockDescription', symbol], () =>
		fetchStockDescription(symbol)
	);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			symbol,
		},
	};
};

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	};
};
