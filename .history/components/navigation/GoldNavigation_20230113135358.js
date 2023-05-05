import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function GoldNavigation() {
	const router = useRouter();
	return (
		<div className=" grid grid-cols-7 items-center gap-x-[1rem] sm:gap-x-[2rem] mb-[2rem] px-[1rem] text-[2rem] bg-white rounded-[1.5rem] h-[5rem] shadow-shadow-custom">
			<div className=" col-span-1 text-center ">
				<Link
					className="block w-full h-full bg-blue-400 rounded-[1.5rem]"
					href="/gia-vang/sjc"
				>
					SJC
				</Link>
			</div>
			<div className=" col-span-1 text-center">
				<Link
					className={`block w-full h-full ${
						router.pathname.includes('/pnj')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/gia-vang/pnj"
				>
					PNJ
				</Link>
			</div>
			<div className=" col-span-1 text-center">
				<Link className="block w-full h-full" href="/gia-vang/doji">
					DOJI
				</Link>
			</div>
			<div className=" col-span-1 text-center">
				<Link
					className="block w-full h-full"
					href="/gia-vang/phu-quy-sjc"
				>
					Phú Quý
				</Link>
			</div>
			<div className=" col-span-2 text-center">
				<Link
					className="block w-full h-full"
					href="/gia-vang/bao-tin-minh-chau"
				>
					Bảo Tín Minh châu
				</Link>
			</div>
			<div className=" col-span-1 text-center">
				<Link className="block w-full h-full" href="/gia-vang/mi-hong">
					Mi Hồng
				</Link>
			</div>
		</div>
	);
}

export default GoldNavigation;
