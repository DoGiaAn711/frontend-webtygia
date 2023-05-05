import React from 'react';
import NameHeader from './NameHeader';

function Rank1WithoutChart() {
	return (
		<div>
			<NameHeader />
			<div className="h-[1px] border border-grey-boder w-[calc(90%)] mx-auto my-[1rem]"></div>
			<Body />
		</div>
	);
}

export default Rank1WithoutChart;
