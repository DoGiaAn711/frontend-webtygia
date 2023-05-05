import React from 'react';

function BidvPriceTable({ data }) {
	return (
		<div className="w-full">
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.8rem] font-medium text-blue-text bg-grey-4 rounded-[4px]">
				<div className=" col-span-2 p-[1rem]">Kỳ hạn</div>
				<div className=" col-span-2 p-[1rem]">Lãi suất %/năm</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.8rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Không kỳ hạn</div>
				<div className=" col-span-2 p-[1rem]">{data?.khongkyhan}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.8rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">1 tháng</div>
				<div className=" col-span-2 p-[1rem]">{data?.month1}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.8rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">2 tháng</div>
				<div className=" col-span-2 p-[1rem]">{data?.month2}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.8rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">3 tháng</div>
				<div className=" col-span-2 p-[1rem]">{data?.month3}</div>
			</div>

			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.8rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">5 tháng</div>
				<div className=" col-span-2 p-[1rem]">{data?.month5}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.8rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">6 tháng</div>
				<div className=" col-span-2 p-[1rem]">{data?.month6}</div>
			</div>

			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.8rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">9 tháng</div>
				<div className=" col-span-2 p-[1rem]">{data?.month9}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.8rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">12 tháng</div>
				<div className=" col-span-2 p-[1rem]">{data?.month12}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.8rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">13 tháng</div>
				<div className=" col-span-2 p-[1rem]">{data?.month13}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.8rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">15 tháng</div>
				<div className=" col-span-2 p-[1rem]">{data?.month15}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.8rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">18 tháng</div>
				<div className=" col-span-2 p-[1rem]">{data?.month18}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.8rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">24 tháng</div>
				<div className=" col-span-2 p-[1rem]">{data?.month24}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.8rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">36 tháng</div>
				<div className=" col-span-2 p-[1rem]">{data?.month36}</div>
			</div>
		</div>
	);
}

export default BidvPriceTable;
