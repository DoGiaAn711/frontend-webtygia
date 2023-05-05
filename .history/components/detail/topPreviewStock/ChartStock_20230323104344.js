import { createChart } from 'lightweight-charts';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useStockChart } from '@services/stock/useStock';
import { useUsdVietcombankChart } from '@services/foreignCurrency/useUsd';
import { useCoinChart } from '@services/coin/useCoin';

function ChartStock({ stock }) {
	const [rangeTimeChart, setRangeTimeChart] = useState('1W');

	const { data, isLoading, isError, error, isFetching } = useStockChart(
		stock?.symbol,
		rangeTimeChart
	);

	const changeChartTo1W = () => {
		setRangeTimeChart('1W');
	};

	const changeChartTo6M = () => {
		setRangeTimeChart('6M');
	};
	const changeChartToMax = () => {
		setRangeTimeChart('max');
	};
	let arrayChart = [];
	if (data) {
		data.price.map((price, index) => {
			arrayChart.push({
				// time: Math.floor(data.t[index] / 1000) + 7 * 3600,
				time: data.t[index] + 7 * 3600,
				value: price,
			});
		});
	}
	// console.log(arrayChart);
	useEffect(() => {
		// setChartData(arrayChart);
		const chartDiv = document.getElementById('container-chart');
		const chartOptions = {
			width: chartDiv?.offsetWidth - 1 || 200,
			height: chartDiv?.offsetHeight || 200,
			// localization: {
			// 	timeFormatter: (businessDayOrTimestamp) => {
			// 		return Date(businessDayOrTimestamp); //or whatever JS formatting you want here
			// 	},
			// },
			timeScale: {
				// rightOffset: 12,
				// barSpacing: 3,
				// fixLeftEdge: true,
				// lockVisibleTimeRangeOnResize: true,
				// rightBarStaysOnScroll: true,
				// borderVisible: false,
				// borderColor: '#fff000',
				// visible: true,
				timeVisible: true,
				// secondsVisible: false,
				// tickMarkFormatter: (time, tickMarkType, locale) => {
				// 	console.log(time, tickMarkType, locale);
				// 	const year = LightweightCharts.isBusinessDay(time) ? time.year : new Date(time * 1000).getUTCFullYear();
				// 	return String(year);
				// },
			},
			rightPriceScale: {
				scaleMargins: {
					top: 0.3,
					bottom: 0.25,
				},
				borderVisible: false,
			},
			layout: {
				textColor: 'black',
				background: { type: 'solid', color: 'white' },
			},
			grid: {
				vertLines: {
					visible: false,
				},
				horzLines: {
					color: '#FFFFFFFF',
				},
			},
		};

		const chart = createChart(
			document.getElementById('container-chart'),
			chartOptions
		);
		const baselineSeries = chart.addBaselineSeries({
			baseValue: { type: 'price', price: 25 },
			topLineColor: 'rgba( 38, 166, 154, 1)',
			topFillColor1: 'rgba( 38, 166, 154, 0.28)',
			topFillColor2: 'rgba( 38, 166, 154, 0.05)',
			bottomLineColor: 'rgba( 239, 83, 80, 1)',
			bottomFillColor1: 'rgba( 239, 83, 80, 0.05)',
			bottomFillColor2: 'rgba( 239, 83, 80, 0.28)',
		});

		baselineSeries.setData(arrayChart);

		window.onresize = function () {
			if (chartDiv.offsetWidth > 0) {
				chart.applyOptions({
					width: chartDiv?.offsetWidth - 1 || 200,
					height: chartDiv?.offsetHeight || 200,
				});
			}
		};

		chart.timeScale().fitContent();

		return () => {
			chart.remove();
		};
	}, [data]);
	return (
		<div className=" border border-grey-border rounded-[6px]">
			<div>
				<div
					// className="w-full"
					style={{
						height: '250px',
						width: '200px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
					id="container-chart"
				></div>
			</div>
		</div>
	);
}

export default ChartStock;
