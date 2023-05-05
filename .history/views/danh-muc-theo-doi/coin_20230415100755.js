import CoinFollowTable from '@components/followTable/CoinFollowTable';
import MainLayout from '@components/layouts/mainLayout';
import PaginationCoinList from '@components/pagination/PaginationCoinList';
import Loading from '@components/UI/Loading';
import { useUserPopulatePagination } from '@services/user/useUser';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function CoinView() {
	const [email, setEmail] = useState();
	const [pageNumber, setPageNumber] = useState(1);
	// const [populateField, setPopulateField] = useState('followCoins');
	const [followDataOffline, setFollowDataOffline] = useState();

	const router = useRouter();

	const { dataisSuccess, data, isLoading, isError } =
		useUserPopulatePagination('followCoins', 5, pageNumber);
	console.log(data);
	useEffect(() => {
		const fetchDataFollow = async (arrIdCoin, arrIdStock, arrIdNews) => {
			const res = await axios
				.post(
					`${process.env.NEXT_PUBLIC_PRODUCT_URL}/user/preview-data-follow-offline`,
					{
						arrIdCoin,
						arrIdStock,
						arrIdNews,
					}
				)
				.then((res) => {
					const obj = {};
					obj.followCoins = res.data.data.coinList;
					obj.followStocks = res.data.data.stockList;
					obj.followNews = res.data.data.newsList;
					setFollowDataOffline(obj);
				})
				.catch((err) => console.log(err));
		};

		// const isLocalStorage = JSON.parse(localStorage.getItem('followCoins'));

		if (typeof window !== 'undefined') {
			const arrIdCoin = JSON.parse(localStorage.getItem('followCoins'));
			const arrIdStock = JSON.parse(localStorage.getItem('followStocks'));
			const arrIdNews = JSON.parse(localStorage.getItem('followNews'));
			fetchDataFollow(arrIdCoin, arrIdStock, arrIdNews);
		}
	}, [typeof window]);

	return (
		<>
			<MainLayout>
				<div className=" h-auto sm:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem]  lg:px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
					<div className="text-[2.8rem] font-semibold">
						Danh mục theo dõi tiền điện tử
					</div>
					{data ? (
						<div>
							<CoinFollowTable
								data={data}
								populateField="followCoins"
							/>
							{/* <div className="">
								{data && (
									<PaginationCoinList
										page={data?.pages}
										setPageNumber={setPageNumber}
										pageNav={pageNumber}
										router={router}
									/>
								)}
							</div> */}
						</div>
					) : (
						<div>
							<CoinFollowTable
								data={followDataOffline}
								populateField="followCoins"
								setFollowDataOffline={setFollowDataOffline}
							/>
						</div>
					)}

					{isLoading && <Loading />}
				</div>
			</MainLayout>
		</>
	);
}

export default CoinView;
