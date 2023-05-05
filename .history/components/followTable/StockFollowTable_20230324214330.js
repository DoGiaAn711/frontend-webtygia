import CoinList from '@components/listItem/coin/CoinList';
import StockList from '@components/listItem/stock/StockList';
import { DeleteDataToLocalStorage } from '@utils/saveDataToLocalStorage';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function StockFollowTable({ data, populateField, setFollowDataOffline }) {
	const [stockData, setStockData] = useState();
	const [isInFollowPageAndOffline, setInFollowPageAndOffline] =
		useState(false);
	const router = useRouter();
	const path = router.pathname;

	useEffect(() => {
		setStockData(data);
	}, [data]);

	useEffect(() => {
		if (
			router.pathname.includes('/danh-muc-theo-doi') &&
			!JSON.parse(localStorage.getItem('email'))
		) {
			setInFollowPageAndOffline(true);
		}
	}, [typeof window]);

	const deleteStocks = async (symbol) => {
		const isEmail = JSON.parse(localStorage.getItem('email'));
		if (isEmail) {
			try {
				const idStockDetail = await axios
					.get(`${process.env.PRODUCT}/stock/${symbol}`)
					.then((res) => res.data.data[0]._id);
				const res = await axios
					.post(`${process.env.PRODUCT}/unfollow`, {
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
							process.env.PRODUCT
						}/user-populate-symbol-stock/${localStorage.getItem(
							'email'
						)}`
					)
					.then((res) => res.data.data[0]);
				setStockData(user);
			} catch (error) {
				console.log(error);
			}
		} else {
			DeleteDataToLocalStorage('followStocks', symbol);

			setFollowDataOffline((prev) => {
				const followStocks = prev.followStocks.filter(
					(item) => item._id !== id
				);
				return { ...prev, followStocks };
			});
		}
	};

	return (
		<div className="overflow-x-auto w-full">
			<table className="w-[99.6rem] mt-[4rem] border-separate border-spacing-y-[6px]">
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
						deleteStocks={deleteStocks}
						user={stockData}
						data={stockData && stockData[populateField]}
						isInFollowPageAndOffline={isInFollowPageAndOffline}
						// isLoading={isLoading}
						// isError={isError}
						// exchangeName={exchangeName}
					/>
				</tbody>
			</table>
		</div>
	);
}

export default StockFollowTable;
