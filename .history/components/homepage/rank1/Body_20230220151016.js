import React from 'react';
import ExchangeRate from './ExchangeRate';
import dynamic from 'next/dynamic';
const ChartUsd = dynamic(() => import('../../chart/foreignCurrency/ChartUsd'), {
	ssr: false,
});

function Body() {
	return (
		<div className="flex">
			<div>
				<ExchangeRate />
			</div>
			<div>
				<ChartUsd />
			</div>
		</div>
	);
}

export default Body;
