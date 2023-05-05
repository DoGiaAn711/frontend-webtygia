// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import React, { useState, useEffect } from 'react';
// import { useQuery } from 'react-query';
// import axios from 'axios';
// import PriceDetail from '@components/detail/coin/priceDetail';
// import ExchagneRate from '@components/detail/coin/exchangeRate';
// import Description from '@components/detail/coin/description';
// import dynamic from 'next/dynamic';
// const ChartCoin = dynamic(
// 	() => import('../../../components/chart/coin/ChartCoin'),
// 	{
// 		ssr: false,
// 	}
// );

// function CoinPageDetail({ coin }) {
// 	return (
// 		<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
// 			{/* {data &&
// 				data.map((coin) => ( */}
// 			<div>
// 				<PriceDetail coin={coin} />
// 				<ExchagneRate data={coin} />
// 				<ChartCoin coin={coin} />
// 				<Description coin={coin} />
// 			</div>
// 			{/* ))} */}
// 		</div>
// 	);
// }

// export default CoinPageDetail;

// export async function getServerSideProps(context) {
// 	const nameId = context.params.nameId;
// 	// Fetch data from external API
// 	const coin = await fetch(`http://66.42.58.72/api/v1/coin/detail/${nameId}`)
// 		.then((res) => res.json())
// 		.then((res) => res.data[0]);

// 	// Pass data to the page via props
// 	return { props: { coin } };
// }

import CoinPageDetailView from '@views/coin/[nameId]';

import React from 'react';
import { fetchCoinDescription } from '@services/coin/fetchCoin';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useCoinDescription } from '@services/coin/useCoin';

function CoinPageDetail({ nameId }) {
	// const router = useRouter();
	// const nameId =
	// 	typeof router.query?.nameId === 'string' ? router.query.nameId : '';

	const { isSuccess, data, isLoading, isError } = useCoinDescription(nameId);
	// console.log(data);
	return (
		<>
			<CoinPageDetailView descriptionData={data} />
		</>
	);
}

export default CoinPageDetail;

// export async function getServerSideProps(context) {
// 	const nameId = context.params.nameId;
// 	// Fetch data from external API
// 	const coin = await fetch(`http://66.42.58.72/api/v1/coin/detail/${nameId}`)
// 		.then((res) => res.json())
// 		.then((res) => res.data[0]);

// 	// Pass data to the page via props
// 	return { props: { coin } };
// }

export const getStaticProps = async (context) => {
	const nameId = context.params?.nameId;
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery(['getDescription', nameId], () =>
		fetchCoinDescription(nameId)
	);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			nameId,
		},
	};
};

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	};
};

// export const getStaticProps = async (context) => {
// 	const nameId = context.params?.nameId;
// 	const queryClient = new QueryClient();

// 	await queryClient.prefetchQuery(['getPokemon', nameId], () =>
// 		fetchCoinDescription(nameId)
// 	);

// 	return {
// 		props: {
// 			dehydratedState: dehydrate(queryClient),
// 		},
// 	};
// };

// export const getStaticPaths = async () => {
// 	return {
// 		paths: [],
// 		fallback: 'blocking',
// 	};
// };
