import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function GoldNavigation() {
	const router = useRouter();
	return (
		<div className=" flex flex-wrap gap-x-[1rem]  mb-[2rem] mx-[1rem] lg:mx-0 text-[1.6rem] bg-white rounded-[1.5rem]  sm:shadow-shadow-custom">
			<div className="flex items-center w-fit h-[4.5rem]  mr-[1rem] ">
				<Link
					className={`flex w-full h-full px-[1rem] text-center items-center scale-[1.05] ${
						router.pathname.includes('/sjc')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/gia-vang/sjc"
				>
					SJC
				</Link>
			</div>
			<div className=" flex items-center w-fit h-[4.5rem]  mr-[1rem] ">
				<Link
					className={`flex w-full h-full px-[1rem] text-center items-center scale-[1.05] ${
						router.pathname.includes('/pnj')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/gia-vang/pnj"
				>
					PNJ
				</Link>
			</div>
			<div className=" flex items-center w-fit h-[4.5rem] mr-[1rem] ">
				<Link
					className={`flex w-full h-full px-[1rem] text-center items-center scale-[1.05] ${
						router.pathname.includes('/doji')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/gia-vang/doji"
				>
					DOJI
				</Link>
			</div>
			<div className=" flex items-center w-fit h-[4.5rem] mr-[1rem] ">
				<Link
					className={`flex w-full h-full px-[1rem] text-center items-center scale-[1.05] ${
						router.pathname.includes('/phu-quy-sjc')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/gia-vang/phu-quy-sjc"
				>
					Phú Quý
				</Link>
			</div>
			<div className="flex items-center w-fit h-[4.5rem] mr-[1rem] ">
				<Link
					className={`flex w-full h-full px-[1rem] text-center items-center scale-[1.05] ${
						router.pathname.includes('/bao-tin-minh-chau')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/gia-vang/bao-tin-minh-chau"
				>
					Bảo Tín Minh châu
				</Link>
			</div>
			<div className=" flex items-center w-fit h-[4.5rem] mr-[1rem] ">
				<Link
					className={`flex w-full h-full px-[1rem] text-center items-center scale-[1.05] ${
						router.pathname.includes('/mi-hong')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/gia-vang/mi-hong"
				>
					Mi Hồng
				</Link>
			</div>
		</div>
	);
}

export default GoldNavigation;
