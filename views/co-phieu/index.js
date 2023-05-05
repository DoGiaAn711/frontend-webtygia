import React, { useEffect, useState } from 'react';
import MainLayout from '@components/layouts/mainLayout';
import Head from 'next/head';
import StockList from '@components/listItem/stock/StockList';
import { useStockList } from '@services/stock/useStock';
import PaginationCoinList from '@components/pagination/PaginationCoinList';
import { useRouter } from 'next/router';
import StockNavigation from '@components/navigation/StockNavigation';

function CoPhieuView() {
	const [pageNumber, setPageNumber] = useState(1);
	const [exchangeName, setExchangeName] = useState('hnx');
	const router = useRouter();

	const { data, isLoading, isError, error, isFetching } = useStockList(
		exchangeName,
		pageNumber
	);

	useEffect(() => {
		router.push('/co-phieu/hnx');
	}, []);
	return (
		<>
			<MainLayout></MainLayout>
		</>
	);
}

export default CoPhieuView;
