import NewsDetailView from '@views/tin-tuc/[id]';
import axios from 'axios';
import React from 'react';

function NewsDetailPage({ params }) {
	return <NewsDetailView params={params} />;
}

export default NewsDetailPage;

// export function getServerSideProps(context) {
// 	return {
// 		props: { params: context.params },
// 	};
// }

export async function getStaticProps(context) {
	const id = context.params.id;
	const res = await axios
		.get(`http://localhost:5000/api/v1/get-detail-news/${id}`)
		.then((res) => res.data[0]);

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			data: res,
		},
	};
}
