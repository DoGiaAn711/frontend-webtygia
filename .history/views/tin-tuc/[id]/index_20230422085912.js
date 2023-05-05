import MainLayout from '@components/layouts/mainLayout';
import { useNewsdetail } from '@services/news/useNews';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useUser } from '@services/user/useUser';
import axios from 'axios';
import {
	DeleteDataToLocalStorage,
	SaveDataToLocalStorage,
} from '@utils/saveDataToLocalStorage';
import config from '@utils/TokenBearHeaderAxios';

function NewsDetailView({ data }) {
	// const [day, setDay] = useState();
	// const [hour, setHour] = useState();
	const [user, setUser] = useState();
	const [email, setEmail] = useState();
	const { data: userFromDb } = useUser(email);
	const router = useRouter();
	const id = router?.query?.id;
	// const id = params.id;

	// const [followNewsLocalStorage, setFollowNewsLocalStorage] = useState(
	// 	typeof window !== 'undefined' &&
	// 		(JSON.parse(localStorage.getItem('followNews')) || [])
	// );
	const [isFollowed, setIsFollowed] = useState(false);

	// const { data, isLoading, isError, error, isFetching } = useNewsdetail(id);
	useEffect(() => {
		setEmail(localStorage.getItem('email'));
		setUser(userFromDb);
		if (
			JSON.parse(localStorage.getItem('followNews'))?.includes(data?._id)
		) {
			setIsFollowed(true);
		}
	}, [typeof window, userFromDb]);

	const saveNews = async (id) => {
		if (localStorage.getItem('email')) {
			try {
				const res = await axios
					.post(
						`${process.env.NEXT_PUBLIC_PRODUCT_URL}/follow`,
						{
							email: localStorage.getItem('email'),
							itemId: id,
							category: 'news',
							detailModel: 'News',
							followCategory: 'followNews',
						},
						config(localStorage.getItem('accessToken'))
					)
					.then(function (response) {
						console.log('success');
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
			} catch (error) {
				console.log(error);
			}
		} else {
			// SaveDataToLocalStorage('followCoins', id);
		}
	};

	const deleteNews = async (id) => {
		if (localStorage.getItem('email')) {
			try {
				const res = await axios
					.post(
						`${process.env.NEXT_PUBLIC_PRODUCT_URL}/unfollow`,
						{
							email: localStorage.getItem('email'),
							itemId: id,
							category: 'news',
							detailModel: 'News',
							followCategory: 'followNews',
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
			} catch (error) {
				console.log(error);
			}
		} else {
			// DeleteDataToLocalStorage('followCoins', id);
		}
	};

	// handle follow localstorage
	const saveNewLocalStorage = (id) => {
		SaveDataToLocalStorage('followNews', id);
		// setFollowNewsLocalStorage((prev) => [...prev, id]);
		setIsFollowed((prev) => !prev);
	};

	const deleteNewLocalStorage = (id) => {
		DeleteDataToLocalStorage('followNews', id);
		// setFollowNewsLocalStorage((prev) => prev.filter((item) => item !== id));
		setIsFollowed((prev) => !prev);
	};

	// useEffect(() => {
	// if (data) {
	function padTo2Digits(num) {
		return num.toString().padStart(2, '0');
	}
	function formatDate(date) {
		return [
			padTo2Digits(date.getDate()),
			padTo2Digits(date.getMonth() + 1),
			date.getFullYear(),
		].join('/');
	}
	const dateDay = formatDate(new Date(data?.timeUpdate * 1000));

	//convert to hh:mm:ss
	const d = new Date(data?.timeUpdate * 1000);
	let dateHour = d.toTimeString();
	dateHour = dateHour.split(' ')[0];
	// setHour(dateHour);
	// setDay(dateDay);
	// }
	// }, [data]);
	return (
		<MainLayout>
			<div className=" h-auto sm:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
				{data && (
					<div className=" pt-[2rem] ">
						{/* <h1 className="text-[2.6rem] font-medium">
							{data?.title}
						</h1>
						<img className="w-full" src={data?.image} /> */}
						<div className="ql-snow text-[18px]">
							<div
								className="ql-editor link:"
								style={
									{
										// padding: 0,
										// lineHeight: '1.6rem',
										// fontWeight: '300',
									}
								}
							>
								<h1 className="font-medium">{data?.title}</h1>
								<div className="flex items-center mt-[1rem]">
									<div className="flex items-center">
										<img
											className="w-[3rem] h-[3rem] rounded-[1000px]"
											src={data?.avatarAdminPost}
										/>
										<div className="ml-[1rem] text-[1.4rem] font-normal">
											{data?.nameAdminPost}
										</div>
									</div>
									<div className="flex items-center text-[1.4rem] ml-[2rem]">
										<div>
											<FiberManualRecordIcon className=" text-gray-400" />
										</div>
										<div className="ml-[0.5rem]">
											{dateDay} {dateHour}
										</div>
										{user ? (
											<div className="ml-[1rem]">
												{user?.followNews?.includes(
													data?._id
												) ? (
													<BookmarkIcon
														onClick={() =>
															deleteNews(
																data?._id
															)
														}
														sx={{
															fontSize: '2.4rem',
														}}
														className="text-[2.4rem] text-green-500 cursor-pointer hover:opacity-80"
													/>
												) : (
													<BookmarkBorderIcon
														onClick={() =>
															saveNews(data?._id)
														}
														sx={{
															fontSize: '2.4rem',
														}}
														className="text-[2.4rem] cursor-pointer hover:opacity-80"
													/>
												)}
											</div>
										) : (
											<div className="ml-[1rem]">
												{isFollowed ? (
													<BookmarkIcon
														onClick={() =>
															deleteNewLocalStorage(
																data?._id
															)
														}
														sx={{
															fontSize: '2.4rem',
														}}
														className="text-[2.4rem] text-green-500 cursor-pointer hover:opacity-80"
													/>
												) : (
													<BookmarkBorderIcon
														onClick={() =>
															saveNewLocalStorage(
																data?._id
															)
														}
														sx={{
															fontSize: '2.4rem',
														}}
														className="text-[2.4rem] cursor-pointer hover:opacity-80"
													/>
												)}
											</div>
										)}
										{/* {
											<div className="ml-[1rem]">
												{isFollowed ? (
													<BookmarkIcon
														onClick={() =>
															deleteNewLocalStorage(
																data?._id
															)
														}
														sx={{
															fontSize: '2.4rem',
														}}
														className="text-[2.4rem] text-green-500 cursor-pointer hover:opacity-80"
													/>
												) : (
													<BookmarkBorderIcon
														onClick={() =>
															saveNewLocalStorage(
																data?._id
															)
														}
														sx={{
															fontSize: '2.4rem',
														}}
														className="text-[2.4rem] cursor-pointer hover:opacity-80"
													/>
												)}
											</div>
										} */}
									</div>
								</div>
								{/* max-w-[80rem] */}
								<div className=" rounded-[20px] w-full mx-auto mt-[2rem]">
									<img
										className="w-full h-[30rem] md:h-[50rem] rounded-[20px]"
										src={data?.image}
									/>
								</div>
								<div
									className="mt-[2rem]"
									dangerouslySetInnerHTML={{
										__html: data?.content,
									}}
								></div>
							</div>
						</div>
						<div className="">
							{data?.originSource && (
								<div className="flex">
									<a
										className="text-[14px] ml-auto mr-[3rem] text-blue-500 hover:opacity-80"
										href={data?.originSource}
									>
										Link bài viết gốc
									</a>
								</div>
							)}
							{data?.quotation && (
								<div className="flex justify-end text-[14px] text-grey-text mr-[3rem]">
									Nguồn tham khảo: {data?.quotation}
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</MainLayout>
	);
}

export default NewsDetailView;
