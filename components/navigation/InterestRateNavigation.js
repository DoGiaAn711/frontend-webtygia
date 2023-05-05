import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function InterestRateNavigation() {
	const router = useRouter();
	return (
		<div className=" flex flex-wrap gap-x-[1rem]  mb-[2rem] mx-[28px] lg:mx-0 text-[1.6rem] bg-white rounded-[1.5rem]  sm:shadow-shadow-custom">
			<div className="flex items-center w-fit h-[4.5rem]  mr-[1rem]">
				<Link
					className={`flex w-full h-full px-[1rem] text-center items-center scale-[1.05] ${
						router.pathname === '/lai-suat-ngan-hang'
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/lai-suat-ngan-hang"
				>
					Tất cả
				</Link>
			</div>
			<div className="flex items-center w-fit h-[4.5rem]  mr-[1rem]">
				<Link
					className={`flex w-full h-full px-[1rem] text-center items-center scale-[1.05] ${
						router.pathname.includes('/agribank')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/lai-suat-ngan-hang/agribank"
				>
					Agribank
				</Link>
			</div>
			<div className=" flex items-center   mr-[1rem] w-fit h-[4.5rem]   ">
				<Link
					className={`flex w-full h-full px-[1rem] text-center items-center  scale-[1.05] ${
						router.pathname.includes('/bidv')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/lai-suat-ngan-hang/bidv"
				>
					Bidv
				</Link>
			</div>
			<div className=" flex items-center   mr-[1rem] w-fit h-[4.5rem]  ">
				<Link
					className={`flex w-full px-[1rem] h-full text-center items-center  scale-[1.05] ${
						router.pathname.includes('/mbbank')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/lai-suat-ngan-hang/mbbank"
				>
					MB
				</Link>
			</div>
			<div className=" flex items-center  mr-[1rem] w-fit h-[4.5rem]  ">
				<Link
					className={`flex w-full px-[1rem] h-full text-center items-center  scale-[1.05] ${
						router.pathname.includes('/scb')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/lai-suat-ngan-hang/scb"
				>
					SCB
				</Link>
			</div>
			<div className="flex items-center   mr-[1rem] w-fit h-[4.5rem]  ">
				<Link
					className={`flex w-full px-[1rem] h-full text-center items-center  scale-[1.05] ${
						router.pathname.includes('/vib')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/lai-suat-ngan-hang/vib"
				>
					VIB
				</Link>
			</div>
			<div className=" flex items-center   mr-[1rem] w-fit h-[4.5rem]  ">
				<Link
					className={`flex w-full px-[1rem] h-full text-center items-center  scale-[1.05] ${
						router.pathname.includes('/vietcombank')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/lai-suat-ngan-hang/vietcombank"
				>
					Vietcombank
				</Link>
			</div>
			<div className=" flex items-center   mr-[1rem] w-fit h-[4.5rem]  ">
				<Link
					className={`flex w-full px-[1rem] h-full text-center items-center  scale-[1.05] ${
						router.pathname.includes('/vietinbank')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/lai-suat-ngan-hang/vietinbank"
				>
					Vietinbank
				</Link>
			</div>
		</div>
	);
}

export default InterestRateNavigation;
