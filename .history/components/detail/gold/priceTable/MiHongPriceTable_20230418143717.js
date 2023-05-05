import React from 'react';

function MiHongPriceTable({ data }) {
	return (
		<div className="w-full">
			<div className="flex justify-end w-full text-[12px] text-grey-text">
				Đơn vị: 1000.000 VND
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.8rem] font-medium text-blue-text bg-grey-4 rounded-[4px]">
				<div className=" col-span-1 p-[1rem]">Khu vực</div>
				<div className=" col-span-2 p-[1rem]">Loại vàng</div>
				<div className=" col-span-1 p-[1rem]">Mua vào</div>
				<div className=" col-span-1 p-[1rem]">Bán ra</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Hồ Chí Minh</div>
				<div className=" col-span-2 p-[1rem]">Vàng miếng SJC</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjcBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjcSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 99,9%</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vang999Buy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vang999Sell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 98,5%</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vang985Buy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vang985Sell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 98,0%</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vang980Buy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vang980Sell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 95,0%</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vang950Buy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vang950Sell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 75,0%</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vang750Buy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vang750Sell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 68,0%</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vang680Buy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vang680Sell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 61,0%</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vang610Buy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vang610Sell / 1000000}
				</div>
			</div>
		</div>
	);
}

export default MiHongPriceTable;
