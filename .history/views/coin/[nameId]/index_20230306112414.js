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
import { fetchUpdateScoreAndView } from '@services/updateScoreAndView/fetchUpdateScoreAndView';

function CoinPageDetailView({ descriptionData }) {
	// const [email, setEmail] = useState();
	const router = useRouter();
	const nameId = router.asPath.split('/')[2];

	const { data, isLoading, isError, error, isFetching } =
		useCoinPriceDetail(nameId);

	useEffect(() => {
		// setEmail(localStorage.getItem('email'));

		if (data) {
			//update in server
			fetchUpdateScoreAndView(data?._id, 'coin', 'Coin');

			if (typeof window && !localStorage.getItem('email')) {
				//update localstorage ko can dang nhap
				let rank1Coin = JSON.parse(
					localStorage.getItem('userInterest')
				);
				if (rank1Coin) {
					const isExisted = rank1Coin.filter(
						(item) => item.detail._id === data._id
					);
					if (isExisted.length > 0) {
						const updatingScore = rank1Coin.map((item) => {
							if (item.detail._id === data._id) {
								item.score++;
							}
							return item;
						});
						localStorage.setItem(
							'userInterest',
							JSON.stringify(updatingScore)
						);
						console.log(isExisted);
					} else {
						console.log('push');
						const dataMax = rank1Coin.slice(0, 20);
						dataMax.push({
							category: ['coin'],
							detailModel: 'Coin',
							score: 1,
							detail: data,
						});
						localStorage.setItem(
							'userInterest',
							JSON.stringify(dataMax)
						);
					}
				} else {
					const arr = [];
					arr.push({
						category: ['coin'],
						detailModel: 'Coin',
						score: 1,
						detail: data,
					});
					localStorage.setItem('userInterest', JSON.stringify(arr));
				}
			}
		}
	}, [data]);

	if (isLoading) {
		return <MainLayout />;
	}

	if (data) {
		return (
			<>
				<MainLayout>
					<div className=" h-auto lg:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
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
