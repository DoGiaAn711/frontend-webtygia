import React, { useEffect, useState } from 'react';

import Rank1Coin from './Coin';
import Rank1Usd from './Usd';
import Rank1Stock from './Stock';
import Rank1Gold from './Gold';

function Rank1WithChart({ data }) {
	const [rank1WithChartData, setRank1WithChartData] = useState();

	useEffect(() => {
		// let rank1WithChart;
		if (data) {
			const interestWithChart = data?.filter(
				(item) =>
					item?.detailModel === 'Coin' ||
					item?.detailModel === 'StockDetail' ||
					item?.detailModel === 'Sjc' ||
					item?.detailModel === 'ExchangeUsdToVnd'
			);
			//get the largest score item
			const max = interestWithChart.reduce(function (prev, current) {
				return prev.score > current.score ? prev : current;
			}); //returns object
			console.log(max);
			// console.log(interestWithChart);
			setRank1WithChartData(max.detail);
		}
	}, [data]);

	//Coin
	if (rank1WithChartData?.rank) {
		return (
			<Rank1Coin data={data} rank1WithChartData={rank1WithChartData} />
		);
	}
	if (rank1WithChartData?.usdSell) {
		return <Rank1Usd data={data} rank1WithChartData={rank1WithChartData} />;
	}
	if (rank1WithChartData?.ceil) {
		return (
			<Rank1Stock data={data} rank1WithChartData={rank1WithChartData} />
		);
	}
	if (rank1WithChartData?.sjc1l10lBuy) {
		return (
			<Rank1Gold data={data} rank1WithChartData={rank1WithChartData} />
		);
	}
}

export default Rank1WithChart;
