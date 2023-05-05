import NameHeader from '@components/detail/interest/NameHeader';
import ScbPriceTable from '@components/detail/interest/priceTable/ScbPriceTable';
import MainLayout from '@components/layouts/mainLayout';
import InterestRateNavigation from '@components/navigation/InterestRateNavigation';
import Loading from '@components/UI/Loading';
import { useInterest } from '@services/interest/useInterest';
import { fetchUpdateScoreAndView } from '@services/updateScoreAndView/fetchUpdateScoreAndView';
import { useUser } from '@services/user/useUser';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ScbInterestView() {
	// const [email, setEmail] = useState();
	const [user, setUser] = useState();
	const { isSuccess, data, isLoading, isError } = useInterest('scb');
	const imageURL =
		'https://www.scb.com.vn/picture/y_nghi_logo_scb_truc_doc_1_.webp';
	const name = 'Lãi suất gửi tiết kiệm SCB mới nhất';

	const { data: userFromDb } = useUser();

	useEffect(() => {
		if (data && userFromDb) {
			setUser(userFromDb);
			// fetchUpdateScoreAndView(
			// 	// email,
			// 	data?._id,
			// 	'interest-rate',
			// 	'ScbInterestRate'
			// );
		}
	}, [data, userFromDb]);

	// const saveInterestRate = async (id) => {
	// 	try {
	// 		const res = await axios
	// 			.post(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/follow`, {
	// 				email: localStorage.getItem('email'),
	// 				itemId: id,
	// 				category: 'interest-rate',
	// 				detailModel: 'ScbInterestRate',
	// 				followCategory: 'followInterestRates',
	// 			})
	// 			.then(function (response) {
	// 				console.log('success');
	// 			});
	// 		const user = await axios
	// 			.get(
	// 				`${
	// 					process.env.NEXT_PUBLIC_PRODUCT_URL
	// 				}/user/${localStorage.getItem('email')}`
	// 			)
	// 			.then((res) => res.data.data[0]);
	// 		setUser(user);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// const deleteInterestRate = async (id) => {
	// 	try {
	// 		const res = await axios
	// 			.post(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/unfollow`, {
	// 				email: localStorage.getItem('email'),
	// 				itemId: id,
	// 				category: 'interest-rate',
	// 				detailModel: 'ScbInterestRate',
	// 				followCategory: 'followInterestRates',
	// 			})
	// 			.then(function (response) {
	// 				console.log('success');
	// 			})
	// 			.catch(function (error) {
	// 				console.log(error);
	// 			});

	// 		const user = await axios
	// 			.get(
	// 				`${
	// 					process.env.NEXT_PUBLIC_PRODUCT_URL
	// 				}/user/${localStorage.getItem('email')}`
	// 			)
	// 			.then((res) => res.data.data[0]);
	// 		setUser(user);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	return (
		<MainLayout>
			<div className="mt-[1rem] lg:mt-[4.6rem] mb-[2.5rem]">
				<InterestRateNavigation />
				{data && (
					<div className=" h-auto  mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
						<div>
							<NameHeader
								// saveInterestRate={saveInterestRate}
								// deleteInterestRate={deleteInterestRate}
								user={user}
								data={data}
								name={name}
								image={imageURL}
								timeUpdate={data?.timeUpdate}
							/>
							<ScbPriceTable data={data} />
							<div className=" mt-[4rem] text-black-text">
								<h1 className="text-[2.4rem] text-blue-text font-medium">
									Giới thiệu về SCB – Ngân hàng Thương Mại Cổ
									Phần Sài Gòn
								</h1>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Ngân hàng Thương mại cổ phần Sài Gòn (tên
									giao dịch bằng tiếng Anh Sai Gon Joint Stock
									Commercial Bank, viết tắt là SCB) là một
									ngân hàng thương mại tại Việt Nam có trụ sở
									đặt tại Thành phố Hồ Chí Minh.
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									SCB được hợp nhất vào năm 2012 từ ba ngân
									hàng Đệ Nhất (Ficombank), Việt Nam Tín Nghĩa
									(TinNghiaBank) và Sài Gòn (SCB) đều có trụ
									sở tại Thành phố Hồ Chí Minh. Đây là thương
									vụ hợp nhất đầu tiên trong ngành ngân hàng
									Việt Nam, đánh dấu sự bắt đầu quá trình tái
									cấu trúc hệ thống ngân hàng.
								</p>
							</div>
						</div>
					</div>
				)}
				{isLoading && <Loading />}
			</div>
		</MainLayout>
	);
}

export default ScbInterestView;
