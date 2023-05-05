import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import PriceDetail from '@components/detail/coin/priceDetail';
import dynamic from 'next/dynamic';
const ChartCoin = dynamic(
	() => import('../../../components/chart/coin/ChartCoin'),
	{
		ssr: false,
	}
);

function CoinPageDetail({ coin }) {
	return (
		<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-back-ground-1 rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
			{/* {data &&
				data.map((coin) => ( */}
			<div>
				<PriceDetail coin={coin} />
				<h2 className="text-[2.4rem] font-semibold">
					Công cụ chuyển đổi tiền tệ
				</h2>
				<div className="flex justify-between">
					<div className="ml-[3rem] flex items-center">
						<div className="mr-[1rem] border-r border-black">
							<input
								className=" outline-none text-[1.6rem]"
								placeholder="0"
							/>
						</div>
						<div className="flex h-[10rem] items-center">
							<img
								src={coin.image}
								className="w-[3.2rem] h-[3.2rem]"
							/>
							<div className="ml-[1rem]">
								<h1 className="text-[1.8rem] font-semibold capitalize text-back-text w-fit">
									{coin.nameId}
									<p className=" text-[1.4rem] text-grey-text ">
										{coin.symbol.toUpperCase()}
									</p>
								</h1>
							</div>
						</div>
					</div>
					<div className="mr-[3rem] flex items-center">
						<div className="mr-[1rem] border-r border-black">
							<input
								className=" outline-none text-[1.6rem]"
								placeholder="0"
							/>
						</div>
						<div className="flex h-[10rem] items-center">
							<img
								src={coin.image}
								className="w-[3.2rem] h-[3.2rem]"
							/>
							<div className="ml-[1rem]">
								<h1 className="text-[1.8rem] font-semibold capitalize text-back-text w-fit">
									{coin.nameId}
									<p className=" text-[1.4rem] text-grey-text ">
										{coin.symbol.toUpperCase()}
									</p>
								</h1>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-[2rem] border border-black">
					<h1 className="text-[2.4rem] font-semibold text-black-text ml-[2rem] my-[2rem]">
						Biểu đồ {coin.symbol.toUpperCase()}/USD
					</h1>

					<div className="flex justify-start text-grey-text text-[1.4rem] mb-[1rem]">
						<div className="ml-[4rem] cursor-pointer hover:opacity-80">
							1d
						</div>
						<div className="ml-[4rem] cursor-pointer hover:opacity-80">
							90d
						</div>
						<div className="ml-[4rem] cursor-pointer hover:opacity-80">
							Tất cả
						</div>
					</div>
					<ChartCoin />
				</div>
				<div className="mt-[3rem]">
					<h2 className="text-[2.4rem] font-semibold text-back-text">
						{coin.symbol.toUpperCase()} Dữ liệu về giá theo thời
						gian thực
					</h2>
					<p className="text-[1.6rem] font-medium text-grey-text-2">
						Giá{' ' + coin.nameId.toUpperCase() + ' '}hôm nay là $
						{coin.currentPrice + ' '}USD với khối lượng giao dịch
						trong 24 giờ là ${coin.volume24h.split('.')[0] + ' '}
						USD. Chúng tôi cập nhật
						{' ' + coin.symbol.toUpperCase() + ' '} của chúng tôi
						sang giá USD theo thời gian thực.
						{' ' + coin.nameId.toUpperCase() + ' '}
						{`${
							+coin.priceChange24hPercent > 0 ? 'tăng ' : 'giảm '
						}`}
						{' ' +
							`${
								+coin.priceChange24hPercent > 0
									? coin.priceChange24hPercent
									: coin.priceChange24hPercent.slice(0, 5)
							}`}
						% trong 24 giờ qua. Thứ hạng hiện tại trên là #
						{coin.rank}, với vốn hóa thị trường là $
						{coin.marketCap + ' '}USD. Lượng cung lưu hành là
						{' ' + coin.circulatingSupply + ' '}
						{coin.symbol.toUpperCase()} đồng coin và lượng cung tối
						đa là
						{' ' + coin.totalSupply + ' '}{' '}
						{coin.symbol.toUpperCase()} đồng coin.
					</p>
				</div>
			</div>
			{/* ))} */}
		</div>
	);
}

export default CoinPageDetail;

export async function getServerSideProps(context) {
	const nameId = context.params.nameId;
	// Fetch data from external API
	const coin = await fetch(
		`http://localhost:5000/api/v1/coin/detail/${nameId}`
	)
		.then((res) => res.json())
		.then((res) => res.data[0]);

	// Pass data to the page via props
	return { props: { coin } };
}
