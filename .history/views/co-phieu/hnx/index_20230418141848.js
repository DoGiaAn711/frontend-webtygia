import TopPreviewStock from '@components/detail/topPreviewStock/TopPreviewStock';
import dynamic from 'next/dynamic';
const StockList = dynamic(
	() => import('../../../components/listItem/stock/StockList'),
	{
		ssr: false,
	}
);
// import StockList from '@components/listItem/stock/StockList';
import MainLayout from '@components/layouts/mainLayout';
import StockNavigation from '@components/navigation/StockNavigation';
import PaginationCoinList from '@components/pagination/PaginationCoinList';
import Loading from '@components/UI/Loading';
import { useStockList } from '@services/stock/useStock';
import { useUserPopulateSymbolStock } from '@services/user/useUser';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SimpleChartCanvas from '@components/chart/stock/SimpleChartCanvas';

function HnxStockView() {
	// const [email, setEmail] = useState();
	const [user, setUser] = useState();
	const [pageNumber, setPageNumber] = useState(1);
	const [exchangeName, setExchangeName] = useState('hnx');
	const router = useRouter();

	const { data, isLoading, isError, error, isFetching } = useStockList(
		exchangeName,
		pageNumber
	);

	const { data: userFromDb } = useUserPopulateSymbolStock();

	useEffect(() => {
		// setEmail(localStorage.getItem('email'));
		// setCoinData(data);
		if (userFromDb) {
			setUser(userFromDb);
		}
	}, [userFromDb]);

	const saveStocks = async (symbol) => {
		try {
			const idStockDetail = await axios
				.get(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/stock/${symbol}`)
				.then((res) => res.data.data[0]._id);

			const res = await axios
				.post(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/follow`, {
					email: localStorage.getItem('email'),
					itemId: idStockDetail,
					category: 'stock',
					detailModel: 'StockDetail',
					followCategory: 'followStocks',
				})
				.then(function (response) {
					console.log('success');
				});

			const user = await axios
				.get(
					`${
						process.env.NEXT_PUBLIC_PRODUCT_URL
					}/user-populate-symbol-stock/${localStorage.getItem(
						'email'
					)}`
				)
				.then((res) => res.data.data[0]);
			setUser(user);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteStocks = async (symbol) => {
		try {
			const idStockDetail = await axios
				.get(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/stock/${symbol}`)
				.then((res) => res.data.data[0]._id);
			const res = await axios
				.post(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/unfollow`, {
					email: localStorage.getItem('email'),
					itemId: idStockDetail,
					category: 'stock',
					detailModel: 'StockDetail',
					followCategory: 'followStocks',
				})
				.then(function (response) {
					console.log('success');
				});

			const user = await axios
				.get(
					`${
						process.env.NEXT_PUBLIC_PRODUCT_URL
					}/user-populate-symbol-stock/${localStorage.getItem(
						'email'
					)}`
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
					<StockNavigation />
					<div className=" h-auto sm:mt-[2rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
						<h1 className="text-[2.8rem] font-semibold">
							Báo giá cổ phiếu chứng khoán
						</h1>

						<div>
							{/* <TopPreviewStock /> */}
							{/* <SimpleChartCanvas /> */}
						</div>
						<div className="overflow-x-auto w-full mt-[4rem]">
							<div className=" text-[12px] text-grey-text ml-auto">
								Giá x 1000 VNĐ. Khối lượng x 10 cổ phiếu.
							</div>
							<table className="w-[99.6rem] border-separate border-spacing-y-[6px]">
								<thead className="text-[1.8rem] font-medium h-[4.5rem] text-blue-text">
									<tr>
										{/* w-[4.8rem] */}
										<th className="w-[8rem]  bg-back-ground-1  rounded-[0.6rem] ">
											Mã
										</th>
										<th className="w-[10px] bg-white"></th>
										{/* <th className="w-[16rem] max-w-[16rem] bg-back-ground-1 text-center pl-[3rem]">
                                Tên cổ phiếu
                            </th> */}
										<th className=" bg-[#F5F5F5] block h-[4.5rem] leading-[4.5rem]  rounded-l-[0.6rem] text-center">
											Tham chiếu
										</th>
										<th className=" bg-back-ground-1 text-center w-[6rem]">
											Cao
										</th>
										<th className=" bg-back-ground-1 text-center pl-[1rem]">
											Thấp
										</th>
										<th className=" bg-back-ground-1 text-center ">
											Thay đổi
										</th>
										<th className=" bg-back-ground-1  text-center ">
											Thay đổi %
										</th>
										<th className=" bg-back-ground-1  text-center rounded-r-[0.6rem]">
											Khối lượng
										</th>
									</tr>
									<tr className="h-[4px] bg-white"></tr>
								</thead>
								<tbody className=" h-[4.5rem] text-blue-text">
									<StockList
										saveStocks={saveStocks}
										deleteStocks={deleteStocks}
										user={user}
										data={data?.stockList}
										isLoading={isLoading}
										isError={isError}
										// exchangeName={exchangeName}
									/>
								</tbody>
							</table>
							{isLoading && <Loading />}
						</div>
						<div className="w-full">
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
				</div>
			</MainLayout>
		</>
	);
}

export default HnxStockView;
