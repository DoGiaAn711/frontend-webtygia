import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import HomeIcon from '@mui/icons-material/Home';

function MenuSideBar() {
	const router = useRouter();
	return (
		<div className="hidden xl:block w-[18.7rem]   xl:fixed top-[7.8rem] bg-white-text h-[119rem] ">
			<div className="mt-[3.1rem]">
				<ul className="flex flex-col items-center text-grey-text">
					<Link href="/">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer ${
								router.pathname == '/trang-chu'
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							{/* <HomeIcon className="mr-[1rem]" /> */}
							Trang chủ
						</li>
					</Link>
					<Link href="/gia-vang/sjc" className="mt-[1.4rem]">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer  ${
								router.pathname.includes('/gia-vang')
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Vàng
						</li>
					</Link>
					<Link href="/co-phieu" className="mt-[1.4rem]">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer ${
								router.pathname.includes('/co-phieu')
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Cổ phiếu
						</li>
					</Link>
					<Link href="/coin" className="mt-[1.4rem]">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer ${
								router.pathname.includes('/coin')
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Tiền điện tử
						</li>
					</Link>
					<Link href="/lai-suat-ngan-hang" className="mt-[1.4rem]">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer ${
								router.pathname.includes('/lai-suat-ngan-hang')
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Lãi suất ngân hàng
						</li>
					</Link>
					<Link href="/ty-gia-ngoai-te" className="mt-[1.4rem]">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer ${
								router.pathname.includes('/ty-gia-ngoai-te')
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Tỷ giá ngoại tệ
						</li>
					</Link>
					<Link href="/gia-xang-dau" className="mt-[1.4rem]">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer ${
								router.pathname.includes('/gia-xang-dau')
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Xăng dầu
						</li>
					</Link>
					<Link href="/tin-tuc" className="mt-[1.4rem]">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer ${
								router.pathname.includes('/tin-tuc')
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Tin tức
						</li>
					</Link>
					<Link href="/danh-muc-theo-doi" className="mt-[1.4rem]">
						<li
							className={`w-[16.2rem] h-[3.6rem] text-[1.6rem] pl-[1.2rem] leading-[3.6rem] cursor-pointer ${
								router.pathname == '/danh-muc-theo-doi'
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
