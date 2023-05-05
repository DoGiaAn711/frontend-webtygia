import NameHeader from '@components/detail/gold/NameHeader';
import BaoTinMinhChauPriceTable from '@components/detail/gold/priceTable/BaoTinMinhChauPriceTable';
import MainLayout from '@components/layouts/mainLayout';
import GoldNavigation from '@components/navigation/GoldNavigation';
import Loading from '@components/UI/Loading';
import { useGold } from '@services/gold/useGold';
import { fetchUpdateScoreAndView } from '@services/updateScoreAndView/fetchUpdateScoreAndView';
import { useUser } from '@services/user/useUser';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function BaoTinMinhChauView() {
	const [email, setEmail] = useState();
	const [user, setUser] = useState();
	const { isSuccess, data, isLoading, isError } = useGold('baoTinMinhChau');
	const imageURL =
		'https://cdnimg.vietnamplus.vn/Uploaded/Subjects/1395653299_1.jpg';
	const name = 'Giá vàng Bảo Tín Minh Châu';

	const { data: userFromDb } = useUser(email);

	useEffect(() => {
		setUser(userFromDb);
	}, [typeof window, userFromDb]);

	useEffect(() => {
		setEmail(localStorage.getItem('email'));

		if (email && data) {
			fetchUpdateScoreAndView(
				email,
				data[0]?._id,
				'gold',
				'BaoTinMinhChau'
			);
		}
	}, [typeof window, email, data]);

	const saveGold = async (id) => {
		try {
			const res = await axios
				.post(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/follow`, {
					email: localStorage.getItem('email'),
					itemId: id,
					category: 'gold',
					detailModel: 'BaoTinMinhChau',
					followCategory: 'followGolds',
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

	const deleteGold = async (id) => {
		try {
			const res = await axios
				.post(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/unfollow`, {
					email: localStorage.getItem('email'),
					itemId: id,
					category: 'gold',
					detailModel: 'BaoTinMinhChau',
					followCategory: 'followGolds',
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
				<GoldNavigation />
				{data && (
					<div className=" h-auto  bg-white-text rounded-[1.5rem] px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
						<div>
							<NameHeader
								saveGold={saveGold}
								deleteGold={deleteGold}
								user={user}
								data={data[0]}
								name={name}
								image={imageURL}
								timeUpdate={data[0]?.timeUpdate}
							/>
							{/* <DojiPriceTable data={data[0]} /> */}
							<BaoTinMinhChauPriceTable data={data[0]} />
							<div className=" mt-[4rem] text-black-text">
								<h1 className="text-[2.4rem] text-blue-text font-medium">
									Giới thiệu về Bảo Tín Minh Châu
								</h1>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Công ty TNHH Vàng Bạc Đá Quý Bảo Tín Minh
									Châu (BTMC). Với hệ thống phân phối trải dài
									từ Bắc vào Nam. Sự đa dạng về chủng loại,
									độc đáo về kiểu dáng, dẫn đầu về xu hướng đã
									đang và sẽ chiếm được sự tin tưởng và yêu
									mến của hàng triệu khách hàng.
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Với trên 20 năm xây dựng và phát triển. BTMC
									đã đạt được một số thành công nhất định, ghi
									nhận bằng các giải thưởng lớn:
								</p>
								<p className=" text-[1.7rem] mt-[1rem] font-normal">
									- 2 Huân chương Lao động do Chủ tịch nước
									trao tặng.
								</p>
								<p className="text-[1.7rem] mt-[1rem] font-normal">
									- 2 Bằng khen của Thủ tướng Chính phủ dành
									tặng Công ty và Doanh nhân văn hóa - Tổng
									Giám đốc Vũ Minh Châu.
								</p>
								<p className="text-[1.7rem] mt-[1rem] font-normal">
									- Cúp vàng Thương hiệu nổi tiếng quốc gia.
								</p>
								<p className="text-[1.7rem] mt-[1rem] font-normal">
									- 3 cúp đỉnh cao chất lượng quốc tế.
								</p>
								<p className="text-[1.7rem] mt-[1rem] font-normal">
									- Cùng nhiều giải thưởng cao quý khác.
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									BTMC luôn nỗ lực hết mình để xứng đáng với
									những giải thưởng đã đạt được. Cũng như
									không ngừng phấn đấu vì mục tiêu mang lại
									những sản phẩm và dịch vụ tốt nhất phục vụ
									khách hàng.
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

export default BaoTinMinhChauView;
