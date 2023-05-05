import React, { useEffect, useState } from 'react';
import Rank1Coin from './Coin';
import Rank1Usd from './Usd';
import Rank1Stock from './Stock';
import Rank1Gold from './Gold';
import axios from 'axios';

function Rank1WithChart({ data, referenceRank1 }) {
	const [rank1WithChartData, setRank1WithChartData] = useState();

	useEffect(() => {
		const interestWithChart = data?.filter(
			(item) =>
				item?.detailModel === 'Coin' ||
				item?.detailModel === 'StockDetail' ||
				item?.detailModel === 'Sjc' ||
				item?.detailModel === 'ExchangeUsdToVnd'
		);
		if (interestWithChart?.length > 0) {
			//get the largest score item
			// const max = interestWithChart.reduce(function (prev, current) {
			// 	return prev.score > current.score ? prev : current;
			// });
			const max = interestWithChart[0];
			setRank1WithChartData(max.detail);
		} else {
			const fetchInitialRank1 = async () => {
				try {
					const data = await axios
						.get(`${process.env.PRODUCT}/exchangeRate/usd-to-vnd`)
						.then((res) => res.data);

					setRank1WithChartData(data.data[0]);
				} catch (error) {
					console.log(error);
				}
			};
			fetchInitialRank1();
		}
	}, [data]);
	// console.log(referenceRank1);
	//Coin
	if (rank1WithChartData?.rank) {
		return (
			<Rank1Coin
				data={data}
				rank1WithChartData={rank1WithChartData}
				referenceRank1={referenceRank1}
			/>
		);
	}
	if (rank1WithChartData?.usdSell) {
		return (
			<Rank1Usd
				data={data}
				rank1WithChartData={rank1WithChartData}
				referenceRank1={referenceRank1}
			/>
		);
	}
	if (rank1WithChartData?.ceil) {
		return (
			<Rank1Stock
				data={data}
				rank1WithChartData={rank1WithChartData}
				referenceRank1={referenceRank1}
			/>
		);
	}
	if (rank1WithChartData?.sjc1l10lBuy) {
		return (
			<Rank1Gold
				data={data}
				rank1WithChartData={rank1WithChartData}
				referenceRank1={referenceRank1}
			/>
		);
	}
}

export default Rank1WithChart;
