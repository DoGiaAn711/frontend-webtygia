import React, { useRef, useEffect } from 'react';

// const data = [
// 	{ value: 10 },
// 	{ value: 20 },
// 	{ value: 30 },
// 	{ value: 40 },
// 	{ value: 50 },
// ];
const data = [
	{ value: 15.618 },

	{ value: 16.975 },

	{ value: 17.655 },

	{ value: 17.655 },

	{ value: 17.316 },

	{ value: 17.316 },

	{ value: 17.994 },

	{ value: 17.655 },

	{ value: 16.636 },

	{ value: 16.636 },

	{ value: 16.975 },

	{ value: 19.488 },

	{ value: 16.636 },

	{ value: 16.636 },

	{ value: 16.636 },

	{ value: 16.636 },

	{ value: 16.636 },

	{ value: 16.975 },

	{ value: 17.179 },

	{ value: 17.994 },

	{ value: 19.012 },

	{ value: 16.569 },

	{ value: 16.365 },

	{ value: 16.161 },

	{ value: 16.772 },

	{ value: 16.365 },

	{ value: 16.432 },

	{ value: 15.618 },

	{ value: 15.481 },

	{ value: 15.618 },

	{ value: 15.278 },

	{ value: 15.414 },

	{ value: 15.346 },

	{ value: 15.414 },

	{ value: 15.278 },

	{ value: 15.346 },

	{ value: 15.685 },

	{ value: 15.618 },

	{ value: 15.753 },

	{ value: 15.481 },

	{ value: 15.55 },

	{ value: 15.481 },

	// { value: 15.618 },

	// { value: 15.618 },

	// { value: 15.55 },

	// { value: 15.481 },

	// { value: 15.481 },

	// { value: 15.481 },

	// { value: 15.55 },

	// { value: 15.618 },

	// { value: 15.618 },

	// { value: 15.685 },

	// { value: 15.685 },

	// { value: 15.685 },

	// { value: 15.685 },

	// { value: 15.685 },

	// { value: 15.685 },

	// { value: 15.685 },

	// { value: 15.481 },

	// { value: 15.481 },

	// { value: 15.481 },

	// { value: 15.414 },

	// { value: 15.414 },

	// { value: 15.414 },

	// { value: 15.414 },

	// { value: 15.414 },

	// { value: 15.346 },

	// { value: 15.346 },

	// { value: 15.55 },

	// { value: 15.481 },

	// { value: 15.414 },

	// { value: 15.414 },

	// { value: 15.414 },

	// { value: 15.414 },

	// { value: 15.414 },

	// { value: 15.414 },

	// { value: 15.414 },

	// { value: 15.414 },

	// { value: 15.414 },

	// { value: 15.346 },

	// { value: 15.753 },

	// { value: 15.346 },

	// { value: 15.346 },

	// { value: 15.346 },

	// { value: 15.346 },

	// { value: 15.414 },

	// { value: 15.753 },

	// { value: 15.346 },

	// { value: 15.278 },

	// { value: 15.278 },

	// { value: 15.278 },

	// { value: 15.21 },

	// { value: 15.21 },

	// { value: 15.21 },

	// { value: 15.21 },

	// { value: 15.21 },

	// { value: 15.21 },

	// { value: 15.143 },

	// { value: 15.143 },

	// { value: 15.075 },

	// { value: 15.143 },

	// { value: 15.143 },

	// { value: 15.143 },

	// { value: 15.075 },

	// { value: 15.143 },

	// { value: 15.143 },

	// { value: 15.143 },

	// { value: 15.143 },

	// { value: 15.143 },

	// { value: 15.143 },

	// { value: 15.075 },

	// { value: 15.075 },

	// { value: 15.005 },

	// { value: 15.005 },

	// { value: 15.005 },

	// { value: 15.005 },

	// { value: 15.005 },

	// { value: 15.005 },

	// { value: 15.005 },

	// { value: 14.939 },

	// { value: 14.939 },

	// { value: 14.939 },

	// { value: 14.939 },

	// { value: 14.939 },

	// { value: 14.939 },

	// { value: 14.939 },

	// { value: 14.871 },

	// { value: 14.599 },

	// { value: 14.259 },

	// { value: 14.124 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.852 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.852 },

	// { value: 13.92 },

	// { value: 13.852 },

	// { value: 13.92 },

	// { value: 13.988 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.988 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.852 },

	// { value: 13.988 },

	// { value: 13.988 },

	// { value: 13.988 },

	// { value: 13.988 },

	// { value: 13.92 },

	// { value: 13.988 },

	// { value: 13.988 },

	// { value: 13.988 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.988 },

	// { value: 13.988 },

	// { value: 13.988 },

	// { value: 13.988 },

	// { value: 13.988 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.988 },

	// { value: 13.92 },

	// { value: 13.852 },

	// { value: 13.92 },

	// { value: 13.988 },

	// { value: 13.988 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 14.056 },

	// { value: 13.988 },

	// { value: 13.988 },

	// { value: 13.92 },

	// { value: 13.988 },

	// { value: 13.852 },

	// { value: 13.92 },

	// { value: 13.852 },

	// { value: 13.852 },

	// { value: 13.852 },

	// { value: 13.852 },

	// { value: 13.92 },

	// { value: 13.988 },

	// { value: 13.92 },

	// { value: 13.988 },

	// { value: 13.92 },

	// { value: 13.852 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.852 },

	// { value: 13.852 },

	// { value: 13.852 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.852 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.852 },

	// { value: 13.852 },

	// { value: 13.92 },

	// { value: 13.852 },

	// { value: 13.852 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.852 },

	// { value: 13.852 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.92 },

	// { value: 13.784 },

	// { value: 13.852 },

	// { value: 13.92 },
];
const width = 150;
const height = 50;

const SimpleChartCanvas = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		const values = data.map((item) => item.value);
		const maxValue = Math.max(...values);
		// const yRatio = height / maxValue;
		const yRatio = 2;
		// const xRatio = 1;
		const xRatio = width / data.length;

		// Clear canvas
		ctx.clearRect(0, 0, width, height);

		// Draw the line chart
		ctx.beginPath();
		ctx.moveTo(0, height - values[0] * yRatio);
		for (let i = 1; i < data.length; i++) {
			ctx.lineTo(i * xRatio, height - values[i] * yRatio);
		}
		ctx.stroke();
	}, [data, width, height]);

	return (
		<div>
			<div>BTC</div>
			<canvas
				className="block"
				ref={canvasRef}
				width={width}
				height={height}
			/>
		</div>
	);
};

export default SimpleChartCanvas;
