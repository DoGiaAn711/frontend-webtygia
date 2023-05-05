import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
// import ChartCoin from '@components/chart/coin/ChartCoin';
const ChartCoin = dynamic(
	() => import('../../../components/chart/coin/ChartCoin'),
	{
		ssr: false,
	}
);

const initialData = [
	{ time: '2018-10-19', value: 54.9 },
	{ time: '2018-10-22', value: 54.98 },
	{ time: '2018-10-23', value: 57.21 },
	{ time: '2018-10-24', value: 57.42 },
	{ time: '2018-10-25', value: 56.43 },
	{ time: '2018-10-26', value: 55.51 },
	{ time: '2018-10-29', value: 56.48 },
	{ time: '2018-10-30', value: 58.18 },
	{ time: '2018-10-31', value: 57.09 },
	{ time: '2018-11-01', value: 56.05 },
	{ time: '2018-11-02', value: 56.63 },
	{ time: '2018-11-05', value: 57.21 },
	{ time: '2018-11-06', value: 57.21 },
	{ time: '2018-11-07', value: 57.65 },
	{ time: '2018-11-08', value: 58.27 },
	{ time: '2018-11-09', value: 58.46 },
	{ time: '2018-11-12', value: 58.72 },
	{ time: '2018-11-13', value: 58.66 },
	{ time: '2018-11-14', value: 58.94 },
	{ time: '2018-11-15', value: 59.08 },
	{ time: '2018-11-16', value: 60.21 },
	{ time: '2018-11-19', value: 60.62 },
	{ time: '2018-11-20', value: 59.46 },
	{ time: '2018-11-21', value: 59.16 },
	{ time: '2018-11-23', value: 58.64 },
	{ time: '2018-11-26', value: 59.17 },
	{ time: '2018-11-27', value: 60.65 },
	{ time: '2018-11-28', value: 60.06 },
	{ time: '2018-11-29', value: 59.45 },
	{ time: '2018-11-30', value: 60.3 },
	{ time: '2018-12-03', value: 58.16 },
	{ time: '2018-12-04', value: 58.09 },
	{ time: '2018-12-06', value: 58.08 },
	{ time: '2018-12-07', value: 57.68 },
	{ time: '2018-12-10', value: 58.27 },
	{ time: '2018-12-11', value: 58.85 },
	{ time: '2018-12-12', value: 57.25 },
	{ time: '2018-12-13', value: 57.09 },
	{ time: '2018-12-14', value: 57.08 },
	{ time: '2018-12-17', value: 55.95 },
	{ time: '2018-12-18', value: 55.65 },
	{ time: '2018-12-19', value: 55.86 },
	{ time: '2018-12-20', value: 55.07 },
	{ time: '2018-12-21', value: 54.92 },
	{ time: '2018-12-24', value: 53.05 },
	{ time: '2018-12-26', value: 54.44 },
	{ time: '2018-12-27', value: 55.15 },
	{ time: '2018-12-28', value: 55.27 },
	{ time: '2018-12-31', value: 56.22 },
	{ time: '2019-01-02', value: 56.02 },
	{ time: '2019-01-03', value: 56.22 },
	{ time: '2019-01-04', value: 56.36 },
	{ time: '2019-01-07', value: 56.72 },
	{ time: '2019-01-08', value: 58.38 },
	{ time: '2019-01-09', value: 57.05 },
	{ time: '2019-01-10', value: 57.6 },
	{ time: '2019-01-11', value: 58.02 },
	{ time: '2019-01-14', value: 58.03 },
	{ time: '2019-01-15', value: 58.1 },
	{ time: '2019-01-16', value: 57.08 },
	{ time: '2019-01-17', value: 56.83 },
	{ time: '2019-01-18', value: 57.09 },
	{ time: '2019-01-22', value: 56.99 },
	{ time: '2019-01-23', value: 57.76 },
	{ time: '2019-01-24', value: 57.07 },
	{ time: '2019-01-25', value: 56.4 },
	{ time: '2019-01-28', value: 55.07 },
	{ time: '2019-01-29', value: 53.28 },
	{ time: '2019-01-30', value: 54.0 },
	{ time: '2019-01-31', value: 55.06 },
	{ time: '2019-02-01', value: 54.55 },
	{ time: '2019-02-04', value: 54.04 },
	{ time: '2019-02-05', value: 54.14 },
	{ time: '2019-02-06', value: 53.79 },
	{ time: '2019-02-07', value: 53.57 },
	{ time: '2019-02-08', value: 53.95 },
	{ time: '2019-02-11', value: 54.05 },
	{ time: '2019-02-12', value: 54.42 },
	{ time: '2019-02-13', value: 54.48 },
	{ time: '2019-02-14', value: 54.03 },
	{ time: '2019-02-15', value: 55.16 },
	{ time: '2019-02-19', value: 55.44 },
	{ time: '2019-02-20', value: 55.76 },
	{ time: '2019-02-21', value: 56.15 },
	{ time: '2019-02-22', value: 56.92 },
	{ time: '2019-02-25', value: 56.78 },
	{ time: '2019-02-26', value: 56.64 },
	{ time: '2019-02-27', value: 56.72 },
	{ time: '2019-02-28', value: 56.92 },
	{ time: '2019-03-01', value: 56.96 },
	{ time: '2019-03-04', value: 56.24 },
	{ time: '2019-03-05', value: 56.08 },
	{ time: '2019-03-06', value: 55.68 },
	{ time: '2019-03-07', value: 56.3 },
	{ time: '2019-03-08', value: 56.53 },
	{ time: '2019-03-11', value: 57.58 },
	{ time: '2019-03-12', value: 57.43 },
	{ time: '2019-03-13', value: 57.66 },
	{ time: '2019-03-14', value: 57.95 },
	{ time: '2019-03-15', value: 58.39 },
	{ time: '2019-03-18', value: 58.07 },
	{ time: '2019-03-19', value: 57.5 },
	{ time: '2019-03-20', value: 57.67 },
	{ time: '2019-03-21', value: 58.29 },
	{ time: '2019-03-22', value: 59.76 },
	{ time: '2019-03-25', value: 60.08 },
	{ time: '2019-03-26', value: 60.63 },
	{ time: '2019-03-27', value: 60.88 },
	{ time: '2019-03-28', value: 59.08 },
	{ time: '2019-03-29', value: 59.13 },
	{ time: '2019-04-01', value: 59.09 },
	{ time: '2019-04-02', value: 58.53 },
	{ time: '2019-04-03', value: 58.87 },
	{ time: '2019-04-04', value: 58.99 },
	{ time: '2019-04-05', value: 59.09 },
	{ time: '2019-04-08', value: 59.13 },
	{ time: '2019-04-09', value: 58.4 },
	{ time: '2019-04-10', value: 58.61 },
	{ time: '2019-04-11', value: 58.56 },
	{ time: '2019-04-12', value: 58.74 },
	{ time: '2019-04-15', value: 58.71 },
	{ time: '2019-04-16', value: 58.79 },
	{ time: '2019-04-17', value: 57.78 },
	{ time: '2019-04-18', value: 58.04 },
	{ time: '2019-04-22', value: 58.37 },
	{ time: '2019-04-23', value: 57.15 },
	{ time: '2019-04-24', value: 57.08 },
	{ time: '2019-04-25', value: 55.85 },
	{ time: '2019-04-26', value: 56.58 },
	{ time: '2019-04-29', value: 56.84 },
	{ time: '2019-04-30', value: 57.19 },
	{ time: '2019-05-01', value: 56.52 },
	{ time: '2019-05-02', value: 56.99 },
	{ time: '2019-05-03', value: 57.24 },
	{ time: '2019-05-06', value: 56.91 },
	{ time: '2019-05-07', value: 56.63 },
	{ time: '2019-05-08', value: 56.38 },
	{ time: '2019-05-09', value: 56.48 },
	{ time: '2019-05-10', value: 56.91 },
	{ time: '2019-05-13', value: 56.75 },
	{ time: '2019-05-14', value: 56.55 },
	{ time: '2019-05-15', value: 56.81 },
	{ time: '2019-05-16', value: 57.38 },
	{ time: '2019-05-17', value: 58.09 },
	{ time: '2019-05-20', value: 59.01 },
	{ time: '2019-05-21', value: 59.5 },
	{ time: '2019-05-22', value: 59.25 },
	{ time: '2019-05-23', value: 58.87 },
	{ time: '2019-05-24', value: 59.32 },
	{ time: '2019-05-28', value: 59.57 },
];

