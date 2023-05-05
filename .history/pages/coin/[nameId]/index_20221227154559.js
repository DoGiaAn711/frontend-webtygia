import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchCoins = async (nameId) => {
	return axios
		.get(`http://localhost:5000/api/v1/coin/detail/${nameId}`)
		.then((res) => res.data.data.coinList)
		.catch((err) => console.log(err));
};

function CoinPageDetail() {
	const router = useRouter();
	// const path = router.asPath;

	const { data, isLoading, isError, error, isFetching } = useQuery(
		['coinList', router.params.nameId],
		fetchCoins(),
		{
			cacheTime: 600000,
			// refetchOnWindowFocus: false,
			staleTime: 120000,
			// refetchInterval: 120000,
		}
	);

	if (isLoading) {
		return <h2>Đang tải...</h2>;
	}
	if (isError) {
		return <h2>{error.message}</h2>;
	}
	return (
		<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-back-ground-1 rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
			{data &&
				data.map((coin) => (
					<h1 className="text-[2.8rem] font-semibold">
						{coin.symbol}
					</h1>
				))}
		</div>
	);
}

export default CoinPageDetail;

// export async function getServerSideProps(context) {
// 	const nameId = context.params.nameId;
// 	// Fetch data from external API
// 	const data = await fetch(
// 		`http://localhost:5000/api/v1/coin/detail/${nameId}`
// 	)
// 		.then((res) => res.json())
// 		.then((res) => res.data);

// 	// Pass data to the page via props
// 	return { props: { data } };
// }
