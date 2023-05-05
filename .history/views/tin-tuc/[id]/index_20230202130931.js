import MainLayout from '@components/layouts/mainLayout';
import { useNewsdetail } from '@services/news/useNews';
import { useRouter } from 'next/router';
import React from 'react';

function NewsDetailView({ params }) {
	const router = useRouter();
	// const id = router.query.id;
	const id = params.id;

	const { data, isLoading, isError, error, isFetching } = useNewsdetail(id);

	return (
		<MainLayout>
			<div className=" h-auto sm:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
				<div className="text-[2.6rem] font-medium pt-[2rem] ">
					<h1>Tin tức thị trường mới nhất</h1>
				</div>
			</div>
		</MainLayout>
	);
}

export default NewsDetailView;
