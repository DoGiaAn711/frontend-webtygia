import MainLayout from '@components/layouts/mainLayout';
import { useNewsList } from '@services/news/useNews';
import Head from 'next/head';
import { use, useEffect, useState } from 'react';
import styles from './tin-tuc.module.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SlideNews from '@components/slider/SlideNews';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useUser } from '@services/user/useUser';
import axios from 'axios';
import PaginationCoinList from '@components/pagination/PaginationCoinList';
import Loading from '@components/UI/Loading';
import {
	DeleteDataToLocalStorage,
	SaveDataToLocalStorage,
} from '@utils/saveDataToLocalStorage';
import { formatTimestampToDayMonthYear } from '@utils/formatDate';
import Image from 'next/image';
import config from '@utils/TokenBearHeaderAxios';
import SelectOptionNews from '@components/UI/SelectOptionNews';

function TinTucView() {
	const [email, setEmail] = useState();
	const [user, setUser] = useState();
	const [pageNumber, setPageNumber] = useState(1);
	const [category, setCategory] = useState('coin');

	//handle follow offline
	const [followNewsLocalStorage, setFollowNewsLocalStorage] = useState(
		typeof window !== 'undefined' &&
			(JSON.parse(localStorage.getItem('followNews')) || [])
	);

	const router = useRouter();
	const path = router.pathname;

	const { data, isLoading, isError, error, isFetching } = useNewsList(
		pageNumber,
		category
	);

	const { data: userFromDb } = useUser(email);
	// console.log(user);

	useEffect(() => {
		setEmail(localStorage.getItem('email'));
		setUser(userFromDb);
	}, [typeof window, userFromDb]);

	const saveNews = async (id) => {
		const res = await axios
			.post(
				`${process.env.NEXT_PUBLIC_PRODUCT_URL}/follow-news`,
				{
					email: localStorage.getItem('email'),
					newsId: id,
				},
				config(localStorage.getItem('accessToken'))
			)
			.then(function (response) {
				console.log('success');
			})
			.catch(function (error) {
				console.log(error);
			});

		const user = await axios
			.get(
				`${
					process.env.NEXT_PUBLIC_PRODUCT_URL
				}/user/${localStorage.getItem('email')}`,
				config(localStorage.getItem('accessToken'))
			)
			.then((res) => res.data.data[0]);
		setUser(user);
	};

	const deleteNews = async (id) => {
		const res = await axios
			.post(
				`${process.env.NEXT_PUBLIC_PRODUCT_URL}/unfollow-news`,
				{
					email: localStorage.getItem('email'),
					newsId: id,
				},
				config(localStorage.getItem('accessToken'))
			)
			.then(function (response) {
				console.log('success');
			})
			.catch(function (error) {
				console.log(error);
			});

		const user = await axios
			.get(
				`${
					process.env.NEXT_PUBLIC_PRODUCT_URL
				}/user/${localStorage.getItem('email')}`,
				config(localStorage.getItem('accessToken'))
			)
			.then((res) => res.data.data[0]);
		setUser(user);
	};

	// handle follow localstorage
	const saveNewsLocalStorage = (id) => {
		SaveDataToLocalStorage('followNews', id);
		setFollowNewsLocalStorage((prev) => [...prev, id]);
	};

	const deleteNewsLocalStorage = (id) => {
		DeleteDataToLocalStorage('followNews', id);
		setFollowNewsLocalStorage((prev) => prev.filter((item) => item !== id));
	};

	return (
		<>
			<MainLayout>
				<div className=" h-auto sm:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem]  lg:px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
					<div className="text-[2.6rem] font-medium pt-[2rem] border-b border-grey-boder">
						<h1 className="pl-[1rem]">
							Tin tức thị trường mới nhất
						</h1>
					</div>
					{/* tin tuc moi nhat */}
					<div className="mt-[2rem]">
						{/* slide  */}
						{/* <div className="max-w-[80rem] mx-auto"> */}
						<SlideNews />
						{/* </div> */}
						{/* tin cua slide  */}
					</div>
					<div className="text-[2.6rem] font-medium pt-[2rem] border-b border-grey-boder">
						<h1>Tin tức theo chủ đề</h1>
					</div>
					<div className="w-full mt-[16px]">
						<SelectOptionNews
							category={category}
							setCategory={setCategory}
							setPageNumber={setPageNumber}
							router={router}
						/>
					</div>
					<div className="flex flex-wrap flex-col lg:flex-row  ">
						{data &&
							data.newsList.map((blog, index) => (
								<div
									key={blog.timeUpdate}
									className=" px-[1rem] mt-[2rem] lg:mb-0 w-full lg:w-1/4 "
								>
									<div className="flex lg:block">
										<Link
											className="w-full max-w-[16rem] lg:max-w-[24rem]"
											href={`${path}/${blog.timeUpdate}`}
										>
											{/* <img
												className=" w-[16rem] h-[16rem]  lg:w-[24rem] lg:h-[13rem] object-cover rounded-[8px]"
												src={blog?.image}
											/> */}
											<div className="relative w-full max-w-[16rem] lg:max-w-[24rem] h-[16rem] lg:h-[13rem]">
												<Image
													src={blog?.image}
													alt={
														blog?.description
															? blog?.description
															: 'Tin tức'
													}
													fill
													style={
														{
															// backgroundRepeat: 'no-repeat',
															// objectFit: 'cover',
															// borderRadius: '8px',
														}
													}
													sizes="(min-width: 1024px) 100vw,100vw"
													className="w-full h-full relative object-cover rounded-[8px]"
													// width={240}
													// height={130}
												/>
											</div>
										</Link>
										<div
											// className="flex flex-col lg:mt-[1rem] ml-[1rem] lg:ml-0"
											className={`${styles.lineClamp2} lg:h-[5.9rem] text-[1.8rem] font-semibold block`}
										>
											<h2
												className={`${styles.lineClamp3} lg:h-[8rem] text-[1.8rem] font-medium block`}
											>
												{blog?.title}
											</h2>
											<div className="inline mb-[0.5rem] lg:h-[4.2rem]">
												<p
													className={`${styles.lineClamp2}  text-[1.4rem]`}
												>
													{blog?.description}
												</p>
											</div>
											<div className="mt-auto">
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
												<div className="flex text-[1.4rem] mt-[0.5rem]">
													<div>
														<FiberManualRecordIcon className=" text-gray-400" />
													</div>
													<div className="ml-[0.5rem]">
														{formatTimestampToDayMonthYear(
															blog.timeUpdate
														)}
													</div>
													{user ? (
														<div className="ml-auto">
															{user?.followNews?.includes(
																blog._id
															) ? (
																<BookmarkIcon
																	onClick={() =>
																		deleteNews(
																			blog._id
																		)
																	}
																	sx={{
																		fontSize:
																			'2.4rem',
																	}}
																	className="text-[2.4rem] text-green-500 cursor-pointer hover:opacity-80"
																/>
															) : (
																<BookmarkBorderIcon
																	onClick={() =>
																		saveNews(
																			blog._id
																		)
																	}
																	sx={{
																		fontSize:
																			'2.4rem',
																	}}
																	className="text-[2.4rem] cursor-pointer hover:opacity-80"
																/>
															)}
														</div>
													) : (
														<div className="ml-auto">
															{followNewsLocalStorage?.includes(
																blog._id
															) ? (
																<BookmarkIcon
																	onClick={() =>
																		deleteNewsLocalStorage(
																			blog._id
																		)
																	}
																	sx={{
																		fontSize:
																			'2.4rem',
																	}}
																	className="text-[2.4rem] text-green-500 cursor-pointer hover:opacity-80"
																/>
															) : (
																<BookmarkBorderIcon
																	onClick={() =>
																		saveNewsLocalStorage(
																			blog._id
																		)
																	}
																	sx={{
																		fontSize:
																			'2.4rem',
																	}}
																	className="text-[2.4rem] cursor-pointer hover:opacity-80"
																/>
															)}
														</div>
													)}
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						{isLoading && <Loading />}
					</div>
					<div className="">
						{data && (
							<PaginationCoinList
								page={data?.pages}
								setPageNumber={setPageNumber}
								pageNav={pageNumber}
								router={router}
							/>
						)}
					</div>
				</div>
			</MainLayout>
		</>
	);
}

export default TinTucView;
