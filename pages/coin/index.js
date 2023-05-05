// import React from 'react';
// import dynamic from 'next/dynamic';
// // const CoinList = dynamic(
// // 	() => import('../../components/listItem/coin/CoinList'),
// // 	{
// // 		ssr: false,
// // 	}
// // );
// import CoinList from '@components/listItem/coin/CoinList';

// function CoinPage() {
// 	return (
// 		<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
// 			<h1 className="text-[2.8rem] font-semibold">
// 				Tỷ giá tiền điện tử hôm nay
// 			</h1>
// 			<div className="overflow-x-auto w-full">
// 				<table className="w-[78.9rem] mt-[4rem]">
// 					<thead className="text-[1.4rem] font-medium h-[4.5rem] text-blue-text">
// 						<tr>
// 							<th className="w-[4.8rem]  bg-back-ground-1  border-r border-grey-boder rounded-l-[0.6rem]">
// 								#
// 							</th>
// 							<th className="w-[16rem]  h-[4.5rem] bg-back-ground-1 text-start pl-[3rem]">
// 								Tên
// 							</th>
// 							<th className=" bg-[#F5F5F5] text-start">Giá</th>
// 							<th className=" bg-back-ground-1 text-start pl-[1rem]">
// 								24h%
// 							</th>
// 							<th className=" bg-back-ground-1 text-start pl-[1rem]">
// 								7d%
// 							</th>
// 							<th className=" bg-back-ground-1 text-start pl-[3rem]">
// 								Vốn hoá thị trường
// 							</th>
// 							<th className=" bg-back-ground-1 rounded-r-[0.6rem] text-start">
// 								Khối lượng(24h)
// 							</th>
// 						</tr>
// 					</thead>
// 					<tbody className="w-full">
// 						<CoinList />
// 					</tbody>
// 				</table>
// 			</div>
// 		</div>
// 	);
// }

// export default CoinPage;

// // export async function getServerSideProps() {
// // 	// Fetch data from external API
// // 	const data = await fetch(
// // 		`http://localhost:5000/api/v1/coin/markets?per_page=100&page=1`
// // 	)
// // 		.then((res) => res.json())
// // 		.then((res) => res.data.coinList);

// // 	// Pass data to the page via props
// // 	return { props: { data } };
// // }

import CoinPageView from '@views/coin';

import React from 'react';

function CoinPage() {
	return <CoinPageView />;
}

export default CoinPage;
