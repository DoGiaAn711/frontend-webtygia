import NewsDetailView from '@views/tin-tuc/[id]';
import React from 'react';

function NewsDetailPage({ params }) {
	return <NewsDetailView params={params} />;
}

export default NewsDetailPage;

export function getServerSideProps(context) {
	return {
		props: { params: context.params },
	};
}
