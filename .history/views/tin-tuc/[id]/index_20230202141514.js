import MainLayout from '@components/layouts/mainLayout';
import { useNewsdetail } from '@services/news/useNews';
import { useRouter } from 'next/router';
import React from 'react';
import 'react-quill/dist/quill.snow.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

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
								<h1 className="font-medium">
									{data[0]?.title}
								</h1>
								<div className="flex items-center mt-[1rem]">
									<div className="flex items-center">
										<img
											className="w-[3rem] h-[3rem] rounded-[1000px]"
											src={data[0]?.avatarAdminPost}
										/>
										<div className="ml-[1rem] text-[1.4rem] font-normal">
											{data[0]?.nameAdminPost}
										</div>
									</div>
									<div className="flex items-center text-[1.4rem]  ml-auto">
										<div>
											<FiberManualRecordIcon className=" text-gray-400" />
										</div>
										<div className="ml-[0.5rem]">29/10</div>
										<div className="ml-auto">
											<BookmarkIcon className="text-[2.4rem] text-green-500" />
										</div>
									</div>
								</div>
								<div className=" rounded-[20px] max-w-[80rem] mx-auto mt-[2rem]">
									<img
										className="w-full h-[30rem] md:h-[50rem] rounded-[20px]"
										src={data[0]?.image}
									/>
								</div>
								<div
									className="mt-[2rem]"
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
