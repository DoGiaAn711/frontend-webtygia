import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

const fetchCoins = async () => {
	return axios
		.get(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/coin/top-rank`)
		.then((res) => res.data.data)
		.catch((err) => console.log(err));
};

function Coin() {
	const { data, isLoading, isError, error, isFetching } = useQuery(
		'coin-top-rank',
		fetchCoins,
		{
			cacheTime: 3600000,
			// refetchOnWindowFocus: false,
			staleTime: 300000,
			refetchInterval: 300000,
		}
	);

	if (isLoading) {
		return <h2>Đang tải...</h2>;
	}
	if (isError) {
		return <h2>{error.message}</h2>;
	}
	// console.log(data);

	// useEffect(() => {
	// 	// setLoading(true)
	// 	fetch('http://localhost:5000/api/v1/coin/top-rank')
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setCoins(data.data);
	// 			// setLoading(false)
	// 		});
	// }, []);
	return (
		// bg-white-text
		<div className="  shadow-shadow-custom rounded-[1rem] bg-grey-text bg-opacity-30 mt-[4.6rem]">
			<div className="pt-[1.5rem] pl-[1.7rem] text-[1.6rem]">
				<p className="text-blue-text text-[1.8rem] font-semibold cursor-pointer">
					Tiền điện tử (Đô la)
				</p>
				<div className="py-[1.5rem]">
					<ul className="grid grid-cols-4 text-grey-text text-[1.4rem] font-semibold">
						<li className=" col-span-2">Mã</li>
						<li className="ml-[-3rem]">Giá</li>
						<li className="ml-[-1rem]">Thay đổi</li>
					</ul>
					{data &&
						data.map((coin) => (
							<ul
								key={coin.nameId}
								className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]"
							>
								<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer hover:opacity-80">
									<Link href={`/coin/${coin.nameId}`}>
										{/* <img
											className="inline-block w-[2.4rem] h-[2.4rem]"
											src={coin.image}
										/> */}
										<Image
											src={coin?.image}
											alt={coin?.symbol}
											// fill
											width={24}
											height={24}
											className=" inline-block"
										/>
										<span className="pl-[1rem]">
											{coin.symbol.toUpperCase()}
										</span>
									</Link>
								</li>
								<li className="text-[1.4rem] font-medium ml-[-3rem]">
									$
									{parseFloat(
										coin.currentPrice
									).toLocaleString()}
								</li>
								<li
									className={`text-[1.4rem] font-medium ${
										coin.priceChange1hPercent >= 0
											? 'text-price-increase'
											: 'text-price-decrease'
									} ml-[-1rem]`}
								>
									{coin.priceChange1hPercent.split('.')[0] +
										'.' +
										coin.priceChange1hPercent
											.split('.')[1]
											.slice(0, 2)}
									%
								</li>
							</ul>
						))}
				</div>
			</div>
		</div>
	);
}

export default Coin;
