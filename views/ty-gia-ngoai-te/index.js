// import ChartUsd from '@components/chart/foreignCurrency/ChartUsd';
import NameHeader from '@components/detail/exchange/usdInManyBanks/NameHeader';
import ExchangeRate from '@components/detail/stock/exchangeRate';
import MainLayout from '@components/layouts/mainLayout';
import ExchangeRateNavigation from '@components/navigation/ExchangeRateNavigation';
import { useUsdToVnd } from '@services/stock/useStock';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import PriceTable from '@components/detail/exchange/usdInManyBanks/PriceTable';
import { useUser } from '@services/user/useUser';
import { fetchUpdateScoreAndView } from '@services/updateScoreAndView/fetchUpdateScoreAndView';
import axios from 'axios';
import Loading from '@components/UI/Loading';
const ChartUsd = dynamic(
	() => import('../../components/chart/foreignCurrency/ChartUsd'),
	{
		ssr: false,
	}
);

function TyGiaNgoaiTeView() {
	// const [email, setEmail] = useState();
	const [user, setUser] = useState();

	const { data, isLoading, isError, error, isFetching } = useUsdToVnd();

	const { data: userFromDb } = useUser();

	useEffect(() => {
		if (data && userFromDb) {
			setUser(userFromDb);
			fetchUpdateScoreAndView(
				// email,
				data?._id,
				'foreign-currency',
				'ExchangeUsdToVnd'
			);
		}
	}, [data, userFromDb]);

	// useEffect(() => {
	// 	if (data) {
	// 		if (typeof window && !localStorage.getItem('email')) {
	// 			//update localstorage ko can dang nhap
	// 			let rank1Usd = JSON.parse(localStorage.getItem('userInterest'));
	// 			if (rank1Usd) {
	// 				const isExisted = rank1Usd.filter(
	// 					(item) => item.detail === data._id
	// 				);
	// 				if (isExisted.length > 0) {
	// 					const updatingScore = rank1Usd.map((item) => {
	// 						if (item.detail === data._id) {
	// 							item.score++;
	// 						}
	// 						return item;
	// 					});
	// 					localStorage.setItem(
	// 						'userInterest',
	// 						JSON.stringify(updatingScore)
	// 					);
	// 				} else {
	// 					const dataMax = rank1Usd.slice(0, 20);
	// 					dataMax.push({
	// 						category: ['foreign-currency'],
	// 						detailModel: 'ExchangeUsdToVnd',
	// 						score: 1,
	// 						detail: data._id,
	// 						follow: 0,
	// 					});
	// 					localStorage.setItem(
	// 						'userInterest',
	// 						JSON.stringify(dataMax)
	// 					);
	// 				}
	// 			} else {
	// 				const arr = [];
	// 				arr.push({
	// 					category: ['foreign-currency'],
	// 					detailModel: 'ExchangeUsdToVnd',
	// 					score: 1,
	// 					detail: data._id,
	// 					follow: 0,
	// 				});
	// 				localStorage.setItem('userInterest', JSON.stringify(arr));
	// 			}
	// 		}
	// 	}
	// }, [typeof window]);

	const saveUsd = async (id) => {
		try {
			const res = await axios
				.post(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/follow`, {
					email: localStorage.getItem('email'),
					itemId: id,
					category: 'foreign-currency',
					detailModel: 'ExchangeUsdToVnd',
					followCategory: 'followForeignCurrency',
				})
				.then(function (response) {
					console.log('success');
				});
			const user = await axios
				.get(
					`${
						process.env.NEXT_PUBLIC_PRODUCT_URL
					}/user/${localStorage.getItem('email')}`
				)
				.then((res) => res.data.data[0]);
			setUser(user);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteUsd = async (id) => {
		try {
			const res = await axios
				.post(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/unfollow`, {
					email: localStorage.getItem('email'),
					itemId: id,
					category: 'foreign-currency',
					detailModel: 'ExchangeUsdToVnd',
					followCategory: 'followForeignCurrency',
				})
				.then(function (response) {
					console.log('success');
				})
				.catch(function (error) {
					console.log(error);
				});

			const user = await axios
				.get(
					`${
						process.env.NEXT_PUBLIC_PRODUCT_URL
					}/user/${localStorage.getItem('email')}`
				)
				.then((res) => res.data.data[0]);
			setUser(user);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<MainLayout>
				<div className="mt-[1rem] lg:mt-[4.6rem] mb-[2.5rem]">
					<ExchangeRateNavigation />
					{data && (
						<div className=" h-auto   bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
							<div>
								<NameHeader
									saveUsd={saveUsd}
									deleteUsd={deleteUsd}
									user={user}
									data={data}
								/>
							</div>
							<div className="mt-[3rem]">
								<ExchangeRate />
							</div>
							<div>
								<ChartUsd />
							</div>
							<div>
								<PriceTable />
							</div>
						</div>
					)}
					{isLoading && <Loading />}
				</div>
			</MainLayout>
		</>
	);
}

export default TyGiaNgoaiTeView;
