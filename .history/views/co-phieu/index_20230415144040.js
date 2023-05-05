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
			<MainLayout>
				{/* <div className="mt-[1rem] sm:mt-[4.6rem] mb-[2.5rem]">
					<StockNavigation />
					<div className=" h-auto sm:mt-[2rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
						<h1 className="text-[2.8rem] font-semibold">
							Báo giá cổ phiếu chứng khoán
						</h1>
						<div className="overflow-x-auto w-full">
							<table className="w-[99.6rem] mt-[4rem]">
								<thead className="text-[1.8rem] font-medium h-[4.5rem] text-blue-text">
									<tr>
										<th className="w-[4.8rem]  bg-back-ground-1  rounded-l-[0.6rem] ">
											Mã
										</th>
										{/* <th className="w-[16rem] max-w-[16rem] bg-back-ground-1 text-center pl-[3rem]">
										Tên cổ phiếu
									</th> */}
										<th className=" bg-[#F5F5F5] text-center">
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
								</thead>
								<tbody className=" h-[4.5rem] text-blue-text">
									<StockList
										data={data?.stockList}
										isLoading={isLoading}
										isError={isError}
									/>
								</tbody>
							</table>
						</div>
						<div className="w-full">
							<PaginationCoinList
								page={data?.pages}
								setPageNumber={setPageNumber}
								pageNav={pageNumber}
								router={router}
							/>
						</div>
					</div>
				</div> */}
			</MainLayout>
		</>
	);
}

export default CoPhieuView;
