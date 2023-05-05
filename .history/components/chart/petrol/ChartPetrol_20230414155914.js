import { createChart } from 'lightweight-charts';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useCoinChart } from '@services/coin/useCoin';
import { useChartPetrol } from '@services/petrol/usePetrol';

function ChartPetrol() {
	const [rangeTimeChart, setRangeTimeChart] = useState('1y');

	const { data, isLoading, isError, error, isFetching } =
		useChartPetrol(rangeTimeChart);

	const changeChartTo1D = () => {
		setRangeTimeChart('1d');
	};

	const changeChartTo1Year = () => {
		setRangeTimeChart('1y');
	};
	const changeChartToMax = () => {
		setRangeTimeChart('max');
	};
	let arrayChart = [];
	if (data) {
		data.t.map((result, index) => {
			arrayChart.push({
				time: Math.floor(result / 1000) + 7 * 3600,
				value: data?.price[index],
			});
		});
	}
	// console.log(arrayChart);
	useEffect(() => {
		// setChartData(arrayChart);
		const chartDiv = document.getElementById('container-chart');
		const chartOptions = {
			width: chartDiv?.offsetWidth - 1 || 787,
			height: chartDiv?.offsetHeight || 787,
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
					width: chartDiv?.offsetWidth - 1 || 787,
					height: chartDiv?.offsetHeight || 787,
				});
			}
		};

		chart.timeScale().fitContent();

		return () => {
			chart.remove();
		};
	}, [data]);
	return (
		<div className="mt-[2rem] border border-black">
			<h1 className="text-[2.4rem] font-semibold text-black-text ml-[2rem] my-[2rem]">
				Biểu đồ Petrol
			</h1>

			<div className="flex justify-start text-grey-text text-[1.4rem] mb-[1rem]">
				<div
					onClick={changeChartTo1D}
					className={`ml-[4rem] cursor-pointer hover:opacity-80 ${
						rangeTimeChart === '1d'
							? 'border-b border-grey-boder'
							: ''
					}`}
				>
					1d
				</div>
				<div
					onClick={changeChartTo1Year}
					className={`ml-[4rem] cursor-pointer hover:opacity-80 ${
						rangeTimeChart === '1y'
							? 'border-b border-grey-boder'
							: ''
					}`}
				>
					1y
				</div>
				<div
					onClick={changeChartToMax}
					className={`ml-[4rem] cursor-pointer hover:opacity-80 ${
						rangeTimeChart === 'max'
							? 'border-b border-grey-boder'
							: ''
					}`}
				>
					Tất cả
				</div>
			</div>
			<div>
				<div
					// className="w-full"
					style={{
						height: '415px',
						// width: '100%',
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

export default ChartPetrol;
