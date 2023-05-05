import React, { useEffect, useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useUsdVietcombankChart } from '@services/foreignCurrency/useUsd';
import Link from 'next/link';

function NameHeader({
	// data
	rank1WithChartData,
}) {
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
				{/* https://vectorflags.s3.amazonaws.com/flags/us-square-01.png */}
				{/* <img
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAflBMVEXaJR3//wDZEB7YAB7sohPZGx3aIB387wXdPBvzxQ3iZBjhXhnYCx798wP++QD43QncNhv1zAzywQ7xvQ/wtw/gWBnngRX54wjfSxrrmhPpkhT32QrbLxzojBX21ArleRfjbBjurBHlehbkcxfurRH76AfeRBvohxXqlhPgUxqypgmuAAAD9klEQVR4nO3c6ZaiMBAFYJMycaPd2r3du+3l/V9wUEFZAiIyR1O53/+eQ2q4EJIytRoAAAAAAAAAAAAAAAAAAAAAAAAAXOi+fvYlvBxv4D37El6NboombpQ4ORdz+eyLeDHUEz169kW8Ft0XQuApGyMXfk0WCE8Uffg1+UB4IvRSHC0Rniu5OtVkhfBc0fpUkzXCc6XEmXr2hbwO+RPU5AfhCdEgqAnCc6FFCC+egJpcajLBE+XsEh0hBgjP2TU6CE9AbSI12SA8R9SK1KSF8BxJEYUVSJ/6jNXkE+HxozOM1WSI8Pg1EXGoSU1tEzXZIjz0nqjJO24U2U3UpOv8t7Fqi6S26+HxRqmajFyfotBbqiZvjj9QVCdVEiE6bofHEB3nw2OIjuvh0WNDSYQYu7yK4u2MNdm5HB5qGGvScDg8emYsiRAzhuFRshAyR8cPDxX7Byx6aav9aFcvYG6Ojh+eeZE/3432FhVFZt0A1dpZ9blIY9PEo1pvY8sexUq1bo/qIS1lUXACNLk9rgdMLLtJzmRz+t8qMm1a9Si50pnv2kftyN4JDG2TK4tV6G6tzE1I6nXlJVlrS3MT0vRbcUl+Lc5NiP6yZqtlNP6szk1IyeHtsRb0btMnTi7aV1SSPYub5Ez2exVUpNe3/OEaV8VUxeZJiRm1H5uqdNuMchNSanB75JkGFn7xFaBpUbokC3a5CXmzclOVxozxQr4i077fLSNimZsL2tyuQcInw4dr3L1TFWaTEjNN9TtKUmf7cI0rvoBt3TJ0eVT0o9ChZtlUX18Wd/r9Et3keZzpNC8cHYfCk+wmz+NITVLd5Hkc6TRPdZPncaTTnO5ZSOk6URNDN3keJzrNjS2x2ZxoljW2xGZzoVnW2E2ex4FO8zuj40R47oyOC+FR5m5yX+asZcw9PN6XeeCNv8y99i/u4cnoJh9KlbnXzr3TPKObPGjYy2gL5NhpHmH8Icb0sgwt+6a2QOY/06CDYciRZWjjXvuBdXj0d2rAyYY9U1vgN+fwyNQ2xlon37Qq3RZY57wsm4qOaW88vdfOOTzJ6GTtjXvJqQrj8Mh5bKTZDXtKxme1jI9lptibdpOXiPhe+5RteE4HLIdu7Y3H99rZHsssIy3Vt/fGY3vtv1zDczpg+aRYw16kLZDrsczBAcuieMNepC2Q6bHMMpx2rAr3lGhaBX/D9EzzIDqHuxr2vNmBcXiC6NzbsBe2BbIMz/ls8hINe3RqzWB5pvnxbPLesszI5LLH81jmY3TKNuydpio1fuHx3zqd8v/V1OH45pH12iN7EqrGcRFFPnbv2/5jUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf8A0rQKoeuioUzAAAAAElFTkSuQmCC"
					className="w-[5rem] h-[5rem] rounded-[1000px] mb-auto mt-[5px]"
				/> */}
				<div className=" ml-[1rem]">
					<h1 className="text-[2.8rem] font-semibold capitalize text-back-text w-fit">
						<Link href={`/co-phieu/${rank1WithChartData?.symbol}`}>
							{rank1WithChartData?.name} (
							{rank1WithChartData?.symbol}
						</Link>
						)
						<p
							className={`${
								rank1WithChartData?.change > 0
									? 'bg-price-increase '
									: rank1WithChartData?.change < 0
									? 'bg-price-decrease '
									: ' bg-orange-1 '
							} text-white-text h-[20px] leading-[20px] text-center w-[70px] rounded-[4px] text-[12px]`}
						>
							{rank1WithChartData?.changePercent &&
								(rank1WithChartData?.changePercent > 0
									? '+' + rank1WithChartData?.changePercent
									: '-' + rank1WithChartData?.changePercent)}
							%
						</p>
						{rank1WithChartData?.timeUpdate && (
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
						)}
					</h1>
				</div>
			</div>
			<div className=" flex items-center sm:ml-auto text-[4.8rem] font-semibold ">
				<div>
					{parseFloat(
						rank1WithChartData?.currentPrice * 1000
					).toFixed(2)}
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
