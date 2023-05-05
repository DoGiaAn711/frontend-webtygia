import React from 'react';
import ExchangeRate from './ExchangeRate';
import dynamic from 'next/dynamic';
const ChartUsd = dynamic(() => import('../../chart/foreignCurrency/ChartUsd'), {
	ssr: false,
});

function Body() {
	return (
		<div className="flex w-full">
			<div className="w-[calc(40%)]">
				<ExchangeRate />
			</div>
			<div className="max-w-[calc(60%)] w-full">
				<ChartUsd />
			</div>
		</div>
	);
}

export default Body;
