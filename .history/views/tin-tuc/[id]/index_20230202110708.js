import MainLayout from '@components/layouts/mainLayout';
import { useRouter } from 'next/router';
import React from 'react';

function NewsDetailView() {
	const router = useRouter();
	const id = router.query.id;
	console.log(id);
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
