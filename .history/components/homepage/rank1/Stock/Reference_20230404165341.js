import { useUserCoinReference } from '@services/coin/useCoin';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useUserStockReference } from '@services/stock/useStock';

function Reference({ referenceRank1 }) {
	const [reference, setReference] = useState([]);
	const { data, isLoading, isError, error, isFetching } =
		useUserStockReference();

	useEffect(() => {
		if (data?.data) {
			const arr = data.data.sort(({ score: a }, { score: b }) => b - a);
			setReference(arr.slice(1, 5));
		}
	}, [data, typeof window]);
	return (
		<div>
			<p className="text-[24px] font-semibold">So sánh với</p>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 mt-[2rem] bg-grey-4 rounded-[10px] h-[210px] lg:h-[105px]">
				{referenceRank1 &&
					referenceRank1.map((item, index) => (
						<div
							key={index}
							className="flex flex-col px-[20px] py-[10px]"
						>
							<Link
								href={`/co-phieu/${item?.detail?.symbol}`}
								target="_blank"
							>
								<p className="text-[16px] font-medium border-b border-grey-boder hover:opacity-80">
									{item?.detail?.symbol &&
										item?.detail?.symbol.toUpperCase()}
								</p>
							</Link>
							<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
								{parseFloat(
									item?.detail?.currentPrice * 1000
								).toLocaleString()}
								<span className="text-grey-text text-[1.2rem] font-medium ml-[5px]">
									VND
								</span>
							</span>
							<span
								className={`${
									+item?.detail?.changePercent > 0
										? 'text-price-increase'
										: 'text-price-decrease'
								}  text-end text-[1.5rem] font-medium`}
							>
								{item?.detail?.changePercent &&
									(item?.detail?.changePercent > 0
										? '+' +
										  item?.detail?.changePercent +
										  '%'
										: '-' +
										  item?.detail?.changePercent +
										  '%')}
							</span>
						</div>
					))}
			</div>
		</div>
	);
}

export default Reference;
