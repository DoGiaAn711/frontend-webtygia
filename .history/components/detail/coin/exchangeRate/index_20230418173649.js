import React, { useRef } from 'react';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import Image from 'next/image';

function ExchagneRate({ data }) {
	const inputUsd = useRef();

	const inputCoin = useRef();

	const convertCoinToUsd = (e) => {
		let number = e.target.value;

		let result = number * data?.currentPrice;
		if (isNaN(result)) {
			inputUsd.current.value = 'Ngăn cách bằng dấu .';
		} else {
			inputUsd.current.value = result;
		}
	};

	const convertUsdToCoin = (e) => {
		let number = e.target.value;

		let result = number / data?.currentPrice;
		if (isNaN(result)) {
			inputCoin.current.value = 'Ngăn cách bằng dấu .';
		} else {
			inputCoin.current.value = result;
		}
	};
	return (
		<>
			<h2 className="text-[2.4rem] font-semibold">
				Công cụ chuyển đổi tiền tệ
			</h2>
			<div className="flex justify-between flex-col lg:flex-row  rounded-[10px] py-[0.5rem] lg:py-0 bg-grey-4">
				<div className=" justify-between ml-[3rem] mr-[5rem] md:mr-[3rem] flex items-center">
					<div className=" w-full  pr-[1rem]">
						<input
							ref={inputCoin}
							onChange={convertCoinToUsd}
							className=" outline-none text-[2rem] w-full bg-white  rounded-[6px] pl-[1rem]"
							placeholder="0"
						/>
					</div>
					<div className="flex h-[5rem] lg:h-[6.5rem] items-center w-[9rem]">
						{/* <img
							src={data?.image}
							className="w-[3.2rem] h-[3.2rem] "
						/> */}
						<div className="relative w-[3.2rem] h-[3.2rem]">
							<Image
								src={data?.image}
								alt={data?.symbol}
								fill
								// width={28}
								// height={28}
							/>
						</div>
						<div className="ml-[1rem]">
							<h1 className="text-[1.8rem] font-semibold capitalize text-back-text w-fit">
								{/* {data?.nameId} */}
								<p className=" text-[1.4rem] text-grey-text ">
									{data?.symbol.toUpperCase()}
								</p>
							</h1>
						</div>
					</div>
				</div>
				<div className="flex items-center w-[3rem] ml-[3rem] lg:ml-0">
					<SyncAltIcon sx={{ fontSize: '2.5rem' }} />
				</div>
				<div className=" justify-between ml-[3rem] mr-[5rem] md:mr-[3rem] lg:mr-[6rem]  flex items-center ">
					<div className=" w-full  pr-[1rem]">
						<input
							onChange={convertUsdToCoin}
							ref={inputUsd}
							className=" outline-none text-[2rem] w-full bg-white rounded-[6px] pl-[1rem]"
							placeholder="0"
						/>
					</div>
					<div className="flex h-[5rem] lg:h-[6.5rem] items-center w-[9rem]">
						{/* <img
							src="https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663"
							className="w-[3.2rem] h-[3.2rem]"
						/> */}
						<div className="relative w-[3.2rem] h-[3.2rem]">
							<Image
								src="https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663"
								fill
								// width={28}
								// height={28}
							/>
						</div>
						<div className="ml-[1rem]">
							<h1 className="text-[1.8rem] font-semibold capitalize text-back-text w-fit">
								{/* Tether */}
								<p className=" text-[1.4rem] text-grey-text ">
									USDT
								</p>
							</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ExchagneRate;
