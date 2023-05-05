import React from 'react';
import Body from './Body';
import NameHeader from './NameHeader';

function rank1WithChart() {
	return (
		<div>
			<NameHeader />
			<div className="h-[1px] border border-grey-boder w-[calc(90%)] mx-auto my-[1rem]"></div>
			<Body />
		</div>
	);
}

export default rank1WithChart;
