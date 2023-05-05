import React from 'react';

function PhuQuySjcPriceTable({ data }) {
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
				<div className=" col-span-1 p-[1rem]">Hà Nội</div>
				<div className=" col-span-2 p-[1rem]">Vàng miếng SJC - SJC</div>
				<div className=" col-span-1 p-[1rem]">
					{(data?.sjcBuy / 1000000).toFixed(2)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{(data?.sjcSell / 1000000).toFixed(2)}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Vàng miếng SJC nhỏ - SJN
				</div>
				<div className=" col-span-1 p-[1rem]">
					{(data?.sjnBuy / 1000000).toFixed(2)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{(data?.sjnSell / 1000000).toFixed(2)}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Nhẫn tròn Phú Quý 9999 - NPQ
				</div>
				<div className=" col-span-1 p-[1rem]">
					{(data?.npqBuy / 1000000).toFixed(2)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{(data?.npqSell / 1000000).toFixed(2)}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Phú Quý Cát Tường (24K 999.9) - TTPQ
				</div>
				<div className=" col-span-1 p-[1rem]">
					{(data?.cngBuy / 1000000).toFixed(2)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{(data?.cngSell / 1000000).toFixed(2)}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					VÀNG TS 99 - PHÚ QUÝ - 099PQ
				</div>
				<div className=" col-span-1 p-[1rem]">
					{(data?.vang099Buy / 1000000).toFixed(2)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{(data?.vang099Sell / 1000000).toFixed(2)}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					VÀNG TS 9999 - PHÚ QUÝ - 24KPQ
				</div>
				<div className=" col-span-1 p-[1rem]">
					{(data?.vang24kBuy / 1000000).toFixed(2)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{(data?.vang24kSell / 1000000).toFixed(2)}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					VÀNG TS 999 - PHÚ QUÝ - 999PQ
				</div>
				<div className=" col-span-1 p-[1rem]">
					{(data?.vang999Buy / 1000000).toFixed(2)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{(data?.vang999Sell / 1000000).toFixed(2)}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					VÀNG TS 99 - KHÁC - 099
				</div>
				<div className=" col-span-1 p-[1rem]">
					{(data?.v99Buy / 1000000).toFixed(2)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{(data?.v99Sell / 1000000).toFixed(2)}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					VÀNG TS 999 - KHÁC - 999
				</div>
				<div className=" col-span-1 p-[1rem]">
					{(data?.v999Buy / 1000000).toFixed(2)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{(data?.v999Sell / 1000000).toFixed(2)}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					VÀNG TS 9999 - KHÁC - 24K
				</div>
				<div className=" col-span-1 p-[1rem]">
					{(data?.v9999Buy / 1000000).toFixed(2)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{(data?.v9999Sell / 1000000).toFixed(2)}
				</div>
			</div>
		</div>
	);
}

export default PhuQuySjcPriceTable;
