import VietinbankPriceTable from '@components/detail/exchange/VietinbankPriceTable';
import NameHeader from '@components/detail/exchange/NameHeader';
import MainLayout from '@components/layouts/mainLayout';
import ExchangeRateNavigation from '@components/navigation/ExchangeRateNavigation';
import { useExchange } from '@services/exchange/useExchange';
import { fetchUpdateScoreAndView } from '@services/updateScoreAndView/fetchUpdateScoreAndView';
import React, { useEffect, useState } from 'react';
import { useUser } from '@services/user/useUser';
import axios from 'axios';
import Loading from '@components/UI/Loading';

function VietinbankExchangeView() {
	const [email, setEmail] = useState();
	const [user, setUser] = useState();
	const { isSuccess, data, isLoading, isError } = useExchange('vietinbank');
	const imageURL =
		'https://scontent.iocvnpt.com/resources/portal/Images/CTO/superadminportal.cto/TienIch/NganHang/VietinBank/vietinbank_637018943312743351.jpg';
	const name = 'Lãi suất gửi tiết kiệm Vietinbank mới nhất';

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
				'VietinBankExchange'
			);
		}
	}, [typeof window, email, data]);

	const saveExchangeRate = async (id) => {
		try {
			const res = await axios
				.post(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/follow`, {
					email: localStorage.getItem('email'),
					itemId: id,
					category: 'exchange-rate',
					detailModel: 'VietinBankExchange',
					followCategory: 'followExchangeRates',
				})
				.then(function (response) {
					console.log('success');
				});
			const user = await axios
				.get(
					`${
						process.env.NEXT_PUBLIC_PRODUCT_URL
					}/user/${localStorage.getItem('email')}`
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
				.post(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/unfollow`, {
					email: localStorage.getItem('email'),
					itemId: id,
					category: 'exchange-rate',
					detailModel: 'VietinBankExchange',
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
					`${
						process.env.NEXT_PUBLIC_PRODUCT_URL
					}/user/${localStorage.getItem('email')}`
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
							<VietinbankPriceTable data={data} />
							<div className=" mt-[4rem] text-black-text">
								<h1 className="text-[2.4rem] text-blue-text font-medium">
									Giới thiệu về VietinBank – Ngân hàng Thương
									mại cổ phần Công Thương Việt Nam
								</h1>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Ngân hàng TMCP Công Thương Việt Nam (tên
									giao dịch quốc tế: Vietnam Joint Stock
									Commercial Bank For Industry And Trade) tên
									viết tắt: "VietinBank", là một ngân hàng
									thương mại lớn của Việt Nam.
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Được thành lập từ năm 1988 sau khi tách ra
									từ Ngân hàng Nhà nước Việt Nam.[2] Tên giao
									dịch ban đầu là IncomBank. Năm 2008,
									IncomBank đổi tên thành Vietinbank.
									VietinBank hiện có 1 Sở giao dịch, 150 Chi
									nhánh và trên 1000 Phòng giao dịch/ Quỹ tiết
									kiệm trải rộng trên toàn quốc.
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

export default VietinbankExchangeView;
