import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useUser } from '@services/user/useUser';
import { useEffect, useState } from 'react';

function PriceDetail({ stock, description }) {
	const [user, setUser] = useState();

	const { data: userFromDb } = useUser();

	useEffect(() => {
		// setEmail(localStorage.getItem('email'));
		// setCoinData(data);
		if (userFromDb) {
			setUser(userFromDb);
		}
	}, [userFromDb]);
	console.log(user);

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
								<span>
									{user?.followStocks?.includes(
										stock?.symbol
									) ? (
										<BookmarkIcon
											onClick={() =>
												deleteCoins(coin?.symbol)
											}
											sx={{
												fontSize: '2.4rem',
											}}
											className="text-[2.4rem] text-green-500 cursor-pointer hover:opacity-80"
										/>
									) : (
										<BookmarkBorderIcon
											onClick={() =>
												saveCoins(coin?.symbol)
											}
											sx={{
												fontSize: '2.4rem',
											}}
											className="text-[2.4rem] cursor-pointer hover:opacity-80"
										/>
									)}
								</span>
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
