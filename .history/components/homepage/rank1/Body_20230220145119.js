import ExchangeRate from '@components/detail/stock/exchangeRate';
import React from 'react';

function Body() {
	return (
		<div className="flex">
			<div>
				<ExchangeRate />
			</div>
			<div>chart</div>
		</div>
	);
}

export default Body;
