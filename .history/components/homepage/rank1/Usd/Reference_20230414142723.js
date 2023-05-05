import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useExchange } from '@services/exchange/useExchange';
import Link from 'next/link';

function Reference() {
	const { data, isLoading, isError, error, isFetching } =
		useExchange('vietcombank');
	return (
		<div className="mt-[12px]">
			<p className="text-[24px] font-semibold">So sánh với</p>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 mt-[2rem] bg-grey-4 rounded-[10px] h-[214px] lg:h-[105px]">
				<div className="flex flex-col px-[20px] py-[10px]">
					<p className="text-[16px] font-medium border-b border-grey-boder">
						Euro (EUR)
					</p>
					<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
						{parseFloat(data?.eurSell).toLocaleString()}
					</span>
					<span className=" text-end text-price-decrease text-[14px] font-medium">
						<Link
							href="/ty-gia-ngoai-te/vietcombank"
							target="_blank"
						>
							<OpenInNewIcon sx={{ fontSize: '2rem' }} />
						</Link>
					</span>
				</div>
				<div className="flex flex-col px-[20px] py-[10px]">
					<p className="text-[16px] font-medium border-b border-grey-boder">
						Tệ(CNY)
					</p>
					<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
						{parseFloat(data?.cnySell).toLocaleString()}
					</span>
					<div className=" text-end text-price-decrease text-[14px] font-medium">
						<Link
							href="/ty-gia-ngoai-te/vietcombank"
							target="_blank"
						>
							<OpenInNewIcon sx={{ fontSize: '2rem' }} />
						</Link>
					</div>
				</div>
				<div className="flex flex-col px-[20px] py-[10px]">
					<p className="text-[16px] font-medium border-b border-grey-boder">
						Yên(JPY)
					</p>
					<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
						{parseFloat(data?.jpySell).toLocaleString()}
					</span>
					<span className=" text-end text-price-decrease text-[14px] font-medium">
						<Link
							href="/ty-gia-ngoai-te/vietcombank"
							target="_blank"
						>
							<OpenInNewIcon sx={{ fontSize: '2rem' }} />
						</Link>
					</span>
				</div>
				<div className="flex flex-col px-[20px] py-[10px]">
					<p className="text-[16px] font-medium border-b border-grey-boder">
						Rúp Nga(RUB)
					</p>
					<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
						{parseFloat(data?.rubSell).toLocaleString()}
					</span>
					<span className=" text-end text-price-decrease text-[14px] font-medium">
						<Link
							href="/ty-gia-ngoai-te/vietcombank"
							target="_blank"
						>
							<OpenInNewIcon sx={{ fontSize: '2rem' }} />
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Reference;

{
	/* <div>
	<p className="text-[24px] font-semibold">So sánh với</p>
	<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 mt-[2rem] bg-grey-4 rounded-[10px] h-[210px] lg:h-[105px]">
		<div className="flex flex-col px-[20px] py-[10px]">
			<p className="text-[16px] font-medium border-b border-grey-boder">
				Euro (EUR)
			</p>
			<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
				{data?.eurSell}
			</span>
			<span className=" text-end text-price-decrease text-[14px] font-medium">
				-1.20%{' '}
				<span>
					<ArrowDropDownIcon sx={{ fontSize: '2rem' }} />
				</span>
			</span>
		</div>
		<div className="flex flex-col px-[20px] py-[10px]">
			<p className="text-[16px] font-medium border-b border-grey-boder">
				Nhân Dân Tệ(CNY)
			</p>
			<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
				{data?.cnySell}
			</span>
			<span className=" text-end text-price-decrease text-[14px] font-medium">
				-1.20%{' '}
				<span>
					<ArrowDropDownIcon sx={{ fontSize: '2rem' }} />
				</span>
			</span>
		</div>
		<div className="flex flex-col px-[20px] py-[10px]">
			<p className="text-[16px] font-medium border-b border-grey-boder">
				Yên(JPY)
			</p>
			<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
				{data?.jpySell}
			</span>
			<span className=" text-end text-price-decrease text-[14px] font-medium">
				-1.20%{' '}
				<span>
					<ArrowDropDownIcon sx={{ fontSize: '2rem' }} />
				</span>
			</span>
		</div>
		<div className="flex flex-col px-[20px] py-[10px]">
			<p className="text-[16px] font-medium border-b border-grey-boder">
				Rúp Nga(RUB)
			</p>
			<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
				{data?.rubSell}
			</span>
			<span className=" text-end text-price-decrease text-[14px] font-medium">
				-1.20%{' '}
				<span>
					<ArrowDropDownIcon sx={{ fontSize: '2rem' }} />
				</span>
			</span>
		</div>
	</div>
</div>; */
}
