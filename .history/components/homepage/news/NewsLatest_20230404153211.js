import { useNewsLatest } from '@services/news/useNews';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import styles from './lineClamp.module.css';
import React from 'react';
import Link from 'next/link';

function NewsLatest() {
	const {
		data: latestList,
		isLoading,
		isError,
		error,
		isFetching,
	} = useNewsLatest();
	return (
		<div className="w-[calc(75%)] ml-[calc(2%)] hidden sm:block">
			<p className="text-[24px] font-medium">Tin mới nhất</p>
			<div className="flex flex-wrap flex-col lg:flex-row justify-between mt-[1rem]">
				{latestList &&
					latestList.map((blog, index) => (
						<div
							key={blog.timeUpdate}
							className=" px-[1rem] mb-[1rem] lg:mb-[3rem] w-full  lg:w-1/3"
						>
							{/* <Link href={`${path}/${blog.timeUpdate}`}> */}
							<div className="flex lg:flex-col w-full ">
								<Link
									className="w-full max-w-[16rem] lg:max-w-[24rem]"
									// href={`${path}/${blog.timeUpdate}`}
									href=""
								>
									<img
										className="w-[16rem] h-[16rem]  lg:w-[24rem]  lg:h-[13rem] object-cover rounded-[8px]"
										src={blog.image}
									/>
								</Link>
								<div className="flex flex-col w-full lg:mt-[1rem] ml-[1rem] lg:ml-0">
									<h2
										className={`${styles.lineClamp3} lg:h-[8rem] text-[1.8rem] font-medium block`}
									>
										{blog?.title}
									</h2>
									<div className=" mb-[0.5rem] lg:h-[4.2rem]">
										<p
											className={`${styles.lineClamp2}  text-[1.4rem]`}
										>
											{blog?.description}
										</p>
									</div>
									<div className="">
										<div className="flex items-center">
											<img
												className="w-[3rem] h-[3rem] rounded-[1000px]"
												src={blog.avatarAdminPost}
											/>
											<div className="ml-[1rem] text-[1.4rem] font-normal">
												{blog.nameAdminPost}
											</div>
										</div>
										<div className="flex items-center text-[1.4rem] mt-[0.5rem]">
											<div>
												<FiberManualRecordIcon className=" text-gray-400" />
											</div>
											<div className="ml-[0.5rem]">
												29/10
											</div>
											<div className="ml-auto">
												{/* {user?.followNews?.includes(
															blog._id
														) ? (
															<BookmarkIcon
																// onClick={() =>
																// 	deleteNews(
																// 		blog._id
																// 	)
																// }
																className="text-[2.4rem] text-green-500 cursor-pointer hover:opacity-80"
															/>
														) : (
															<BookmarkBorderIcon
																// onClick={() =>
																// 	saveNews(
																// 		blog._id
																// 	)
																// }
																className="text-[2.4rem] cursor-pointer hover:opacity-80"
															/>
														)} */}
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
