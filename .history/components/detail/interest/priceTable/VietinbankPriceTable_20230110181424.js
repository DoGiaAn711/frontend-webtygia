import React from 'react';

function VietinbankPriceTable({ data }) {
	return (
		<div className="w-full">
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-medium text-blue-text bg-grey-4 rounded-[4px]">
				<div className=" col-span-1 p-[1rem]">Kỳ hạn</div>
				<div className=" col-span-2 p-[1rem]">
					Lãi suất %/năm cho khách hàng cá nhân
				</div>
				<div className=" col-span-2 p-[1rem]">
					Lãi suất %/năm cho khách hàng tổ chức
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Không kỳ hạn</div>
				<div className=" col-span-2 p-[1rem]">{data?.khongkyhan}</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.khongkyhanBusiness}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Dưới 1 tháng</div>
				<div className=" col-span-2 p-[1rem]">{data?.under1month}</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.under1monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">
					Từ 1 đến dưới 2 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">
					Từ 1 đến dưới 2 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">
					Từ 1 đến dưới 2 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">
					Từ 1 đến dưới 2 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">
					Từ 1 đến dưới 2 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">
					Từ 1 đến dưới 2 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">
					Từ 1 đến dưới 2 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">
					Từ 1 đến dưới 2 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">
					Từ 1 đến dưới 2 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">
					Từ 1 đến dưới 2 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">
					Từ 1 đến dưới 2 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">
					Từ 1 đến dưới 2 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">
					Từ 1 đến dưới 2 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">
					Từ 1 đến dưới 2 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2monthBusiness}
				</div>
			</div>
		</div>
	);
}

export default VietinbankPriceTable;
