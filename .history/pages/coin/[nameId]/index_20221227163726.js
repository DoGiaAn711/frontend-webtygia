import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

function CoinPageDetail({ data }) {
	return (
		<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-back-ground-1 rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
			{data &&
				data.map((coin) => (
					<div className="flex justify-between">
						<div className="flex h-[10rem] items-center">
							<img
								src={coin.image}
								className="w-[6rem] h-[6rem]"
							/>
							<div className="ml-[2.25rem]">
								<h1 className="text-[2.8rem] font-semibold capitalize text-back-text w-fit">
									{coin.nameId}({coin.symbol.toUpperCase()})
									<p className=" text-[1.4rem] text-grey-text">
										#Rank {coin.rank}
									</p>
								</h1>
							</div>
						</div>
						<div className="">
							<p className="text-[1.6rem] text-grey-text">
								Giá {coin.symbol.toUpperCase()}
							</p>
							<div className="flex items-center">
								<div className="text-black-text-2 text-[3.6rem] font-semibold">
									${coin.currentPrice}
								</div>
								<div
									className={`${
										+coin.priceChange24hPercent > 0
											? 'bg-price-increase'
											: 'bg-price-decrease'
									} text-white-text ml-[2rem] h-[3rem]`}
								>
									{+coin.priceChange24hPercent > 0 ? '+' : ''}
									{coin.priceChange7dPercent.slice(0, 7)}%
								</div>
							</div>
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