function CoinPageDetail({ data }) {
	return (
		<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-back-ground-1 rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
			{data &&
				data.map((coin) => (
					<div key={coin.nameId}>
						<div className=" border-b border-black pb-[4rem]">
							<div className="flex justify-between">
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
											{coin.priceChange7dPercent.slice(
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
							<div className="mt-[3.5rem] grid grid-cols-5 gap-[2rem] text-center">
								<div className="">
									<p className="text-[2rem] font-medium text-back-text">
										${coin.marketCap}
									</p>
									<p className=" text-grey-text-2 text-[1.8rem] font-medium mt-[1rem]">
										Vốn hoá
									</p>
								</div>
								<div className="">
									<p className="text-[2rem] font-medium text-back-text">
										${coin.fullyDilutedValuation}
									</p>
									<p className=" text-grey-text-2 text-[1.8rem] font-medium mt-[1rem]">
										Vốn hoá thị trường pha loãng hoàn toàn
									</p>
								</div>
								<div className="">
									<p className="text-[2rem] font-medium text-back-text">
										${coin.circulatingSupply}
									</p>
									<p className=" text-grey-text-2 text-[1.8rem] font-medium mt-[1rem]">
										Lượng cung lưu hành
									</p>
								</div>
								<div className="">
									<p className="text-[2rem] font-medium text-back-text">
										${coin.totalSupply}
									</p>
									<p className=" text-grey-text-2 text-[1.8rem] font-medium mt-[1rem]">
										Tổng cung tối đa
									</p>
								</div>
								<div className="">
									<p className="text-[2rem] font-medium text-back-text">
										${coin.volume24h}
									</p>
									<p className=" text-grey-text-2 text-[1.8rem] font-medium mt-[1rem]">
										Khối lượng giao dịch 24h
									</p>
								</div>
							</div>
						</div>
						<div className="mt-[2rem]">
							<h1 className="text-[2.4rem] font-semibold text-black-text">
								Biểu đồ {coin.symbol.toUpperCase()}
							</h1>
							<ChartCoin data={initialData} />
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
