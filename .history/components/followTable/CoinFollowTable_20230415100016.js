import CoinList from '@components/listItem/coin/CoinList';
import { DeleteDataToLocalStorage } from '@utils/saveDataToLocalStorage';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function CoinFollowTable({ data, populateField, setFollowDataOffline }) {
	const [coinData, setCoinData] = useState();
	const [isInFollowPageAndOffline, setInFollowPageAndOffline] =
		useState(false);
	const router = useRouter();
	const path = router.pathname;

	useEffect(() => {
		setCoinData(data);
	}, [data]);

	useEffect(() => {
		if (
			router.pathname.includes('/danh-muc-theo-doi') &&
			!localStorage.getItem('email')
		) {
			setInFollowPageAndOffline(true);
		}
	}, [typeof window]);

	const deleteCoins = async (id) => {
		const isEmail = localStorage.getItem('email');
		if (isEmail) {
			try {
				const res = await axios
					.post(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/unfollow`, {
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
				const data = await axios
					.get(
						`${
							process.env.NEXT_PUBLIC_PRODUCT_URL
						}/user-populate/${localStorage.getItem(
							'email'
						)}?populate=${populateField}`
					)
					.then((res) => res.data.data[0]);
				setCoinData(data);
			} catch (error) {
				console.log(error);
			}
		} else {
			DeleteDataToLocalStorage('followCoins', id);

			setFollowDataOffline((prev) => {
				const followCoins = prev.followCoins.filter(
					(item) => item._id !== id
				);
				return { ...prev, followCoins };
			});
		}
	};

	return (
		<div>
			<div className="overflow-x-auto w-full">
				<table className="w-[99.6rem]  mt-[4rem]">
					<thead className="text-[1.8rem] font-medium h-[4.5rem] text-blue-text">
						<tr>
							<th className="w-[4.8rem]  bg-back-ground-1  border-r border-grey-boder rounded-l-[0.6rem]">
								#
							</th>
							<th className="w-[16rem]  h-[4.5rem] bg-back-ground-1 text-start pl-[3rem]">
								Tên
							</th>
							<th className=" bg-[#F5F5F5] text-start">Giá</th>
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
						{coinData && (
							<CoinList
								user={coinData}
								deleteCoins={deleteCoins}
								data={coinData[populateField]}
								isInFollowPageAndOffline={
									isInFollowPageAndOffline
								}
							/>
						)}
					</tbody>
				</table>
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
	);
}

export default CoinFollowTable;
