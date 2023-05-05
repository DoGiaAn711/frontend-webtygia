import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import PriceDetail from '@components/detail/coin/priceDetail';
import ExchagneRate from '@components/detail/coin/exchangeRate';
import Description from '@components/detail/coin/description';
import dynamic from 'next/dynamic';
import Head from 'next/head';
const ChartCoin = dynamic(
	() => import('../../../components/chart/coin/ChartCoin'),
	{
		ssr: false,
	}
);
// import MainLayout from '@components/layouts/mainLayout';
import MainLayout from '@components/layouts/mainLayout';
import { useCoinPriceDetail } from '@services/coin/useCoin';

function CoinPageDetailView({ descriptionData }) {
	const router = useRouter();
	const nameId = router.asPath.split('/')[2];

	const { data, isLoading, isError, error, isFetching } =
		useCoinPriceDetail(nameId);
	if (isLoading) {
		return <MainLayout />;
	}
	if (data) {
		return (
			<>
				<Head>
					<meta
						http-equiv="Content-Security-Policy"
						content="upgrade-insecure-requests"
					/>
				</Head>
				<MainLayout>
					<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
						<div>
							<PriceDetail
								descriptionData={descriptionData}
								coin={data}
							/>
							<ExchagneRate data={data} />
							<ChartCoin coin={data} />
							<Description
								descriptionData={descriptionData}
								coin={data}
							/>
						</div>
					</div>
				</MainLayout>
			</>
		);
	}
}

export default CoinPageDetailView;