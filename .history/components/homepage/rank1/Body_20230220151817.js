import React from 'react';
import ExchangeRate from './ExchangeRate';
import dynamic from 'next/dynamic';
const ChartUsd = dynamic(() => import('./ChartUsd'), {
	ssr: false,
});

function Body() {
	return (
		<div className="flex w-full">
			<div className="w-[calc(40%)]">
				<ExchangeRate />
			</div>
			<div className="w-[calc(60%)] h-[162px]">
				<ChartUsd />
			</div>
		</div>
	);
}

export default Body;
