import React from 'react';

function CoinPageDetail() {
	return <div>CoinPageDetail</div>;
}

export default CoinPageDetail;

export async function getServerSideProps(context) {
	const nameId = context.params.nameId;
	// Fetch data from external API
	const data = await fetch(
		`http://localhost:5000/api/v1/coin/detail/${nameId}`
	)
		.then((res) => res.json())
		.then((res) => res.data);

	// Pass data to the page via props
	return { props: { data } };
}
