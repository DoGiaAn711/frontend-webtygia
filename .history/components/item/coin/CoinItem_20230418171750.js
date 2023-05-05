import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import {
	DeleteDataToLocalStorage,
	SaveDataToLocalStorage,
} from '@utils/saveDataToLocalStorage';
import Image from 'next/image';

function CoinItem({
	coin,
	index,
	user,
	saveCoins,
	deleteCoins,
	followCoinsLocalStorage,
	setFollowCoinsLocalStorage,
	isInFollowPageAndOffline,
}) {
	const [userFollowCoin, setUserFollowCoin] = useState();
	// const [followCoinsLocalStorage, setFollowCoinsLocalStorage] = useState();
	const router = useRouter();
	const path = router.pathname;
	// console.log(user?.followCoins);
	useEffect(() => {
		if (user?.followCoins[0]?.nameId) {
			const data = user?.followCoins.map((item) => item._id);
			setUserFollowCoin(data);
		} else {
			setUserFollowCoin(user?.followCoins);
		}
	}, [user?.followCoins]);

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
		<tr
			key={coin?.nameId}
			className=" text-[1.6rem] font-normal h-[4.5rem] text-start"
		>
			{user ? (
				<td className="flex items-center leading-[4.5rem] px-[2px] w-[6.2rem]  z-10 text-center">
					{/* user?.followCoins?.includes(coin?._id) */}
					{userFollowCoin?.includes(coin?._id) ? (
						<StarOutlineIcon
							onClick={() => deleteCoins(coin?._id)}
							className=" text-green-500 cursor-pointer hover:opacity-80"
							sx={{
								fontSize: '20px',
								marginRight: '3px',
								marginBottom: '3px',
							}}
						/>
					) : (
						<StarOutlineIcon
							onClick={() => saveCoins(coin?._id)}
							className="cursor-pointer hover:opacity-80"
							sx={{
								fontSize: '20px',
								marginRight: '3px',
								marginBottom: '3px',
							}}
						/>
					)}
					<p className="">{coin?.rank}</p>
				</td>
			) : (
				<td className="flex items-center leading-[4.5rem] px-[2px] w-[6.2rem]  z-10 text-center">
					{/* user?.followCoins?.includes(coin?._id) */}
					{followCoinsLocalStorage?.includes(coin?._id) ? (
						<StarOutlineIcon
							onClick={() => {
								if (isInFollowPageAndOffline) {
									deleteCoins(coin._id);
								} else {
									deleteCoinLocalStorage(coin?._id);
								}
							}}
							className=" text-green-500 cursor-pointer hover:opacity-80"
							sx={{
								fontSize: '20px',
								marginRight: '3px',
								marginBottom: '3px',
							}}
						/>
					) : (
						<StarOutlineIcon
							onClick={() => saveCoinLocalStorage(coin?._id)}
							className="cursor-pointer hover:opacity-80"
							sx={{
								fontSize: '20px',
								marginRight: '3px',
								marginBottom: '3px',
							}}
						/>
					)}
					<p className="">{coin?.rank}</p>
				</td>
			)}
			<td className="w-[16rem] text-start cursor-pointer">
				<Link
					href={`/coin/${coin?.nameId}`}
					className="block w-full h-full leading-[4.5rem] hover:opacity-80"
				>
					{/* <Link href={`${path}/${coin?.nameId}`}> */}
					<span className="">
						{/* <img
							className="w-[2.8rem] h-[2.8rem] inline-block ml-[1rem]"
							src={coin?.image}
						/> */}
						<div className="relative w-[2.8rem] h-[2.8rem] overflow-hidden">
							<Image
								src={coin?.image}
								alt={coin?.symbol}
								fill
								// width={28}
								// height={28}
								className=" inline-block"
							/>
						</div>
						<span className=" inline ml-[1rem] text-blue-text">
							{coin?.symbol?.toUpperCase()}
						</span>
					</span>
				</Link>
			</td>
			<td className=" text-black-text">
				${parseFloat(coin?.currentPrice).toLocaleString()}
			</td>
			<td
				className={`${
					+coin?.priceChange24hPercent > 0
						? 'text-price-increase'
						: 'text-price-decrease'
				}  pl-[1rem]`}
			>
				{coin?.priceChange24hPercent >= 0
					? `+${parseFloat(coin?.priceChange24hPercent).toFixed(3)}%`
					: `${parseFloat(coin?.priceChange24hPercent).toFixed(3)}%`}
			</td>
			<td
				className={`${
					+coin?.priceChange7dPercent > 0
						? 'text-price-increase'
						: 'text-price-decrease'
				}  pl-[1rem]`}
			>
				{coin?.priceChange7dPercent >= 0
					? `+${parseFloat(coin?.priceChange7dPercent).toFixed(3)}%`
					: `${parseFloat(coin?.priceChange7dPercent).toFixed(3)}%`}
			</td>
			<td className="text-black-text pl-[3rem]">
				{/* ${parseFloat(coin?.marketCap?.split('.')[0]).toLocaleString()} */}
				${parseFloat(coin?.marketCap).toLocaleString()}
			</td>
			<td className="text-black-text">
				{/* ${parseFloat(coin?.volume24h?.split('.')[0]).toLocaleString()} */}
				${parseFloat(coin?.volume24h).toLocaleString()}
			</td>
		</tr>
	);
}

export default CoinItem;
