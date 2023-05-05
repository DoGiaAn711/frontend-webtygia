import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useExchange } from '@services/exchange/useExchange';
import Link from 'next/link';

function Reference({ rank1WithChartData }) {
	// const { data, isLoading, isError, error, isFetching } =
	// 	useExchange('vietcombank');
	return (
		<div className="mt-[12px]">
			<p className="text-[24px] font-semibold">So sánh với</p>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 mt-[2rem] bg-grey-4 rounded-[10px] h-[210px] lg:h-[105px]">
				<div className="flex flex-col px-[20px] py-[10px]">
					<p className="text-[16px] font-medium border-b border-grey-boder">
						Vàng nhẫn SJC 99,99%(VND)
					</p>
					<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
						{parseFloat(
							rank1WithChartData?.nhansjc99_991chi2chi5chiBuy
						).toLocaleString()}
					</span>
					<span className=" text-end text-price-decrease text-[14px] font-medium">
						<Link href="/gia-vang/sjc" target="_blank">
							<OpenInNewIcon sx={{ fontSize: '2rem' }} />
						</Link>
					</span>
				</div>
				<div className="flex flex-col px-[20px] py-[10px]">
					<p className="text-[16px] font-medium border-b border-grey-boder">
						Vàng nữ trang 99,99%(VND)
					</p>
					<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
						{parseFloat(
							rank1WithChartData?.nutrang99_99percentBuy
						).toLocaleString()}
					</span>
					<span className=" text-end text-price-decrease text-[14px] font-medium">
						<Link href="/gia-vang/sjc" target="_blank">
							<OpenInNewIcon sx={{ fontSize: '2rem' }} />
						</Link>
					</span>
				</div>
				<div className="flex flex-col px-[20px] py-[10px]">
					<p className="text-[16px] font-medium border-b border-grey-boder">
						Vàng nữ trang 99%(VND)
					</p>
					<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
						{parseFloat(
							rank1WithChartData?.nutrang99percentBuy
						).toLocaleString()}
					</span>
					<span className=" text-end text-price-decrease text-[14px] font-medium">
						<Link href="/gia-vang/sjc" target="_blank">
							<OpenInNewIcon sx={{ fontSize: '2rem' }} />
						</Link>
					</span>
				</div>
				<div className="flex flex-col px-[20px] py-[10px]">
					<p className="text-[16px] font-medium border-b border-grey-boder">
						Vàng nữ trang 75%(VND)
					</p>
					<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
						{parseFloat(
							rank1WithChartData?.nutrang75percentBuy
						).toLocaleString()}
					</span>
					<span className=" text-end text-price-decrease text-[14px] font-medium">
						<Link href="/gia-vang/sjc" target="_blank">
							<OpenInNewIcon sx={{ fontSize: '2rem' }} />
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Reference;
