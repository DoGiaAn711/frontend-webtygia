import MainLayout from '@components/layouts/mainLayout';
import { useNewsdetail } from '@services/news/useNews';
import { useRouter } from 'next/router';
import React from 'react';

function NewsDetailView({ params }) {
	const router = useRouter();
	// const id = router.query.id;
	const id = params.id;

	const { data, isLoading, isError, error, isFetching } = useNewsdetail(id);
	console.log(data);

	return (
		<MainLayout>
			<div className=" h-auto sm:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
				{data && (
					<div className=" pt-[2rem] ">
						{/* <h1 className="text-[2.6rem] font-medium">
							{data[0]?.title}
						</h1>
						<img className="w-full" src={data[0]?.image} /> */}
						<div className="ql-snow text-[18px]">
							<div
								className="ql-editor link:"
								style={
									{
										// padding: 0,
										// lineHeight: '1.6rem',
										// fontWeight: '300',
									}
								}
							>
								<h1>{data[0]?.title}</h1>
								<div>
									<img src={data[0]?.image} />
								</div>
								<div
									dangerouslySetInnerHTML={{
										__html: data[0]?.content,
									}}
								></div>
							</div>
						</div>
					</div>
				)}
			</div>
		</MainLayout>
	);
}

export default NewsDetailView;
