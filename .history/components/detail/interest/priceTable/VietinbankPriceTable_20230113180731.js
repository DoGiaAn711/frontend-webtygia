import React from 'react';

function VietinbankPriceTable({ data }) {
	return (
		<div className="w-full">
			<div className="grid grid-cols-6 gap-x-[2rem] text-[1.6rem] font-medium text-blue-text bg-grey-4 rounded-[4px]">
				<div className=" col-span-2 p-[1rem]">Kỳ hạn</div>
				<div className=" col-span-2 p-[1rem]">
					Lãi suất %/năm cho khách hàng cá nhân
				</div>
				<div className=" col-span-2 p-[1rem]">
					Lãi suất %/năm cho khách hàng tổ chức
				</div>
			</div>
			<div className="grid grid-cols-6 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Không kỳ hạn</div>
				<div className=" col-span-2 p-[1rem]">{data?.khongkyhan}</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.khongkyhanBusiness}
				</div>
			</div>
			<div className="grid grid-cols-6 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Dưới 1 tháng</div>
				<div className=" col-span-2 p-[1rem]">{data?.under1month}</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.under1monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-6 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">
					Từ 1 đến dưới 2 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from1to2monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-6 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">
					Từ 2 đến dưới 3 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from2to3month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from2to3monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-6 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">
					Từ 3 đến dưới 4 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from3to4month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from3to4monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-6 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">
					Từ 4 đến dưới 5 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from4to5month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from4to5monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-6 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">
					Từ 5 đến dưới 6 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from5to6month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from5to6monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-6 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">
					Từ 6 đến dưới 7 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from6to7month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from6to7monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-6 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">
					Từ 7 đến dưới 8 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from7to8month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from7to8monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-6 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">
					Từ 9 đến dưới 10 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from9to10month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from9to10monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-6 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">
					Từ 10 đến dưới 11 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from10to11month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from10to11monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-6 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">
					Từ 11 đến dưới 12 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from11to12month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from11to12monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-6 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">12 tháng</div>
				<div className=" col-span-2 p-[1rem]">{data?.month12}</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month12Business}
				</div>
			</div>
			<div className="grid grid-cols-6 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">
					Từ 12 đến dưới 18 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from12to18month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from12to18monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-6 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">
					Từ 18 đến dưới 24 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from18to24month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from18to24monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-6 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">
					Từ 24 đến dưới 36 tháng
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from24to36month}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.from24to36monthBusiness}
				</div>
			</div>
			<div className="grid grid-cols-6 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">36 tháng</div>
				<div className=" col-span-2 p-[1rem]">{data?.month36}</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month36Business}
				</div>
			</div>
			<div className="grid grid-cols-6 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Trên 36 tháng</div>
				<div className=" col-span-2 p-[1rem]">{data?.upper36month}</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.upper36monthBusiness}
				</div>
			</div>
		</div>
	);
}

export default VietinbankPriceTable;
