import React from 'react';

function ExchangeRate() {
	return (
		<>
			<h2 className="text-[2.4rem] font-semibold">
				Công cụ chuyển đổi tiền tệ
			</h2>
			<div className="flex justify-between flex-col sm:flex-row mt-[3.5rem]">
				<div className=" justify-between ml-[3rem] flex items-center">
					<div className="mr-[1rem] border-r border-black w-full ">
						<input
							// ref={inputCoin}
							// onChange={convertCoinToUsd}
							className=" outline-none text-[2rem] w-full "
							placeholder="0"
						/>
					</div>
					<div className=" w-[2.2rem]  text-[2rem]">VND</div>
				</div>
				<div className=" justify-between ml-[3rem] flex items-center">
					<div className="mr-[1rem] border-r border-black w-full">
						<input
							// ref={inputCoin}
							// onChange={convertCoinToUsd}
							className=" outline-none text-[2rem] w-full"
							placeholder="0"
						/>
					</div>
					<div className=" w-[2.2rem]  text-[2rem]">USD</div>
				</div>
			</div>
		</>
	);
}

export default ExchangeRate;
