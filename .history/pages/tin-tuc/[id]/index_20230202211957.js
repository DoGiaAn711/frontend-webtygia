import NewsDetailView from '@views/tin-tuc/[id]';
import axios from 'axios';
import React from 'react';

function NewsDetailPage({ data }) {
	console.log(data);
	return <NewsDetailView />;
}

export default NewsDetailPage;

export async function getStaticPaths() {
	const res = await axios
		.get('http://localhost:5000/api/v1/get-all-news')
		.then((res) => res.data.data);
	const paths = res.map((item) => {
		params: {
			id: item.timeUpdate.toString();
		}
	});

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const id = params.id;
	const data = await axios
		.get(`http://localhost:5000/api/v1/get-detail-news/${id}`)
		.then((data) => data.data.data[0]);

	return {
		props: {
			data,
		},
	};
}
