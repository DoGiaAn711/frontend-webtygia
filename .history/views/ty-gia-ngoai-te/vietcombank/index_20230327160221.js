import VietcombankPriceTable from '@components/detail/exchange/VietcombankPriceTable';
import NameHeader from '@components/detail/exchange/NameHeader';
import MainLayout from '@components/layouts/mainLayout';
import ExchangeRateNavigation from '@components/navigation/ExchangeRateNavigation';
import { useExchange } from '@services/exchange/useExchange';
import { fetchUpdateScoreAndView } from '@services/updateScoreAndView/fetchUpdateScoreAndView';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '@services/user/useUser';
import Loading from '@components/UI/Loading';

function VietcombankExchangeView() {
	const [email, setEmail] = useState();
	const [user, setUser] = useState();
	const { isSuccess, data, isLoading, isError } = useExchange('vietcombank');
	const imageURL =
		'https://www.inlogo.vn/vnt_upload/File/Image/logo_VCB_828891.jpg';
	const name = 'Tỷ giá ngoại tệ Vietcombank bank mới nhất';

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
				'exchange-rate',
				'VietcombankExchange'
			);
		}
	}, [typeof window, email, data]);

	const saveExchangeRate = async (id) => {
		try {
			const res = await axios
				.post(`${process.env.PRODUCT}/follow`, {
					email: localStorage.getItem('email'),
					itemId: id,
					category: 'exchange-rate',
					detailModel: 'VietcombankExchange',
					followCategory: 'followExchangeRates',
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

	const deleteExchangeRate = async (id) => {
		try {
			const res = await axios
				.post(`${process.env.PRODUCT}/unfollow`, {
					email: localStorage.getItem('email'),
					itemId: id,
					category: 'exchange-rate',
					detailModel: 'VietcombankExchange',
					followCategory: 'followExchangeRates',
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
				<ExchangeRateNavigation />
				{data && (
					<div className=" h-auto  mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
						<div>
							<NameHeader
								saveExchangeRate={saveExchangeRate}
								deleteExchangeRate={deleteExchangeRate}
								user={user}
								data={data}
								name={name}
								image={imageURL}
								timeUpdate={data?.timeUpdate}
							/>
							<VietcombankPriceTable data={data} />
							<div className=" mt-[4rem] text-black-text">
								<h1 className="text-[2.4rem] text-blue-text font-medium">
									Giới thiệu về Vietcombank – Ngân hàng thương
									mại cổ phần Ngoại thương Việt Nam
								</h1>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Ngân hàng TMCP Ngoại thương Việt Nam (tên
									giao dịch quốc tế: Joint Stock Commercial
									Bank for Foreign Trade of Vietnam) tên viết
									tắt: "Vietcombank", là công ty lớn nhất trên
									thị trường chứng khoán Việt Nam tính theo
									vốn hóa.
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Tại ngày 30/06/2020, Vietcombank có 30.115
									nhân viên, Ngân hàng có 1 Trụ sở chính, 1
									Trường Đào tạo và Phát triển nguồn nhân lực
									Vietcombank, 2 Trung tâm xử lý tiền mặt, 116
									chi nhánh trên toàn quốc, 4 công ty con tại
									Việt Nam, 3 Công ty con tại nước ngoài, 2
									công ty liên doanh, 1 công ty liên kết, 1
									văn phòng đại diện đặt tại Mỹ, 1 văn phòng
									đại diện đặt tại Singapore và 1 văn phòng
									đại diện đặt tại thành phố Hồ Chí Minh.
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

export default VietcombankExchangeView;
