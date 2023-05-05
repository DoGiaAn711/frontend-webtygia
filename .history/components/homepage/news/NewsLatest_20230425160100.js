import { useNewsLatest } from '@services/news/useNews';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import styles from './lineClamp.module.css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function NewsLatest() {
	const {
		data: latestList,
		isLoading,
		isError,
		error,
		isFetching,
	} = useNewsLatest();
	console.log(latestList);
	return (
		// hidden sm:block
		<div className="w-[calc(100%)] sm:w-[calc(75%)] sm:ml-[calc(2%)] mt-[16px]">
			<p className="text-[24px] font-medium">Tin mới nhất</p>
			<div className="flex flex-wrap flex-col lg:flex-row justify-between mt-[1rem]">
				{latestList &&
					latestList.map((blog, index) => (
						<div
							key={blog?.timeUpdate}
							className=" px-[1rem] mb-[1rem] lg:mb-[3rem] w-full  lg:w-1/3"
						>
							{/* <Link href={`${path}/${blog.timeUpdate}`}> */}
							<div className="flex lg:flex-col w-full ">
								<Link
									className="w-full max-w-[16rem] lg:max-w-[24rem]"
									href={`tin-tuc/${blog?.timeUpdate}`}
									// href=""
								>
									{/* <img
										className="w-[16rem] h-[16rem]  lg:w-[24rem]  lg:h-[13rem] object-cover rounded-[8px]"
										src={blog?.image}
									/> */}
									<div className="relative w-full max-w-[16rem] lg:max-w-[24rem]  h-[16rem]   lg:h-[13rem]">
										<Image
											src={blog?.image}
											alt={
												blog?.title
													? blog?.title
													: 'Tin tức'
											}
											fill
											style={
												{
													// backgroundRepeat: 'no-repeat',
													// objectFit: 'contain',
													// borderRadius: '8px',
												}
											}
											sizes="(min-width: 1024px) 100vw,100vw"
											priority
											className="w-full h-full relative object-cover rounded-[8px]"
											// width={240}
											// height={130}
										/>
									</div>
								</Link>
								<div className="flex flex-col w-full lg:mt-[1rem] ml-[1rem] lg:ml-0">
									<h2
										className={`${styles.lineClamp2} lg:h-[6rem] text-[1.8rem] font-semibold block`}
									>
										{blog?.title}
									</h2>
									<div className=" mb-[0.5rem] lg:h-[4.2rem]">
										<p
											className={`${styles.lineClamp3} font-medium text-[1.4rem] text-grey-text-2`}
										>
											{blog?.description}
										</p>
									</div>
									<div className="mt-[2rem] h-[] lg:h-[5.6rem]">
										<div className="flex items-center h-full">
											<div className="relative w-[3.8rem] h-[3.8rem]">
												<Image
													src={blog?.avatarAdminPost}
													alt="Avatar admin"
													fill
													className="w-full rounded-[1000px]"
													sizes="(min-width: 1024px) 100vw,100vw"
												/>
											</div>
											<div className="ml-[10px]">
												<div className=" text-[1.4rem] font-medium">
													{blog?.nameAdminPost}
												</div>
												<div className="flex items-center text-[1.2rem] text-grey-text-2 font-medium">
													29/10/2022
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* </Link> */}
						</div>
					))}
			</div>
			<Link href="/tin-tuc">
				<div className="w-fit text-[13px] text-grey-text mx-auto cursor-pointer hover:opacity-80">
					Xem thêm <ArrowRightIcon />
				</div>
			</Link>
		</div>
	);
}

export default NewsLatest;
