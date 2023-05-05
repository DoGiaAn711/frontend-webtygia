import NewsDetailView from '@views/tin-tuc/[id]';
import axios from 'axios';
import React from 'react';

function NewsDetailPage({ data }) {
	return <NewsDetailView data={data} />;
}

export default NewsDetailPage;

// export async function getStaticPaths() {
// 	const res = await axios
// 		.get(`${process.env.PRODUCT_URL}/get-all-news`)
// 		.then((res) => res.data.data);
// 	const paths = res.map((post) => ({
// 		params: { id: post?.timeUpdate.toString() },
// 	}));

// 	return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
// 	const id = params.id;
// 	const data = await axios
// 		.get(`${process.env.PRODUCT_URL}/get-detail-news/${id}`)
// 		.then((data) => data.data.data[0]);

// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// }

export async function getServerSideProps({ params }) {
	const id = params.id;
	const data = await axios
		.get(`${process.env.PRODUCT_URL}/get-detail-news/${id}`)
		.then((data) => data.data.data[0]);

	return {
		props: {
			data,
		},
	};
}
