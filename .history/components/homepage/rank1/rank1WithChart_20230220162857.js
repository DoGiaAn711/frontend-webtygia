import React from 'react';
import ChartUsd from './ChartUsd';
import ExchangeRate from './ExchangeRate';
import NameHeader from './NameHeader';

function Rank1WithChart() {
	return (
		<div>
			<NameHeader />
			<div className="h-[1px] border border-grey-boder w-[calc(90%)] mx-auto my-[1rem]"></div>
			<div className="flex w-full">
				<div className="w-[calc(40%)] mr-[20px]">
					<ExchangeRate />
				</div>
				<div className="w-[calc(60%)] ">
					<ChartUsd />
				</div>
			</div>
			<div>
				<p className="text-[24px] font-semibold">Quan tâm gần đây</p>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 mt-[2rem] bg-grey-4 rounded-[10px] h-[210px] lg:h-[105px]">
					<div className="flex flex-col px-[20px] py-[10px]">
						<p className="text-[14px] font-medium border-b border-grey-boder">
							Bitcoin(BTC)
						</p>
						<span className=" text-blue-text text-[20px] font-medium mt-[7px] mb-[6px]">
							$23,200
						</span>
						<span className=" text-price-decrease text-[12px] font-medium">
							-1.20%
						</span>
					</div>
					<div className="flex flex-col px-[20px] py-[10px]">
						<p className="text-[14px] font-medium border-b border-grey-boder">
							Bitcoin(BTC)
						</p>
						<span className=" text-blue-text text-[20px] font-medium mt-[7px] mb-[6px]">
							$23,200
						</span>
						<span className=" text-price-decrease text-[12px] font-medium">
							-1.20%
						</span>
					</div>
					<div className="flex flex-col px-[20px] py-[10px]">
						<p className="text-[14px] font-medium border-b border-grey-boder">
							Bitcoin(BTC)
						</p>
						<span className=" text-blue-text text-[20px] font-medium mt-[7px] mb-[6px]">
							$23,200
						</span>
						<span className=" text-price-decrease text-[12px] font-medium">
							-1.20%
						</span>
					</div>
					<div className="flex flex-col px-[20px] py-[10px]">
						<p className="text-[14px] font-medium border-b border-grey-boder">
							Bitcoin(BTC)
						</p>
						<span className=" text-blue-text text-[20px] font-medium mt-[7px] mb-[6px]">
							$23,200
						</span>
						<span className=" text-price-decrease text-[12px] font-medium">
							-1.20%
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Rank1WithChart;
