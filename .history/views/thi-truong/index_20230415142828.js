import MainLayout from '@components/layouts/mainLayout';
import { Avatar } from '@mui/material';
import Link from 'next/link';
import React from 'react';

function MarketView() {
	return (
		<MainLayout>
			<div className="px-[28px] py-[1rem]">
				<div className="text-[28px] font-semibold mb-[1rem]">
					Thị trường
				</div>
				<div className="grid grid-cols-2 justify-items-center gap-x-[28px] gap-y-[20px]">
					<Link href="/gia-vang/sjc" className="block w-full h-full">
						<div className="flex flex-col p-[2rem] items-start col-span-1 shadow-xl w-full h-[16rem] rounded-[1.5rem]">
							<div>
								<Avatar className="w-[6rem] h-[6rem]" />
							</div>
							<div className="text-[20px] font-medium mt-[1rem]">
								Vàng
							</div>
						</div>
					</Link>
					<Link href="/co-phieu" className="block w-full h-full">
						<div className="flex flex-col p-[2rem] items-start col-span-1 shadow-xl  w-full h-[16rem] rounded-[1.5rem]">
							<div>
								<Avatar className="w-[6rem] h-[6rem]" />
							</div>
							<div className="text-[20px] font-medium mt-[1rem]">
								Cổ phiếu
							</div>
						</div>
					</Link>
					<Link href="/coin" className="block w-full h-full">
						<div className="flex flex-col p-[2rem] items-start col-span-1 shadow-xl  w-full h-[16rem] rounded-[1.5rem]">
							<div className="w-[25px]">
								<svg
									width="50"
									height="50"
									viewBox="0 0 19 19"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0_626_24)">
										<path
											d="M15.6618 9.46877C15.6594 12.8707 12.8858 15.6676 9.52237 15.6602C6.14597 15.6532 3.3333 12.828 3.33888 9.45019C3.34491 6.09701 6.14504 3.33774 9.54095 3.3396C12.9206 3.34099 15.6645 6.08865 15.6622 9.46877H15.6618ZM10.0875 12.2545C10.3666 12.2387 10.6197 12.2364 10.8695 12.2081C12.0968 12.0688 12.7302 10.6051 11.9872 9.61969C11.8962 9.49895 11.8939 9.43162 11.9849 9.30763C12.355 8.80287 12.4103 8.24702 12.1577 7.68003C11.912 7.12929 11.482 6.79123 10.8718 6.71833C10.6173 6.68814 10.3592 6.68629 10.087 6.67096C10.087 6.48986 10.0931 6.31758 10.0856 6.14576C10.0731 5.84625 9.91894 5.65214 9.67144 5.60942C9.26326 5.5393 8.9995 5.75338 8.98696 6.17038C8.98185 6.34033 8.98603 6.51029 8.98603 6.68675C8.87923 6.68675 8.80493 6.68675 8.73109 6.68675C8.27369 6.68675 7.81629 6.68304 7.35936 6.68814C7.0473 6.69186 6.84159 6.84556 6.79608 7.094C6.71992 7.50914 6.93864 7.77708 7.36586 7.7873C7.53024 7.79148 7.69463 7.78776 7.85994 7.78776V11.1368C7.67513 11.1368 7.50285 11.1307 7.33149 11.1382C7.03198 11.1507 6.83787 11.3049 6.79562 11.5528C6.7255 11.961 6.93957 12.2294 7.35703 12.2359C7.83255 12.2434 8.30852 12.2373 8.7845 12.2382C8.84951 12.2382 8.91405 12.2438 8.9865 12.2471C8.9865 12.437 8.98185 12.6042 8.98742 12.7704C8.99671 13.0435 9.13045 13.2422 9.33895 13.3054C9.73552 13.4256 10.0643 13.1981 10.0856 12.7816C10.0945 12.6097 10.087 12.4375 10.087 12.2536L10.0875 12.2545Z"
											fill="#5646FF"
										/>
										<path
											d="M4.46097 3.91463C4.45587 4.83454 3.70174 5.57799 2.77811 5.57474C1.84984 5.57102 1.10454 4.81178 1.11336 3.87841C1.12218 2.95989 1.88003 2.22062 2.80551 2.22759C3.72495 2.23455 4.46608 2.98961 4.46097 3.91463Z"
											fill="#5646FF"
										/>
										<path
											d="M16.0351 17.0572C15.1152 17.0525 14.3708 16.2989 14.374 15.3757C14.3773 14.4474 15.1365 13.7017 16.0699 13.71C16.9884 13.7184 17.7286 14.4758 17.7216 15.4008C17.7151 16.3202 16.9601 17.0618 16.0351 17.0572Z"
											fill="#5646FF"
										/>
										<path
											d="M8.98242 8.91153V7.80123C9.03907 7.79659 9.09155 7.78916 9.14449 7.78916C9.63764 7.78823 10.1308 7.7873 10.624 7.78916C10.9829 7.79055 11.2142 8.01716 11.2086 8.35801C11.203 8.69328 10.9773 8.91014 10.6267 8.91107C10.0853 8.91292 9.54384 8.91107 8.98242 8.91107V8.91153Z"
											fill="#5646FF"
										/>
										<path
											d="M8.98386 11.137V10.0383C9.00383 10.0313 9.02566 10.0169 9.04748 10.0165C9.6024 10.0151 10.1569 10.0086 10.7118 10.0178C11.002 10.0225 11.211 10.2723 11.2086 10.5783C11.2068 10.8774 11.0039 11.1254 10.7234 11.1314C10.2121 11.143 9.70038 11.1356 9.18865 11.1365C9.12735 11.1365 9.06652 11.1365 8.9834 11.1365L8.98386 11.137Z"
											fill="#5646FF"
										/>
										<path
											d="M9.5 0C7.52366 0 5.68848 0.603676 4.16815 1.63643L5.02676 2.37105C6.32234 1.55609 7.85614 1.08476 9.5 1.08476C14.1478 1.08476 17.9152 4.85216 17.9152 9.5C17.9152 10.6786 17.6728 11.8005 17.2354 12.8184L18.0945 13.553C18.6754 12.3238 19 10.9498 19 9.5C19 4.25313 14.7469 0 9.5 0ZM9.5 17.9148C4.85262 17.9148 1.08522 14.1474 1.08522 9.5C1.08522 8.51601 1.25379 7.57195 1.56445 6.6943L0.68819 5.94435C0.244256 7.04257 0 8.24296 0 9.5C0 14.7464 4.25359 19 9.5 19C11.2818 19 12.9488 18.5096 14.374 17.6557L13.4982 16.9062C12.3089 17.5498 10.9474 17.9148 9.5 17.9148Z"
											fill="#5646FF"
										/>
									</g>
									{/* <defs>
									<clipPath id="clip0_626_24">
										<rect width="19" height="19" fill="white" />
									</clipPath>
								</defs> */}
								</svg>
							</div>
							<div className="text-[20px] font-medium mt-[1rem]">
								Tiền điện tử
							</div>
						</div>
					</Link>
					<Link
						href="/lai-suat-ngan-hang"
						className="block w-full h-full"
					>
						<div className="flex flex-col p-[2rem] items-start col-span-1 shadow-xl  w-full h-[16rem] rounded-[1.5rem]">
							<div>
								<Avatar className="w-[6rem] h-[6rem]" />
							</div>
							<div className="text-[20px] font-medium mt-[1rem]">
								Lãi suất
							</div>
						</div>
					</Link>
					<Link
						href="/ty-gia-ngoai-te"
						className="block w-full h-full"
					>
						<div className="flex flex-col p-[2rem] items-start col-span-1 shadow-xl  w-full h-[16rem] rounded-[1.5rem]">
							<div>
								<Avatar className="w-[6rem] h-[6rem]" />
							</div>
							<div className="text-[20px] font-medium mt-[1rem]">
								Ngoại tệ
							</div>
						</div>
					</Link>
					<Link href="/gia-xang-dau" className="block w-full h-full">
						<div className="flex flex-col p-[2rem] items-start col-span-1 shadow-xl  w-full h-[16rem] rounded-[1.5rem]">
							<div>
								<Avatar className="w-[6rem] h-[6rem]" />
							</div>
							<div className="text-[20px] font-medium mt-[1rem]">
								Xăng dầu
							</div>
						</div>
					</Link>
				</div>
			</div>
		</MainLayout>
	);
}

export default MarketView;
