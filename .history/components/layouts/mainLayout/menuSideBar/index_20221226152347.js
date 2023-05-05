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
					<Link href="/gold" className="mt-[1.4rem]">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer  ${
								router.pathname == '/gold'
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Vàng
						</li>
					</Link>
					<Link href="/stock">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem] ${
								router.pathname == '/stock'
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Cổ phiếu
						</li>
					</Link>
					<Link href="/coin">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem] ${
								router.pathname == '/coin'
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Tiền điện tử
						</li>
					</Link>
					<Link href="/interest-rate">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem] ${
								router.pathname == '/interest-rate'
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Lãi suất ngân hàng
						</li>
					</Link>
					<Link href="/exchange-rate">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem] ${
								router.pathname == '/exchange-rate'
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Tỷ giá ngoại tệ
						</li>
					</Link>
					<Link href="/petrol">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem] ${
								router.pathname == '/petrol'
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Xăng dầu
						</li>
					</Link>
					<Link href="/news">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem] ${
								router.pathname == '/news'
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Tin tức
						</li>
					</Link>
					<Link href="/category-following">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer mt-[1.4rem] ${
								router.pathname == '/category-following'
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Danh mục theo dõi
						</li>
					</Link>
				</ul>
			</div>
		</div>
	);
}

export default MenuSideBar;
