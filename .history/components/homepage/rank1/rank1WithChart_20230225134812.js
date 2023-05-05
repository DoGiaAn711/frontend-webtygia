import React, { useEffect, useState } from 'react';
import ExchangeRate from './ExchangeRate';
import NameHeader from './NameHeader';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styles from './lineClamp.module.css';
import dynamic from 'next/dynamic';
import { useNewsLatest } from '@services/news/useNews';
import Link from 'next/link';
const ChartUsd = dynamic(() => import('./ChartUsd'), {
	ssr: false,
});

function Rank1WithChart({ data }) {
	const [rank1WithChartData, setRank1WithChartData] = useState();
	const {
		data: latestList,
		isLoading,
		isError,
		error,
		isFetching,
	} = useNewsLatest();

	useEffect(() => {
		// let interestWithChart;
		let rank1WithChart;
		if (data) {
			const interestWithChart = data?.filter(
				(item) =>
					item?.detailModel === 'Coin' ||
					item?.detailModel === 'StockDetail' ||
					item?.detailModel === 'Sjc' ||
					item?.detailModel === 'ExchangeUsdToVnd'
			);
			//get the largest score item
			const max = interestWithChart.reduce(function (prev, current) {
				return prev.score > current.score ? prev : current;
			}); //returns object
			console.log(max);
			// console.log(interestWithChart);
		}

		// setInterest(data)
	}, [data]);

	return (
		<div>
			<NameHeader allData={latestList} />
			<div className="h-[1px] border border-grey-border w-[calc(95%)] mx-auto my-[1rem]"></div>
			<div className="flex w-full">
				<div className="w-[calc(40%)] mr-[20px]">
					<ExchangeRate />
				</div>
				<div className="w-[calc(60%)] ">
					<ChartUsd />
				</div>
			</div>
			<div>
				<p className="text-[24px] font-semibold">So sánh với</p>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 mt-[2rem] bg-grey-4 rounded-[10px] h-[210px] lg:h-[105px]">
					<div className="flex flex-col px-[20px] py-[10px]">
						<p className="text-[16px] font-medium border-b border-grey-boder">
							Bitcoin(BTC)
						</p>
						<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
							$23,200
						</span>
						<span className=" text-end text-price-decrease text-[14px] font-medium">
							-1.20%{' '}
							<span>
								<ArrowDropDownIcon sx={{ fontSize: '2rem' }} />
							</span>
						</span>
					</div>
					<div className="flex flex-col px-[20px] py-[10px]">
						<p className="text-[16px] font-medium border-b border-grey-boder">
							Bitcoin(BTC)
						</p>
						<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
							$23,200
						</span>
						<span className=" text-end text-price-decrease text-[14px] font-medium">
							-1.20%{' '}
							<span>
								<ArrowDropDownIcon sx={{ fontSize: '2rem' }} />
							</span>
						</span>
					</div>
					<div className="flex flex-col px-[20px] py-[10px]">
						<p className="text-[16px] font-medium border-b border-grey-boder">
							Bitcoin(BTC)
						</p>
						<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
							$23,200
						</span>
						<span className=" text-end text-price-decrease text-[14px] font-medium">
							-1.20%{' '}
							<span>
								<ArrowDropDownIcon sx={{ fontSize: '2rem' }} />
							</span>
						</span>
					</div>
					<div className="flex flex-col px-[20px] py-[10px]">
						<p className="text-[16px] font-medium border-b border-grey-boder">
							Bitcoin(BTC)
						</p>
						<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
							$23,200
						</span>
						<span className=" text-end text-price-decrease text-[14px] font-medium">
							-1.20%{' '}
							<span>
								<ArrowDropDownIcon sx={{ fontSize: '2rem' }} />
							</span>
						</span>
					</div>
				</div>
			</div>
			{/* rank 2  */}
			<div className="mt-[3rem]">
				<div className="flex">
					<div className="w-full sm:w-[250px]">
						<p className="text-[24px] font-medium text-blue-text">
							Quan tâm gần đây
						</p>
						<div className=" bg-grey-4 h-[110px] pl-[20px] pr-[8px] py-[10px] rounded-[10px] mt-[1rem]">
							<div className="flex justify-between items-center pb-[4px] border-b border-grey-boder">
								<div className="flex items-center">
									<img
										className="h-[32px] w-[32px] rounded-[1000px] mr-[6px]"
										src="https://vectorflags.s3.amazonaws.com/flags/us-square-01.png"
									/>
									<div>
										<div className="text-[18px] font-medium">
											USD
										</div>
										<div className="text-[10px]">VND</div>
									</div>
								</div>
								<div className="mr-[1rem]">
									<svg
										width="28"
										height="28"
										viewBox="0 0 28 28"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g filter="url(#filter0_d_144_30)">
											<circle
												cx="14"
												cy="13"
												r="12"
												fill="#00BF3D"
											/>
										</g>
										<g clipPath="url(#clip0_144_30)">
											<path
												d="M6.96057 19.2724C6.94467 19.2116 6.92648 19.1515 6.91348 19.0895C6.84097 18.7492 6.91846 18.4349 7.14994 18.1509C7.20393 18.0849 7.26569 18.0267 7.32543 17.9666C9.95555 15.3208 12.5857 12.675 15.2158 10.0292L15.3872 9.85671C15.3065 9.85451 15.2552 9.85158 15.2042 9.85177C13.7594 9.85522 12.314 9.85991 10.8694 9.86211C10.4137 9.86285 10.0729 9.60277 10.0643 9.14811C10.0565 8.72994 10.1092 8.29097 10.2017 7.87087C10.2903 7.46981 10.6463 7.20062 11.0117 7.16341C11.0622 7.15823 11.1126 7.15649 11.1628 7.15599C13.7317 7.14623 16.3012 7.13646 18.8703 7.12763C19.3381 7.12591 19.6418 7.38987 19.6934 7.84686C19.7048 7.94942 19.6982 8.0589 19.687 8.16529C19.3764 11.0539 19.0646 13.9431 18.7517 16.8318C18.6811 17.4851 18.2931 17.8754 17.714 17.8812C17.5283 17.8829 17.3425 17.8845 17.157 17.8842C16.5913 17.8838 16.2879 17.501 16.3569 16.8655C16.5344 15.2292 16.7145 13.5932 16.8935 11.9565C16.9 11.8966 16.9037 11.8367 16.9121 11.7381L8.90723 19.7907C8.37748 20.3225 8.17002 20.3688 7.59626 20.0834L6.96032 19.2721L6.96057 19.2724Z"
												fill="white"
											/>
										</g>
										<defs>
											<filter
												id="filter0_d_144_30"
												x="0"
												y="0"
												width="28"
												height="28"
												filterUnits="userSpaceOnUse"
												colorInterpolationFilters="sRGB"
											>
												<feFlood
													floodOpacity="0"
													result="BackgroundImageFix"
												/>
												<feColorMatrix
													in="SourceAlpha"
													type="matrix"
													values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
													result="hardAlpha"
												/>
												<feOffset dy="1" />
												<feGaussianBlur stdDeviation="1" />
												<feComposite
													in2="hardAlpha"
													operator="out"
												/>
												<feColorMatrix
													type="matrix"
													values="0 0 0 0 0 0 0 0 0 0.74902 0 0 0 0 0.239216 0 0 0 0.45 0"
												/>
												<feBlend
													mode="normal"
													in2="BackgroundImageFix"
													result="effect1_dropShadow_144_30"
												/>
												<feBlend
													mode="normal"
													in="SourceGraphic"
													in2="effect1_dropShadow_144_30"
													result="shape"
												/>
											</filter>
											<clipPath id="clip0_144_30">
												<rect
													width="17.3403"
													height="12.9239"
													fill="white"
													transform="matrix(0.705003 -0.709204 0.616918 0.787028 3.30811 14.6128)"
												/>
											</clipPath>
										</defs>
									</svg>
								</div>
							</div>
							<div className="flex justify-between items-center mt-[6px]">
								<div className="text-[28px] font-medium">
									23620
								</div>
								<div className="w-[40px] h-[20px] text-center text-[14px] text-white bg-price-decrease rounded-[4px]">
									-2.4%
								</div>
							</div>
						</div>
						<div className=" bg-grey-4 h-[110px] pl-[20px] pr-[8px] py-[10px] rounded-[10px] mt-[1rem]">
							<div className="flex justify-between items-center pb-[4px] border-b border-grey-boder">
								<div className="flex items-center">
									<img
										className="h-[32px] w-[32px] rounded-[1000px] mr-[6px]"
										src="https://vectorflags.s3.amazonaws.com/flags/us-square-01.png"
									/>
									<div>
										<div className="text-[18px] font-medium">
											USD
										</div>
										<div className="text-[10px]">VND</div>
									</div>
								</div>
								<div className="mr-[1rem]">
									<svg
										width="28"
										height="28"
										viewBox="0 0 28 28"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g filter="url(#filter0_d_144_30)">
											<circle
												cx="14"
												cy="13"
												r="12"
												fill="#00BF3D"
											/>
										</g>
										<g clipPath="url(#clip0_144_30)">
											<path
												d="M6.96057 19.2724C6.94467 19.2116 6.92648 19.1515 6.91348 19.0895C6.84097 18.7492 6.91846 18.4349 7.14994 18.1509C7.20393 18.0849 7.26569 18.0267 7.32543 17.9666C9.95555 15.3208 12.5857 12.675 15.2158 10.0292L15.3872 9.85671C15.3065 9.85451 15.2552 9.85158 15.2042 9.85177C13.7594 9.85522 12.314 9.85991 10.8694 9.86211C10.4137 9.86285 10.0729 9.60277 10.0643 9.14811C10.0565 8.72994 10.1092 8.29097 10.2017 7.87087C10.2903 7.46981 10.6463 7.20062 11.0117 7.16341C11.0622 7.15823 11.1126 7.15649 11.1628 7.15599C13.7317 7.14623 16.3012 7.13646 18.8703 7.12763C19.3381 7.12591 19.6418 7.38987 19.6934 7.84686C19.7048 7.94942 19.6982 8.0589 19.687 8.16529C19.3764 11.0539 19.0646 13.9431 18.7517 16.8318C18.6811 17.4851 18.2931 17.8754 17.714 17.8812C17.5283 17.8829 17.3425 17.8845 17.157 17.8842C16.5913 17.8838 16.2879 17.501 16.3569 16.8655C16.5344 15.2292 16.7145 13.5932 16.8935 11.9565C16.9 11.8966 16.9037 11.8367 16.9121 11.7381L8.90723 19.7907C8.37748 20.3225 8.17002 20.3688 7.59626 20.0834L6.96032 19.2721L6.96057 19.2724Z"
												fill="white"
											/>
										</g>
										<defs>
											<filter
												id="filter0_d_144_30"
												x="0"
												y="0"
												width="28"
												height="28"
												filterUnits="userSpaceOnUse"
												colorInterpolationFilters="sRGB"
											>
												<feFlood
													floodOpacity="0"
													result="BackgroundImageFix"
												/>
												<feColorMatrix
													in="SourceAlpha"
													type="matrix"
													values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
													result="hardAlpha"
												/>
												<feOffset dy="1" />
												<feGaussianBlur stdDeviation="1" />
												<feComposite
													in2="hardAlpha"
													operator="out"
												/>
												<feColorMatrix
													type="matrix"
													values="0 0 0 0 0 0 0 0 0 0.74902 0 0 0 0 0.239216 0 0 0 0.45 0"
												/>
												<feBlend
													mode="normal"
													in2="BackgroundImageFix"
													result="effect1_dropShadow_144_30"
												/>
												<feBlend
													mode="normal"
													in="SourceGraphic"
													in2="effect1_dropShadow_144_30"
													result="shape"
												/>
											</filter>
											<clipPath id="clip0_144_30">
												<rect
													width="17.3403"
													height="12.9239"
													fill="white"
													transform="matrix(0.705003 -0.709204 0.616918 0.787028 3.30811 14.6128)"
												/>
											</clipPath>
										</defs>
									</svg>
								</div>
							</div>
							<div className="flex justify-between items-center mt-[6px]">
								<div className="text-[28px] font-medium">
									23620
								</div>
								<div className="w-[40px] h-[20px] text-center text-[14px] text-white bg-price-decrease rounded-[4px]">
									-2.4%
								</div>
							</div>
						</div>
						<div className=" bg-grey-4 h-[110px] pl-[20px] pr-[8px] py-[10px] rounded-[10px] mt-[1rem]">
							<div className="flex justify-between items-center pb-[4px] border-b border-grey-boder">
								<div className="flex items-center">
									<img
										className="h-[32px] w-[32px] rounded-[1000px] mr-[6px]"
										src="https://vectorflags.s3.amazonaws.com/flags/us-square-01.png"
									/>
									<div>
										<div className="text-[18px] font-medium">
											USD
										</div>
										<div className="text-[10px]">VND</div>
									</div>
								</div>
								<div className="mr-[1rem]">
									<svg
										width="28"
										height="28"
										viewBox="0 0 28 28"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g filter="url(#filter0_d_144_30)">
											<circle
												cx="14"
												cy="13"
												r="12"
												fill="#00BF3D"
											/>
										</g>
										<g clipPath="url(#clip0_144_30)">
											<path
												d="M6.96057 19.2724C6.94467 19.2116 6.92648 19.1515 6.91348 19.0895C6.84097 18.7492 6.91846 18.4349 7.14994 18.1509C7.20393 18.0849 7.26569 18.0267 7.32543 17.9666C9.95555 15.3208 12.5857 12.675 15.2158 10.0292L15.3872 9.85671C15.3065 9.85451 15.2552 9.85158 15.2042 9.85177C13.7594 9.85522 12.314 9.85991 10.8694 9.86211C10.4137 9.86285 10.0729 9.60277 10.0643 9.14811C10.0565 8.72994 10.1092 8.29097 10.2017 7.87087C10.2903 7.46981 10.6463 7.20062 11.0117 7.16341C11.0622 7.15823 11.1126 7.15649 11.1628 7.15599C13.7317 7.14623 16.3012 7.13646 18.8703 7.12763C19.3381 7.12591 19.6418 7.38987 19.6934 7.84686C19.7048 7.94942 19.6982 8.0589 19.687 8.16529C19.3764 11.0539 19.0646 13.9431 18.7517 16.8318C18.6811 17.4851 18.2931 17.8754 17.714 17.8812C17.5283 17.8829 17.3425 17.8845 17.157 17.8842C16.5913 17.8838 16.2879 17.501 16.3569 16.8655C16.5344 15.2292 16.7145 13.5932 16.8935 11.9565C16.9 11.8966 16.9037 11.8367 16.9121 11.7381L8.90723 19.7907C8.37748 20.3225 8.17002 20.3688 7.59626 20.0834L6.96032 19.2721L6.96057 19.2724Z"
												fill="white"
											/>
										</g>
										<defs>
											<filter
												id="filter0_d_144_30"
												x="0"
												y="0"
												width="28"
												height="28"
												filterUnits="userSpaceOnUse"
												colorInterpolationFilters="sRGB"
											>
												<feFlood
													floodOpacity="0"
													result="BackgroundImageFix"
												/>
												<feColorMatrix
													in="SourceAlpha"
													type="matrix"
													values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
													result="hardAlpha"
												/>
												<feOffset dy="1" />
												<feGaussianBlur stdDeviation="1" />
												<feComposite
													in2="hardAlpha"
													operator="out"
												/>
												<feColorMatrix
													type="matrix"
													values="0 0 0 0 0 0 0 0 0 0.74902 0 0 0 0 0.239216 0 0 0 0.45 0"
												/>
												<feBlend
													mode="normal"
													in2="BackgroundImageFix"
													result="effect1_dropShadow_144_30"
												/>
												<feBlend
													mode="normal"
													in="SourceGraphic"
													in2="effect1_dropShadow_144_30"
													result="shape"
												/>
											</filter>
											<clipPath id="clip0_144_30">
												<rect
													width="17.3403"
													height="12.9239"
													fill="white"
													transform="matrix(0.705003 -0.709204 0.616918 0.787028 3.30811 14.6128)"
												/>
											</clipPath>
										</defs>
									</svg>
								</div>
							</div>
							<div className="flex justify-between items-center mt-[6px]">
								<div className="text-[28px] font-medium">
									23620
								</div>
								<div className="w-[40px] h-[20px] text-center text-[14px] text-white bg-price-decrease rounded-[4px]">
									-2.4%
								</div>
							</div>
						</div>
					</div>
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
															src={
																blog.avatarAdminPost
															}
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
					</div>
				</div>
			</div>
		</div>
	);
}

export default Rank1WithChart;
