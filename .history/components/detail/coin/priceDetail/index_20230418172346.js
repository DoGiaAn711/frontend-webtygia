import LinkIcon from '@mui/icons-material/Link';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';
import { useUpdateScoreCoin } from '@services/coin/useCoin';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { data } from 'autoprefixer';
import { useUser } from '@services/user/useUser';
import {
	DeleteDataToLocalStorage,
	SaveDataToLocalStorage,
} from '@utils/saveDataToLocalStorage';
import Image from 'next/image';

function PriceDetail({ coin, descriptionData }) {
	const [user, setUser] = useState();
	const [followCoinsLocalStorage, setFollowCoinsLocalStorage] = useState(
		typeof window !== 'undefined' &&
			(JSON.parse(localStorage.getItem('followCoins')) || [])
	);

	const { data: userFromDb } = useUser();

	useEffect(() => {
		// setEmail(localStorage.getItem('email'));
		// setCoinData(data);
		if (userFromDb) {
			setUser(userFromDb);
		}
	}, [userFromDb]);

	const saveCoins = async (id) => {
		if (localStorage.getItem('email')) {
			try {
				const res = await axios
					.post(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/follow`, {
						email: localStorage.getItem('email'),
						itemId: id,
						category: 'coin',
						detailModel: 'Coin',
						followCategory: 'followCoins',
					})
					.then(function (response) {
						console.log('success');
					});

				const user = await axios
					.get(
						`${
							process.env.NEXT_PUBLIC_PRODUCT_URL
						}/user/${localStorage.getItem('email')}`
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

	const deleteCoins = async (id) => {
		if (localStorage.getItem('email')) {
			try {
				const res = await axios
					.post(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/unfollow`, {
						email: localStorage.getItem('email'),
						itemId: id,
						category: 'coin',
						detailModel: 'Coin',
						followCategory: 'followCoins',
					})
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
						}/user/${localStorage.getItem('email')}`
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
	const saveCoinLocalStorage = (id) => {
		SaveDataToLocalStorage('followCoins', id);
		setFollowCoinsLocalStorage((prev) => [...prev, id]);
	};

	const deleteCoinLocalStorage = (id) => {
		DeleteDataToLocalStorage('followCoins', id);
		setFollowCoinsLocalStorage((prev) =>
			prev.filter((item) => item !== id)
		);
	};

	return (
		<div className="  pb-[4rem]">
			<div className="flex flex-col sm:flex-row justify-between">
				<div>
					<div className="flex h-[10rem] items-center">
						<img src={coin?.image} className="w-[6rem] h-[6rem]" />
						{/* <div className="relative w-[6rem] h-[6rem]">
							<Image
								src={coin?.image}
								alt={coin?.symbol}
								fill
								// width={28}
								// height={28}
							/>
						</div> */}
						<div className="ml-[2.25rem]">
							<h1 className="text-[2.8rem] font-semibold capitalize text-back-text w-fit">
								{coin?.nameId}(
								{coin?.symbol && coin?.symbol.toUpperCase()}){' '}
								{user ? (
									<span>
										{user?.followCoins?.includes(
											coin?._id
										) ? (
											<BookmarkIcon
												onClick={() =>
													deleteCoins(coin?._id)
												}
												sx={{
													fontSize: '2.4rem',
												}}
												className="text-[2.4rem] text-green-500 cursor-pointer hover:opacity-80"
											/>
										) : (
											<BookmarkBorderIcon
												onClick={() =>
													saveCoins(coin?._id)
												}
												sx={{
													fontSize: '2.4rem',
												}}
												className="text-[2.4rem] cursor-pointer hover:opacity-80"
											/>
										)}
									</span>
								) : (
									<span>
										{followCoinsLocalStorage?.includes(
											coin?._id
										) ? (
											<BookmarkIcon
												onClick={() =>
													deleteCoinLocalStorage(
														coin?._id
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
													saveCoinLocalStorage(
														coin?._id
													)
												}
												sx={{
													fontSize: '2.4rem',
												}}
												className="text-[2.4rem] cursor-pointer hover:opacity-80"
											/>
										)}
									</span>
								)}
								<p className=" text-[1.4rem] text-grey-text">
									#Xếp hạng {coin?.rank}
								</p>
							</h1>
						</div>
					</div>
					<div className="flex justify-around flex-wrap max-w-[28.3rem] text-[1.4rem] font-medium">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={descriptionData?.homepage}
						>
							<div className="flex p-[0.5rem] m-[0.5rem] bg-back-ground-1 rounded-lg cursor-pointer hover:opacity-80 items-center">
								<LinkIcon sx={{ fontSize: '2rem' }} />
								<span className="px-[0.5rem]">Trang chủ</span>
								<OpenInNewIcon sx={{ fontSize: '2rem' }} />
								{/* <OpenInNewIcon fontSize="medium" /> */}
							</div>
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={descriptionData?.github}
						>
							<div className="flex p-[0.5rem] m-[0.5rem] bg-back-ground-1 rounded-lg cursor-pointer hover:opacity-80 items-center">
								<GitHubIcon sx={{ fontSize: '2rem' }} />
								<span
									// target="_blank"
									// rel="noopener noreferrer"
									// href={descriptionData?.github}
									className="px-[0.5rem]"
								>
									Mã nguồn
								</span>
								<OpenInNewIcon sx={{ fontSize: '2rem' }} />
							</div>
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={descriptionData?.official_forum_url}
						>
							<div className="flex p-[0.5rem] m-[0.5rem] bg-back-ground-1 rounded-lg cursor-pointer hover:opacity-80 items-center">
								<PersonIcon sx={{ fontSize: '2rem' }} />
								<span
									// target="_blank"
									// rel="noopener noreferrer"
									// href={descriptionData?.official_forum_url}
									className="px-[0.5rem]"
								>
									Cộng đồng
								</span>
								<OpenInNewIcon sx={{ fontSize: '2rem' }} />
							</div>
						</a>
					</div>
				</div>
				<div className="">
					{/* <p className="text-[1.6rem] text-grey-text font-semibold">
						Giá {coin?.symbol.toUpperCase()}
					</p> */}
					<div className="flex items-center">
						<div className="text-black-text-2 text-[4.8rem] font-semibold">
							${parseFloat(coin?.currentPrice).toLocaleString()}
						</div>
						<div
							className={`${
								+coin?.priceChange24hPercent > 0
									? 'bg-price-increase'
									: 'bg-price-decrease'
							} text-white-text ml-[2rem] h-[3rem] text-center leading-[3rem] w-[5rem] rounded-[0.6rem] text-[1.2rem] font-medium`}
						>
							{coin?.priceChange24hPercent >= 0
								? `+${parseFloat(
										coin?.priceChange24hPercent
								  ).toFixed(2)}%`
								: `${parseFloat(
										coin?.priceChange24hPercent
								  ).toFixed(2)}%`}
						</div>
					</div>
					<div className="flex">
						<div className=" text-grey-text text-[1.5rem] font-medium">
							Cao:
							<span className=" text-black-text-2 ml-[1rem]">
								${parseFloat(coin?.high24h).toLocaleString()}
							</span>
						</div>
						<div className=" text-grey-text text-[1.5rem] font-medium ml-[1rem]">
							Thấp:
							<span className=" text-black-text-2 ml-[1rem]">
								${parseFloat(coin?.low24h).toLocaleString()}{' '}
								(24h)
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-[3.5rem] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[2rem] text-center">
				<div className="">
					<p className="text-[2rem] font-medium text-back-text">
						$
						{parseFloat(
							coin?.marketCap.split('.')[0]
						).toLocaleString()}
					</p>
					<p className=" text-grey-text-2 text-[1.4rem] font-medium mt-[1rem]">
						Vốn hoá
					</p>
				</div>
				<div className="">
					<p className="text-[2rem] font-medium text-back-text">
						$
						{parseFloat(
							coin?.fullyDilutedValuation.split('.')[0]
						).toLocaleString()}
					</p>
					<p className=" text-grey-text-2 text-[1.4rem] font-medium mt-[1rem]">
						Vốn hoá thị trường pha loãng hoàn toàn
					</p>
				</div>
				<div className="">
					<p className="text-[2rem] font-medium text-back-text">
						$
						{parseFloat(
							coin?.circulatingSupply.split('.')[0]
						).toLocaleString()}
					</p>
					<p className=" text-grey-text-2 text-[1.4rem] font-medium mt-[1rem]">
						Lượng cung lưu hành
					</p>
				</div>
				<div className="">
					<p className="text-[2rem] font-medium text-back-text">
						$
						{parseFloat(
							coin?.totalSupply.split('.')[0]
						).toLocaleString()}
					</p>
					<p className=" text-grey-text-2 text-[1.4rem] font-medium mt-[1rem]">
						Tổng cung tối đa
					</p>
				</div>
				<div className="">
					<p className="text-[2rem] font-medium text-back-text">
						$
						{parseFloat(
							coin?.volume24h.split('.')[0]
						).toLocaleString()}
					</p>
					<p className=" text-grey-text-2 text-[1.4rem] font-medium mt-[1rem]">
						Khối lượng giao dịch 24h
					</p>
				</div>
			</div>
		</div>
	);
}

export default PriceDetail;
