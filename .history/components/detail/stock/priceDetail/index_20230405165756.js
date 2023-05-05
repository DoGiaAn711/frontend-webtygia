import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useUser } from '@services/user/useUser';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
	DeleteDataToLocalStorage,
	SaveDataToLocalStorage,
} from '@utils/saveDataToLocalStorage';

function PriceDetail({ stock, description }) {
	const [user, setUser] = useState();
	const [followStocksLocalStorage, setFollowStocksLocalStorage] = useState(
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

	const saveStocks = async (symbol) => {
		try {
			const idStockDetail = await axios
				.get(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/stock/${symbol}`)
				.then((res) => res.data.data[0]._id);

			const res = await axios
				.post(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/follow`, {
					email: localStorage.getItem('email'),
					itemId: idStockDetail,
					category: 'stock',
					detailModel: 'StockDetail',
					followCategory: 'followStocks',
				})
				.then(function (response) {
					console.log('success');
				});

			const user = await axios
				.get(
					`${
						process.env.NEXT_PUBLIC_PRODUCT_URL
					}/user-populate-symbol-stock/${localStorage.getItem(
						'email'
					)}`
				)
				.then((res) => res.data.data[0]);
			setUser(user);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteStocks = async (symbol) => {
		try {
			const idStockDetail = await axios
				.get(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/stock/${symbol}`)
				.then((res) => res.data.data[0]._id);
			const res = await axios
				.post(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/unfollow`, {
					email: localStorage.getItem('email'),
					itemId: idStockDetail,
					category: 'stock',
					detailModel: 'StockDetail',
					followCategory: 'followStocks',
				})
				.then(function (response) {
					console.log('success');
				});

			const user = await axios
				.get(
					`${
						process.env.NEXT_PUBLIC_PRODUCT_URL
					}/user-populate-symbol-stock/${localStorage.getItem(
						'email'
					)}`
				)
				.then((res) => res.data.data[0]);
			setUser(user);
		} catch (error) {
			console.log(error);
		}
	};

	// handle follow localstorage
	const saveStockLocalStorage = (id) => {
		SaveDataToLocalStorage('followStocks', id);
		setFollowStocksLocalStorage((prev) => [...prev, id]);
	};

	const deleteStockLocalStorage = (id) => {
		DeleteDataToLocalStorage('followStocks', id);
		setFollowStocksLocalStorage((prev) =>
			prev.filter((item) => item !== id)
		);
	};
	console.log(stock);

	return (
		<div className="  pb-[4rem]">
			<div className="flex flex-col sm:flex-row justify-between">
				<div>
					<div className="flex h-[10rem] items-center">
						<img
							src={description?.image}
							className="w-[8rem] h-auto"
						/>
						<div className="ml-[2.25rem]">
							<h1 className="text-[2.8rem] font-semibold  text-back-text w-fit">
								{stock?.name}( {stock?.symbol})
								{user ? (
									<span>
										{user?.followStocks?.includes(
											stock?._id
										) ? (
											<BookmarkIcon
												onClick={() =>
													deleteStocks(stock?.symbol)
												}
												sx={{
													fontSize: '2.4rem',
												}}
												className="text-[2.4rem] text-green-500 cursor-pointer hover:opacity-80"
											/>
										) : (
											<BookmarkBorderIcon
												onClick={() =>
													saveStocks(stock?.symbol)
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
										{followStocksLocalStorage?.includes(
											stock?.symbol
										) ? (
											<BookmarkIcon
												onClick={() =>
													deleteStockLocalStorage(
														stock?.symbol
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
													saveStockLocalStorage(
														stock?.symbol
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
							</h1>
						</div>
					</div>
				</div>
				<div className="">
					{/* <p className="text-[1.6rem] text-grey-text font-semibold">
						Giá {stock?.symbol}
					</p> */}
					<div className="flex items-center">
						<div className="text-black-text-2 text-[4.8rem] font-semibold">
							{stock?.currentPrice}
						</div>
						<div
							className={`${
								+stock?.changePercent.slice(0, -1) > 0
									? 'bg-price-increase '
									: +stock?.changePercent.slice(0, -1) < 0
									? 'bg-price-decrease '
									: ' bg-orange-1 '
							} text-white-text  ml-[2rem] h-[3rem] text-center leading-[3rem] w-[5rem] rounded-[0.6rem] text-[1.2rem] font-medium`}
						>
							{+stock?.changePercent.slice(0, -1) > 0 ? '+' : ''}
							{stock?.changePercent == ''
								? '0,00%'
								: stock?.changePercent}
						</div>
					</div>
					<div className="flex">
						<div className=" text-grey-text text-[1.8rem] font-medium">
							Cao:
							<span className=" text-black-text-2 ml-[1rem]">
								{stock?.high}
							</span>
						</div>
						<div className=" text-grey-text text-[1.8rem] font-medium ml-[1rem]">
							Thấp:
							<span className=" text-black-text-2 ml-[1rem] whitespace-nowrap">
								{stock?.low + ' (24h)'}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PriceDetail;
