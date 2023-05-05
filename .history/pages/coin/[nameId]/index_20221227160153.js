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
					<div>
						<div className="flex h-[10rem] items-center">
							<img
								src={coin.image}
								className="w-[6rem] h-[6rem]"
							/>
							<div className="ml-[2.25rem]">
								<h2 className="text-[2.8rem] font-semibold capitalize text-back-text">
									{coin.nameId}
								</h2>
								<p
									className={`${
										+coin.priceChange24hPercent > 0
											? 'text-price-increase'
											: 'text-price-decrease'
									} text-price-increase text-[1.6rem] font-medium`}
								>
									{+coin.priceChange24hPercent > 0 ? '+' : ''}
									{coin.priceChange24hPercent.slice(0, 7)}%
								</p>
							</div>
						</div>
						<div></div>
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
