import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function MenuSideBar() {
	const router = useRouter();
	return (
		<div className="hidden xl:block w-[20.7rem] ">
			<div className="mt-[3.1rem]">
				<ul className="flex flex-col items-center text-grey-text">
					<Link href="/">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer ${
								router.pathname == '/'
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Trang chủ
						</li>
					</Link>
					<Link href="/gold">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem] ${
								router.pathname == '/gold'
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Vàng
						</li>
					</Link>
					<Link href="/gold">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem] ${
								router.pathname == '/gold'
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Cổ phiếu
						</li>
					</Link>
					<Link href="/gold">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem] ${
								router.pathname == '/gold'
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Tiền điện tử
						</li>
					</Link>
					<Link href="/gold">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem] ${
								router.pathname == '/gold'
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Lãi suất ngân hàng
						</li>
					</Link>
					<Link href="/gold">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem] ${
								router.pathname == '/gold'
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Tỷ giá ngoại tệ
						</li>
					</Link>
					<Link href="/gold">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem] ${
								router.pathname == '/gold'
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Xăng dầu
						</li>
					</Link>
					<Link href="/gold">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem] ${
								router.pathname == '/gold'
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Tin tức
						</li>
					</Link>
					<Link href="/gold">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem] ${
								router.pathname == '/gold'
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Danh mục theo dõi
						</li>
					</Link>
					<li className="w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem]">
						Cổ phiếu
					</li>
					<li className="w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem]">
						Tiền diện tử
					</li>
					<li className="w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem]">
						Lãi suất ngân hàng
					</li>
					<li className="w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem]">
						Tỷ giá ngoại tệ
					</li>
					<li className="w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem]">
						Xăng dầu
					</li>
					<li className="w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem]">
						Tin tức
					</li>
					<li className="w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem]">
						Danh mục theo dõi
					</li>
				</ul>
			</div>
		</div>
	);
}

export default MenuSideBar;
