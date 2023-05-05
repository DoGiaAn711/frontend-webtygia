import NameHeader from '@components/detail/gold/NameHeader';
import PnjPriceTable from '@components/detail/gold/priceTable/PnjPriceTable';
import MainLayout from '@components/layouts/mainLayout';
import GoldNavigation from '@components/navigation/GoldNavigation';
import Loading from '@components/UI/Loading';
import { useGold } from '@services/gold/useGold';
import { fetchUpdateScoreAndView } from '@services/updateScoreAndView/fetchUpdateScoreAndView';
import { useUser } from '@services/user/useUser';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function PnjView() {
	const [email, setEmail] = useState();
	const [user, setUser] = useState();
	const { isSuccess, data, isLoading, isError } = useGold('pnj');
	const imageURL =
		'https://brademar.com/wp-content/uploads/2022/09/PNJ-Logo-PNG-1.png';
	const name = 'Giá vàng PNJ';

	const { data: userFromDb } = useUser(email);

	useEffect(() => {
		setUser(userFromDb);
	}, [typeof window, userFromDb]);

	useEffect(() => {
		setEmail(localStorage.getItem('email'));

		if (email && data) {
			fetchUpdateScoreAndView(email, data[0]?._id, 'gold', 'Pnj');
		}
	}, [typeof window, email, data]);

	const saveGold = async (id) => {
		try {
			const res = await axios
				.post(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/follow`, {
					email: localStorage.getItem('email'),
					itemId: id,
					category: 'gold',
					detailModel: 'Pnj',
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
					detailModel: 'Pnj',
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
							{/* <PhuQuySjcPriceTable data={data} /> */}
							<PnjPriceTable data={data} />
							<div className=" mt-[4rem] text-black-text">
								<h1 className="text-[2.4rem] text-blue-text font-medium">
									Giới thiệu về Công ty Cổ Phần Vàng Bạc Đá
									Quý Phú Nhuận
								</h1>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Công ty Cổ Phần Vàng Bạc Đá Quý Phú Nhuận có
									tên viết tắt là PNJ.,JSC với các ngành nghề
									kinh doanh chính:
								</p>
								<p className="text-[1.7rem] mt-[1rem] font-normal">
									-Sản xuất kinh doanh trang sức bằng vàng,
									bạc, đá quý, phụ kiện thời trang, quà lưu
									niệm. Kinh doanh đồng hồ và mua bán vàng
									miếng.
								</p>
								<p className="text-[1.7rem] mt-[1rem] font-normal">
									-Dịch vụ kiểm định kim cương, đá quý, kim
									loại quý.
								</p>
								<p className="text-[1.7rem] mt-[1rem] font-normal">
									-Kinh doanh bất động sản.
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Tầm nhìn: Là công ty chế tác và bán lẻ trang
									sức hàng đầu tại châu Á, giữ vị trí số 1
									trong các phân khúc thị trường trang sức
									trung và cao cấp ở Việt Nam.
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Sứ mệnh: PNJ mang lại niềm kiêu hãnh cho
									khách hàng bằng các sản phẩm trang sức tinh
									tế, chất lượng vượt trội.
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Giá trị cốt lõi: Trung thực - Chất lượng -
									Trách nhiệm - Đổi mới - Sáng tạo.
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

export default PnjView;
