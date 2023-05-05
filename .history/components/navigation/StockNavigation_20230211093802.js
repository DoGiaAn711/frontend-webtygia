import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function StockNavigation() {
	const router = useRouter();
	return (
		<div className=" flex flex-wrap gap-x-[1rem] mb-[2rem]  text-[1.6rem] bg-white rounded-[1.5rem]  sm:shadow-shadow-custom">
			<div className="flex items-center w-fit h-[5rem]  mr-[1rem] ">
				<Link
					className={`flex w-full h-[4rem] px-[1rem] text-center items-center scale-[1.05] ${
						router.pathname.includes('/hnx') &&
						!router.pathname.includes('/hnx30')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/co-phieu/hnx"
				>
					HNX
				</Link>
			</div>
			<div className=" flex items-center w-fit h-[5rem]  mr-[1rem] ">
				<Link
					className={`flex w-full h-[4rem] px-[1rem] text-center items-center scale-[1.05] ${
						router.pathname.includes('/hose')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/co-phieu/hose"
				>
					HOSE
				</Link>
			</div>
			<div className=" flex items-center w-fit h-[5rem] mr-[1rem] ">
				<Link
					className={`flex w-full h-[4rem] px-[1rem] text-center items-center scale-[1.05] ${
						router.pathname.includes('/hnx30')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/co-phieu/hnx30"
				>
					HNX30
				</Link>
			</div>
			<div className=" flex items-center w-fit h-[5rem] mr-[1rem] ">
				<Link
					className={`flex w-full h-[4rem] px-[1rem] text-center items-center scale-[1.05] ${
						router.pathname.includes('/vn30')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/co-phieu/vn30"
				>
					VN30
				</Link>
			</div>
			<div className="flex items-center w-fit h-[5rem] mr-[1rem] ">
				<Link
					className={`flex w-full h-[4rem] px-[1rem] text-center items-center scale-[1.05] ${
						router.pathname.includes('/upcom')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/co-phieu/upcom"
				>
					Upcom
				</Link>
			</div>
		</div>
	);
}

export default StockNavigation;
