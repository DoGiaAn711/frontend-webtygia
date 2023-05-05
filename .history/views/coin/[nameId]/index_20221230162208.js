import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import PriceDetail from '@components/detail/coin/priceDetail';
import ExchagneRate from '@components/detail/coin/exchangeRate';
import Description from '@components/detail/coin/description';
import dynamic from 'next/dynamic';
const ChartCoin = dynamic(
	() => import('../../../components/chart/coin/ChartCoin'),
	{
		ssr: false,
	}
);
import MainLayout from '@components/layouts/mainLayout';

function CoinPageDetailView({ coin }) {
	return (
		<MainLayout>
			<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
				{/* {data &&
				data.map((coin) => ( */}
				<div>
					{/* <PriceDetail coin={coin} />
					<ExchagneRate data={coin} />
					<ChartCoin coin={coin} /> */}
					<Description coin={coin} />
				</div>
				{/* ))} */}
			</div>
		</MainLayout>
	);
}

export default CoinPageDetailView;
