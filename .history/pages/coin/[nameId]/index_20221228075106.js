import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
// import ChartCoin from '@components/chart/coin/ChartCoin';
import dynamic from 'next/dynamic';
const ChartCoin = dynamic(
	() => import('../../../components/chart/coin/ChartCoin'),
	{
		ssr: false,
	}
);

function CoinPageDetail({ data }) {
	return (
		<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-back-ground-1 rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
			{data &&
				data.map((coin) => (
					<div key={coin.nameId}>
						<div className="  pb-[4rem]">
							<div className="flex flex-col sm:flex-row justify-between">
								<div className="flex h-[10rem] items-center">
									<img
										src={coin.image}
										className="w-[6rem] h-[6rem]"
									/>
									<div className="ml-[2.25rem]">
										<h1 className="text-[2.8rem] font-semibold capitalize text-back-text w-fit">
											{coin.nameId}(
											{coin.symbol.toUpperCase()})
											<p className=" text-[1.4rem] text-grey-text">
												#Rank {coin.rank}
											</p>
										</h1>
									</div>
								</div>
								<div className="">
									<p className="text-[1.6rem] text-grey-text font-semibold">
										Giá {coin.symbol.toUpperCase()}
									</p>
									<div className="flex items-center">
										<div className="text-black-text-2 text-[4.8rem] font-semibold">
											${coin.currentPrice}
										</div>
										<div
											className={`${
												+coin.priceChange24hPercent > 0
													? 'bg-price-increase'
													: 'bg-price-decrease'
											} text-white-text ml-[2rem] h-[3rem] text-center leading-[3rem] w-fit rounded-[0.6rem] text-[1.4rem]`}
										>
											{+coin.priceChange24hPercent > 0
												? '+'
												: ''}
											{coin.priceChange24hPercent.slice(
												0,
												5
											)}
											%
										</div>
									</div>
									<div className="flex">
										<div className=" text-grey-text text-[1.8rem] font-medium">
											Cao:
											<span className=" text-black-text-2 ml-[1rem]">
												${coin.high24h}
											</span>
										</div>
										<div className=" text-grey-text text-[1.8rem] font-medium ml-[1rem]">
											Thấp:
											<span className=" text-black-text-2 ml-[1rem]">
												${coin.low24h} (24h)
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="mt-[3.5rem] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[2rem] text-center">
								<div className="">
									<p className="text-[2rem] font-medium text-back-text">
										${coin.marketCap.split('.')[0]}
									</p>
									<p className=" text-grey-text-2 text-[1.8rem] font-medium mt-[1rem]">
										Vốn hoá
									</p>
								</div>
								<div className="">
									<p className="text-[2rem] font-medium text-back-text">
										$
										{
											coin.fullyDilutedValuation.split(
												'.'
											)[0]
										}
									</p>
									<p className=" text-grey-text-2 text-[1.8rem] font-medium mt-[1rem]">
										Vốn hoá thị trường pha loãng hoàn toàn
									</p>
								</div>
								<div className="">
									<p className="text-[2rem] font-medium text-back-text">
										${coin.circulatingSupply.split('.')[0]}
									</p>
									<p className=" text-grey-text-2 text-[1.8rem] font-medium mt-[1rem]">
										Lượng cung lưu hành
									</p>
								</div>
								<div className="">
									<p className="text-[2rem] font-medium text-back-text">
										${coin.totalSupply.split('.')[0]}
									</p>
									<p className=" text-grey-text-2 text-[1.8rem] font-medium mt-[1rem]">
										Tổng cung tối đa
									</p>
								</div>
								<div className="">
									<p className="text-[2rem] font-medium text-back-text">
										${coin.volume24h.split('.')[0]}
									</p>
									<p className=" text-grey-text-2 text-[1.8rem] font-medium mt-[1rem]">
										Khối lượng giao dịch 24h
									</p>
								</div>
							</div>
						</div>
						<div className="mt-[2rem] border border-black">
							<h1 className="text-[2.4rem] font-semibold text-black-text ml-[2rem] my-[2rem]">
								Biểu đồ {coin.symbol.toUpperCase()}/USD
							</h1>
							<ChartCoin />
						</div>
						<div className="mt-[3rem]">
							<h2 className="text-[2.4rem] font-semibold text-back-text">
								{coin.symbol.toUpperCase()} Dữ liệu về giá theo
								thời gian thực
							</h2>
						</div>
					</div>
				))}
		</div>
	);
}

export default CoinPageDetail;

export async function getServerSideProps(context) {
	const nameId = context.params.nameId;
	// Fetch data from external API
	const data = await fetch(
		`http://localhost:5000/api/v1/coin/detail/${nameId}`
	)
		.then((res) => res.json())
		.then((res) => res.data);

	// Pass data to the page via props
	return { props: { data } };
}
