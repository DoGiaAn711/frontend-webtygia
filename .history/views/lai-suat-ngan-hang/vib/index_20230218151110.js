import NameHeader from '@components/detail/interest/NameHeader';
import VibPriceTable from '@components/detail/interest/priceTable/VibPriceTable';
import MainLayout from '@components/layouts/mainLayout';
import InterestRateNavigation from '@components/navigation/InterestRateNavigation';
import { useInterest } from '@services/interest/useInterest';
import { fetchUpdateScoreAndView } from '@services/updateScoreAndView/fetchUpdateScoreAndView';
import { useUser } from '@services/user/useUser';
import React, { useEffect, useState } from 'react';

function VibInterestView() {
	const [email, setEmail] = useState();
	const [user, setUser] = useState();
	const { isSuccess, data, isLoading, isError } = useInterest('vib');
	const imageURL =
		'https://static.wixstatic.com/media/9d8ed5_e8f0cd6914be4a50a8c93e800748313a~mv2.jpg/v1/fill/w_1182,h_1182,al_c,q_85/9d8ed5_e8f0cd6914be4a50a8c93e800748313a~mv2.jpg';
	const name = 'Lãi suất gửi tiết kiệm VIB mới nhất';

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
				'VibInterestRate'
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
					detailModel: 'VibInterestRate',
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
					detailModel: 'VibInterestRate',
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
					<div className=" h-auto  mb-[2.5rem] bg-white-text rounded-[1.5rem] px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
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
							<VibPriceTable data={data} />
							<div className=" mt-[4rem]">
								<h1 className="text-[2.4rem] text-blue-text font-medium">
									Giới thiệu về VIB – Ngân hàng Thương mại cổ
									phần Quốc Tế Việt Nam
								</h1>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Ngân hàng Thương mại cổ phần (TMCP) Quốc Tế
									Việt Nam, tên viết tắt Ngân hàng Quốc Tế
									(VIB), là một trong những ngân hàng TMCP
									hàng đầu tại Việt Nam.
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Sau hơn 20 năm thành lập, VIB đã đạt được
									những bước phát triển vượt bậc
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Thành lập ngày 18/9/1996, VIB bắt đầu đi vào
									hoạt động với số vốn điều lệ ban đầu là 50
									tỷ đồng và 23 cán bộ nhân viên.
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Đến ngày 30/06/2022,vốn điều lệ VIB đạt hơn
									21.076 tỷ đồng. Vốn chủ sở hữu đạt hơn
									28.250 tỷ đồng và tổng tài sản đạt hơn
									348.000 tỷ đồng.
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									VIB hiện có hơn 11.000 cán bộ nhân viên, làm
									việc tại 174 chi nhánh và phòng giao dịch ở
									27 tỉnh/thành trọng điểm trong cả nước.
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</MainLayout>
	);
}

export default VibInterestView;
