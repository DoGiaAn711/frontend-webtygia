import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
// const CoinList = dynamic(
// 	() => import('../../components/listItem/coin/CoinList'),
// 	{
// 		ssr: false,
// 	}
// );
import CoinList from '@components/listItem/coin/CoinList';
import MainLayout from '@components/layouts/mainLayout';
import PaginationCoinList from '@components/pagination/PaginationCoinList';
import { useCoinList } from '@services/coin/useCoin';
import { useRouter } from 'next/router';
import { useUser, useUserPopulate } from '@services/user/useUser';
import axios from 'axios';
import Loading from '@components/UI/Loading';
import { SaveDataToLocalStorage } from '@utils/saveDataToLocalStorage';

function CoinPageView() {
	// const [email, setEmail] = useState();
	const [user, setUser] = useState();
	const [pageNumber, setPageNumber] = useState(1);
	// const [coinData, setCoinData] = useState();
	const [populateField, setPopulateField] = useState('followCoins');
	const router = useRouter();
	// console.log(router);
	// const [data, setData] = useState();
	// const [isLoading, setIsLoading] = useState();
	// const [isError, setIsError] = useState();
	// useEffect(() => {
	const { data, isLoading, isError, error, isFetching } =
		useCoinList(pageNumber);

	const { data: userFromDb } = useUser();

	useEffect(() => {
		// setEmail(localStorage.getItem('email'));
		// setCoinData(data);
		if (userFromDb) {
			setUser(userFromDb);
		}
	}, [userFromDb]);

	const saveCoins = async (id) => {
		if (localStorage.getItem('email')) {
			try {
				const res = await axios
					.post(`${process.env.PRODUCT}/follow`, {
						email: localStorage.getItem('email'),
						itemId: id,
						category: 'coin',
						detailModel: 'Coin',
						followCategory: 'followCoins',
					})
					.then(function (response) {
						console.log('success');
					});

				const user = await axios
					.get(
						`${process.env.PRODUCT}/user/${localStorage.getItem(
							'email'
						)}`
					)
					.then((res) => res.data.data[0]);
				setUser(user);
			} catch (error) {
				console.log(error);
			}
		} else {
			SaveDataToLocalStorage('followCoins', id);
		}
	};

	const deleteCoins = async (id) => {
		if (localStorage.getItem('email')) {
			try {
				const res = await axios
					.post(`${process.env.PRODUCT}/unfollow`, {
						email: localStorage.getItem('email'),
						itemId: id,
						category: 'coin',
						detailModel: 'Coin',
						followCategory: 'followCoins',
					})
					.then(function (response) {
						console.log('success');
					})
					.catch(function (error) {
						console.log(error);
					});

				const user = await axios
					.get(
						`${process.env.PRODUCT}/user/${localStorage.getItem(
							'email'
						)}`
					)
					.then((res) => res.data.data[0]);
				setUser(user);
			} catch (error) {
				console.log(error);
			}
		} else {
			console.log('no login');
		}
	};
	return (
		<>
			<MainLayout>
				{/* mx-[2.1rem] */}
				<div className=" h-auto lg:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
					<h1 className="text-[2.8rem] font-semibold">
						Tỷ giá tiền điện tử hôm nay
					</h1>
					<div className="overflow-x-auto w-full">
						<table className="w-[99.6rem]  mt-[4rem]">
							<thead className="text-[1.7rem] font-medium h-[4.5rem] text-blue-text">
								<tr>
									<th className="w-[4.8rem]  bg-back-ground-1  border-r border-grey-boder rounded-l-[0.6rem]">
										#
									</th>
									<th className="w-[16rem]  h-[4.5rem] bg-back-ground-1 text-start pl-[3rem]">
										Tên
									</th>
									<th className=" bg-[#F5F5F5] text-start">
										Giá
									</th>
									<th className=" bg-back-ground-1 text-start pl-[1rem]">
										24h%
									</th>
									<th className=" bg-back-ground-1 text-start pl-[1rem]">
										7d%
									</th>
									<th className=" bg-back-ground-1 text-start pl-[3rem]">
										Vốn hoá thị trường
									</th>
									<th className=" bg-back-ground-1 rounded-r-[0.6rem] text-start">
										Khối lượng(24h)
									</th>
								</tr>
							</thead>
							<tbody className="w-full">
								{data && (
									<CoinList
										saveCoins={saveCoins}
										deleteCoins={deleteCoins}
										user={user}
										data={data?.coinList}
									/>
								)}
							</tbody>
						</table>
						{isLoading && <Loading />}
					</div>
					<div className="">
						{data && (
							<PaginationCoinList
								page={data?.pages}
								setPageNumber={setPageNumber}
								pageNav={pageNumber}
								router={router}
							/>
						)}
					</div>
				</div>
			</MainLayout>
		</>
	);
}

export default CoinPageView;
