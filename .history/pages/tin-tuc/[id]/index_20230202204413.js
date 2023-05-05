import NewsDetailView from '@views/tin-tuc/[id]';
import axios from 'axios';
import React from 'react';

function NewsDetailPage() {
	return <NewsDetailView />;
}

export default NewsDetailPage;

// export function getServerSideProps(context) {
// 	return {
// 		props: { params: context.params },
// 	};
// }
