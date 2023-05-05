import React from 'react';

function ExchangeRate() {
	return (
		<>
			<h2 className="text-[2.4rem] font-semibold">
				Công cụ chuyển đổi tiền tệ
			</h2>
			<div className="flex justify-between flex-col sm:flex-row">
				<div className=" justify-between ml-[3rem] flex items-center">
					<div className="mr-[1rem] border-r border-black w-full">
						<input
							// ref={inputCoin}
							// onChange={convertCoinToUsd}
							className=" outline-none text-[2rem] w-full"
							placeholder="0"
						/>
					</div>
					<div className="flex h-[10rem] items-center w-fit">
						{/* <img
							src="https://www.thegef.org/sites/default/files/country-flags/vn.gif"
							className="w-[3.2rem] h-[3.2rem] round-[100px]"
						/> */}
						<div className="ml-[1rem]">
							{/* <h1 className="text-[1.8rem] font-semibold capitalize text-back-text w-fit">
								bitcoin
								<p className=" text-[1.4rem] text-grey-text ">
									BTC
								</p>
							</h1> */}
							VND
						</div>
					</div>
				</div>
				<div className=" justify-between ml-[3rem] sm:mr-[3rem] flex items-center">
					<div className="mr-[1rem] border-r border-black w-full">
						<input
							// onChange={convertUsdToCoin}
							// ref={inputUsd}
							className=" outline-none text-[2rem]"
							placeholder="0"
						/>
					</div>
					<div className=" w-fit text-[2rem]">USD</div>
				</div>
			</div>
		</>
	);
}

export default ExchangeRate;
