import React from 'react';

function AgribankPriceTable({ data }) {
	return (
		<div className="w-full text-[1.7rem]">
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.8rem] font-medium text-blue-text bg-grey-4 rounded-[4px]">
				<div className=" col-span-1 p-[1rem]">Kỳ hạn</div>
				<div className=" col-span-2 p-[1rem]">
					Lãi suất %/năm cho khách hàng cá nhân
				</div>
				<div className=" col-span-2 p-[1rem]">
					Lãi suất %/năm cho khách hàng tổ chức
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Không kỳ hạn</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.khongkyhanPersonal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.khongkyhanBusiness}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">1 tháng</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month1Personal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month1Business}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">2 tháng</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month2Personal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month2Business}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">3 tháng</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month3Personal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month3Business}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">4 tháng</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month4Personal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month4Business}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">5 tháng</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month5Personal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month5Business}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">6 tháng</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month6Personal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month6Business}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">7 tháng</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month7Personal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month7Business}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">8 tháng</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month8Personal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month8Business}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">9 tháng</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month9Personal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month9Business}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">10 tháng</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month10Personal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month10Business}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">11 tháng</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month11Personal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month11Business}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">12 tháng</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month12Personal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month12Business}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">13 tháng</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month13Personal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month13Business}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">15 tháng</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month15Personal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month15Business}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">18 tháng</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month18Personal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month18Business}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem]  font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">24 tháng</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month24Personal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month24Business}
				</div>
			</div>
		</div>
	);
}

export default AgribankPriceTable;
