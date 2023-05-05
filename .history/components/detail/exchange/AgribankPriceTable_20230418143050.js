import React from 'react';

function AgribankPriceTable({ data }) {
	return (
		<div className="w-full text-[1.7rem]">
			<div className="flex justify-end w-[104rem] text-[12px] text-grey-text">
				Đơn vị: VND
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.8rem] font-medium text-blue-text bg-grey-4 rounded-[4px]">
				<div className=" col-span-1 p-[1rem]">Ngoại tệ</div>
				<div className=" col-span-1 p-[1rem]">Mua tiền mặt</div>
				<div className=" col-span-1 p-[1rem]">Mua chuyển khoản</div>
				<div className=" col-span-1 p-[1rem]">Bán</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">USD</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.usdBuyCast > 1000
						? parseFloat(data?.usdBuyCast).toLocaleString()
						: data?.usdBuyCast}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.usdBuyTransfer > 1000
						? parseFloat(data?.usdBuyTransfer).toLocaleString()
						: data?.usdBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.usdSell > 1000
						? parseFloat(data?.usdSell).toLocaleString()
						: data?.usdSell}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">EUR</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.eurBuyCast > 1000
						? parseFloat(data?.eurBuyCast).toLocaleString()
						: data?.eurBuyCast}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.eurBuyTransfer > 1000
						? parseFloat(data?.eurBuyTransfer).toLocaleString()
						: data?.eurBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.eurSell > 1000
						? parseFloat(data?.eurSell).toLocaleString()
						: data?.eurSell}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">AUD</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.audBuyCast > 1000
						? parseFloat(data?.audBuyCast).toLocaleString()
						: data?.audBuyCast}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.audBuyTransfer > 1000
						? parseFloat(data?.audBuyTransfer).toLocaleString()
						: data?.audBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.audSell > 1000
						? parseFloat(data?.audSell).toLocaleString()
						: data?.audSell}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">CAD</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.cadBuyCast > 1000
						? parseFloat(data?.cadBuyCast).toLocaleString()
						: data?.cadBuyCast}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.cadBuyTransfer > 1000
						? parseFloat(data?.cadBuyTransfer).toLocaleString()
						: data?.cadBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.cadSell > 1000
						? parseFloat(data?.cadSell).toLocaleString()
						: data?.cadSell}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">CHF</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.chfBuyCast > 1000
						? parseFloat(data?.chfBuyCast).toLocaleString()
						: data?.chfBuyCast}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.chfBuyTransfer > 1000
						? parseFloat(data?.chfBuyTransfer).toLocaleString()
						: data?.chfBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.chfSell > 1000
						? parseFloat(data?.chfSell).toLocaleString()
						: data?.chfSell}
				</div>
			</div>

			<div className="grid grid-cols-4 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">GBP</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.gbpBuyCast > 1000
						? parseFloat(data?.gbpBuyCast).toLocaleString()
						: data?.gbpBuyCast}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.gbpBuyTransfer > 1000
						? parseFloat(data?.gbpBuyTransfer).toLocaleString()
						: data?.gbpBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.gbpSell > 1000
						? parseFloat(data?.gbpSell).toLocaleString()
						: data?.gbpSell}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">HKD</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.hkdBuyCast > 1000
						? parseFloat(data?.hkdBuyCast).toLocaleString()
						: data?.hkdBuyCast}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.hkdBuyTransfer > 1000
						? parseFloat(data?.hkdBuyTransfer).toLocaleString()
						: data?.hkdBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.hkdSell > 1000
						? parseFloat(data?.hkdSell).toLocaleString()
						: data?.hkdSell}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">JPY</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.jpyBuyCast > 1000
						? parseFloat(data?.jpyBuyCast).toLocaleString()
						: data?.jpyBuyCast}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.jpyBuyTransfer > 1000
						? parseFloat(data?.jpyBuyTransfer).toLocaleString()
						: data?.jpyBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.jpySell > 1000
						? parseFloat(data?.jpySell).toLocaleString()
						: data?.jpySell}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">KRW</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.krwBuyCast > 1000
						? parseFloat(data?.krwBuyCast).toLocaleString()
						: data?.krwBuyCast}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.krwBuyTransfer > 1000
						? parseFloat(data?.krwBuyTransfer).toLocaleString()
						: data?.krwBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.krwSell > 1000
						? parseFloat(data?.krwSell).toLocaleString()
						: data?.krwSell}
				</div>
			</div>

			<div className="grid grid-cols-4 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">NZD</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nzdBuyCast > 1000
						? parseFloat(data?.nzdBuyCast).toLocaleString()
						: data?.nzdBuyCast}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nzdBuyTransfer > 1000
						? parseFloat(data?.nzdBuyTransfer).toLocaleString()
						: data?.nzdBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nzdSell > 1000
						? parseFloat(data?.nzdSell).toLocaleString()
						: data?.nzdSell}
				</div>
			</div>

			<div className="grid grid-cols-4 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">SGD</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sgdBuyCast > 1000
						? parseFloat(data?.sgdBuyCast).toLocaleString()
						: data?.sgdBuyCast}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sgdBuyTransfer > 1000
						? parseFloat(data?.sgdBuyTransfer).toLocaleString()
						: data?.sgdBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sgdSell > 1000
						? parseFloat(data?.sgdSell).toLocaleString()
						: data?.sgdSell}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">THB</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.thbBuyCast > 1000
						? parseFloat(data?.thbBuyCast).toLocaleString()
						: data?.thbBuyCast}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.thbBuyTransfer > 1000
						? parseFloat(data?.thbBuyTransfer).toLocaleString()
						: data?.thbBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.thbSell > 1000
						? parseFloat(data?.thbSell).toLocaleString()
						: data?.thbSell}
				</div>
			</div>
		</div>
	);
}

export default AgribankPriceTable;
