import React, { useEffect, useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useUsdVietcombankChart } from '@services/foreignCurrency/useUsd';

const data = {
	_id: '63c24c58202cf826a1aca806',
	symbol: 'Vietcombank',
	timeUpdate: '1675609313',
	usdBuyCast: '23250',
	usdBuyTransfer: '23280',
	usdSell: '23620',
};

// const priceChart = {
// 	name: '1y',
// 	price: [
// 		22620, 22640, 22690, 22840, 22820, 22840, 22870, 22860, 22870, 22840,
// 		22860, 22900, 22970, 22955, 22950, 23090, 23170, 23200, 23200, 23170,
// 		23240, 23250, 23300, 23360, 23440, 23410, 23340, 23390, 23390, 23405,
// 		23430, 23460, 23550, 23655, 23705, 23870, 23880, 24090, 24730, 24737,
// 		24737, 24760, 24733, 24720, 24100, 23560, 23580, 23590, 23570, 23470,
// 		23450, 23460,
// 	],
// 	t: [
// 		1642352400, 1642957200, 1644166800, 1644771600, 1645376400, 1645981200,
// 		1646586000, 1647190800, 1647795600, 1648400400, 1649005200, 1649610000,
// 		1650214800, 1650819600, 1651424400, 1652029200, 1652634000, 1653238800,
// 		1653843600, 1654448400, 1655053200, 1655658000, 1656262800, 1656867600,
// 		1657472400, 1658077200, 1658682000, 1659286800, 1659891600, 1660496400,
// 		1661101200, 1661706000, 1662310800, 1662915600, 1663520400, 1664125200,
// 		1664730000, 1665334800, 1665939600, 1666544400, 1667149200, 1667754000,
// 		1668358800, 1668963600, 1669568400, 1670173200, 1670778000, 1671382800,
// 		1671987600, 1672592400, 1673197200, 1673802000,
// 	],
// };

function NameHeader({
	// data
	rank1WithChartData,
}) {
	const [change, setChange] = useState();
	const [changePercent, setChangePercent] = useState();
	const {
		data: priceChart,
		isLoading,
		isError,
		error,
		isFetching,
	} = useUsdVietcombankChart('1y');

	useEffect(() => {
		if (priceChart) {
			let changePrice =
				priceChart.price[priceChart.price.length - 1] -
				priceChart.price[priceChart.price.length - 8];

			let changePricePercent =
				(priceChart.price[priceChart.price.length - 1] -
					priceChart.price[priceChart.price.length - 8]) /
				priceChart.price[priceChart.price.length - 8];
			setChange(changePrice);
			setChangePercent(changePricePercent.toFixed(3));
		}
	}, [priceChart]);

	// convert to dd:mm:yy
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
	const dateDay = formatDate(new Date(rank1WithChartData?.timeUpdate * 1000));

	//convert to hh:mm:ss
	const d = new Date(rank1WithChartData?.timeUpdate * 1000);
	let dateHour = d.toTimeString();
	dateHour = dateHour.split(' ')[0];
	return (
		<div className="flex flex-col sm:flex-row sm:h-[8rem]">
			<div className="flex items-center">
				<img
					src="https://vectorflags.s3.amazonaws.com/flags/us-square-01.png"
					className="w-auto h-[5rem] rounded-[1000px] mb-auto mt-[5px]"
				/>
				<div className=" ml-[1rem]">
					<h1 className="text-[2.8rem] font-semibold capitalize text-back-text w-fit">
						{rank1WithChartData?.name}
						<p
							className={`${
								changePercent > 0
									? 'bg-price-increase '
									: changePercent < 0
									? 'bg-price-decrease '
									: ' bg-orange-1 '
							} text-white-text h-[20px] leading-[20px] text-center w-[70px] rounded-[4px] text-[12px]`}
						>
							{changePercent == '' ? '0,00%' : changePercent}%
						</p>
						<p className=" text-[1.4rem] text-grey-text font-normal mt-[2px]">
							cập nhật {dateDay} {dateHour}{' '}
							{/* <span className="ml-[1rem]">
							{user?.followExchangeRates?.includes(rank1WithChartData?._id) ? (
								<BookmarkIcon
									onClick={() =>
										deleteExchangeRate(rank1WithChartData?._id)
									}
									className="text-[2.4rem] text-green-500 cursor-pointer hover:opacity-80"
								/>
							) : (
								<BookmarkBorderIcon
									onClick={() => saveExchangeRate(rank1WithChartData?._id)}
									className="text-[2.4rem] cursor-pointer hover:opacity-80"
								/>
							)}
						</span> */}
							{/* <BookmarkBorderIcon
								// onClick={() => saveExchangeRate(rank1WithChartData?._id)}
								className="text-[2.4rem] cursor-pointer hover:opacity-80 ml-[1rem]"
							/> */}
						</p>
					</h1>
				</div>
			</div>
			<div className=" flex items-center sm:ml-auto text-[4.8rem] font-semibold ">
				<div>
					{rank1WithChartData && rank1WithChartData?.usdSell}
					<span className="text-grey-text text-[2.2rem] font-medium ml-[5px]">
						VND
					</span>
				</div>
				{/* <div className="bg-price-increase text-white-text font-normal ml-[2rem] h-[3rem] text-center leading-[3rem] w-[5rem] rounded-[0.6rem] text-[1.4rem]">
					{changePercent}%
				</div> */}
				{/* <div
					className={`${
						changePercent > 0
							? 'bg-price-increase '
							: changePercent < 0
							? 'bg-price-decrease '
							: ' bg-orange-1 '
					} text-white-text  ml-[2rem] h-[3rem] text-center leading-[3rem] w-[5.5rem] rounded-[0.6rem] text-[1.4rem]`}
				>
					{changePercent == '' ? '0,00%' : changePercent}%
				</div> */}
			</div>
		</div>
	);
}

export default NameHeader;
