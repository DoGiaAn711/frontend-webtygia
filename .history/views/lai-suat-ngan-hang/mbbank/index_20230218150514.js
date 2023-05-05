import NameHeader from '@components/detail/gold/NameHeader';
import MbPriceTable from '@components/detail/interest/priceTable/MbPriceTable';
import MainLayout from '@components/layouts/mainLayout';
import InterestRateNavigation from '@components/navigation/InterestRateNavigation';
import { useInterest } from '@services/interest/useInterest';
import { fetchUpdateScoreAndView } from '@services/updateScoreAndView/fetchUpdateScoreAndView';
import { useUser } from '@services/user/useUser';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function MbbankInterestView() {
	const [email, setEmail] = useState();
	const [user, setUser] = useState();
	const { isSuccess, data, isLoading, isError } = useInterest('mbbank');
	const imageURL =
		'https://inkythuatso.com/uploads/images/2021/11/mb-bank-logo-inkythuatso-01-10-09-01-10.jpg';
	const name = 'Lãi suất gửi tiết kiệm MB bank mới nhất';

	const { data: userFromDb } = useUser(email);

	useEffect(() => {
		setUser(userFromDb);
	}, [typeof window, userFromDb]);

	useEffect(() => {
		setEmail(localStorage.getItem('email'));

		if (email && data) {
			fetchUpdateScoreAndView(
				email,
				data?._id,
				'interest-rate',
				'MbbankInterestRate'
			);
		}
	}, [typeof window, email, data]);

	const saveInterestRate = async (id) => {
		try {
			const res = await axios
				.post(`${process.env.PRODUCT}/follow`, {
					email: localStorage.getItem('email'),
					itemId: id,
					category: 'interest-rate',
					detailModel: 'MbbankInterestRate',
					followCategory: 'followInterestRates',
				})
				.then(function (response) {
					console.log('success');
				});
			const user = await axios
				.get(
					`${process.env.PRODUCT}/user/${localStorage.getItem(
						'email'
					)}`
				)
				.then((res) => res.data.data[0]);
			setUser(user);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteInterestRate = async (id) => {
		try {
			const res = await axios
				.post(`${process.env.PRODUCT}/unfollow`, {
					email: localStorage.getItem('email'),
					itemId: id,
					category: 'interest-rate',
					detailModel: 'MbbankInterestRate',
					followCategory: 'followInterestRates',
				})
				.then(function (response) {
					console.log('success');
				})
				.catch(function (error) {
					console.log(error);
				});

			const user = await axios
				.get(
					`${process.env.PRODUCT}/user/${localStorage.getItem(
						'email'
					)}`
				)
				.then((res) => res.data.data[0]);
			setUser(user);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<MainLayout>
			<div className="mt-[1rem] lg:mt-[4.6rem] mb-[2.5rem]">
				<InterestRateNavigation />
				{data && (
					<div className=" h-auto  mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
						<div>
							<NameHeader
								saveInterestRate={saveInterestRate}
								deleteInterestRate={deleteInterestRate}
								user={user}
								data={data}
								name={name}
								image={imageURL}
								timeUpdate={data?.timeUpdate}
							/>
							{/* <BidvPriceTable data={data} /> */}
							<MbPriceTable data={data} />
							<div className=" mt-[4rem]">
								<h1 className="text-[2.4rem] text-blue-text font-medium">
									Giới thiệu về MBBank – Ngân hàng TMCP Quân
									đội (MBBank)
								</h1>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									MBBank là tên gọi viết tắt của Ngân hàng
									Thương mại Cổ phần Quân Đội (tên giao dịch
									tiếng Anh là Military Commercial Joint Stock
									Bank). Đây là một ngân hàng thương mại cổ
									phần của Việt Nam và đồng thời cũng là một
									doanh nghiệp trực thuộc Bộ Quốc Phòng, được
									thành lập vào ngày 4 tháng 11 năm 1994 bởi
									các cổ đông chính là: Viettel, Tổng Công ty
									Đầu tư và kinh doanh vốn Nhà nước, Tổng Công
									ty Trực thăng Việt Nam và Tổng Công ty Tân
									Cảng Sài Gòn.
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Ngân hàng Quân Đội hiện đang đặt trụ sở
									chính tại số 63 Lê Văn Lương, Cầu Giấy, Hà
									Nội. Ngoài trụ sở chính, MBBank cũng đã mở
									rộng mạng lưới, phủ sóng toàn quốc với hơn
									100 chi nhánh, 190 điểm giao dịch. Bên cạnh
									đó, ngân hàng MB còn xây dựng mạng lưới quốc
									tế với văn phòng đại diện ở Lào, Campuchia
									và Liên Bang Nga.
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</MainLayout>
	);
}

export default MbbankInterestView;
