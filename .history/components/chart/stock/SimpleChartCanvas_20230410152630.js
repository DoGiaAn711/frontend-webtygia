import React, { useRef, useEffect } from 'react';

const data = [
	{ value: 10 },
	{ value: 20 },
	{ value: 30 },
	{ value: 40 },
	{ value: 50 },
];
const width = 150;
const height = 150;

const SimpleChartCanvas = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		const values = data.map((item) => item.value);
		const maxValue = Math.max(...values);
		const yRatio = height / maxValue;
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

	return <canvas ref={canvasRef} width={width} height={height} />;
};

export default SimpleChartCanvas;
