import NewsDetailView from '@views/tin-tuc/[id]';
import axios from 'axios';
import React from 'react';

function NewsDetailPage() {
	return <NewsDetailView />;
}

export default NewsDetailPage;

export async function getStaticPaths() {
	const res = await axios.get('http://localhost:5000/api/v1/get-all-news').then((res) => res.data.data)
	const paths = res.map((item) => 
		params: {id: item.timeUpdate}
	)
}
