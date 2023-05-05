import NameHeader from '@components/detail/gold/NameHeader';
import MiHongPriceTable from '@components/detail/gold/priceTable/MiHongPriceTable';
import MainLayout from '@components/layouts/mainLayout';
import GoldNavigation from '@components/navigation/GoldNavigation';
import Loading from '@components/UI/Loading';
import { useGold } from '@services/gold/useGold';
import { fetchUpdateScoreAndView } from '@services/updateScoreAndView/fetchUpdateScoreAndView';
import { useUser } from '@services/user/useUser';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function MiHongView() {
	const [email, setEmail] = useState();
	const [user, setUser] = useState();
	const { isSuccess, data, isLoading, isError } = useGold('mihong');
	const imageURL = 'https://mihong.vn/themes/mihong/images/logo.png';
	const name = 'Giá vàng Mi Hồng';

	const { data: userFromDb } = useUser(email);

	useEffect(() => {
		setUser(userFromDb);
	}, [typeof window, userFromDb]);

	useEffect(() => {
		setEmail(localStorage.getItem('email'));

		if (email && data) {
			fetchUpdateScoreAndView(email, data[0]?._id, 'gold', 'MiHong');
		}
	}, [typeof window, email, data]);

	const saveGold = async (id) => {
		try {
			const res = await axios
				.post(`${process.env.PRODUCT}/follow`, {
					email: localStorage.getItem('email'),
					itemId: id,
					category: 'gold',
					detailModel: 'MiHong',
					followCategory: 'followGolds',
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

	const deleteGold = async (id) => {
		try {
			const res = await axios
				.post(`${process.env.PRODUCT}/unfollow`, {
					email: localStorage.getItem('email'),
					itemId: id,
					category: 'gold',
					detailModel: 'MiHong',
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
							<MiHongPriceTable data={data[0]} />
							<div className=" mt-[4rem] text-black-text">
								<h1 className="text-[2.4rem] text-blue-text font-medium">
									Giới thiệu Mi Hồng
								</h1>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Tên doanh nghiệp: Công Ty Trách Nhiệm Hữu
									Hạn Mi Hồng
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Tên tiếng Anh: Mi Hong Company Limited
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Người đại diện theo pháp luật: Ông Nguyễn Tu
									Mi – Chức danh Tổng giám đốc
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Địa chỉ: 306 Bùi Hữu Nghĩa, Phường 2, Quận
									Bình Thạnh, Tp.HCM, Việt Nam
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Điện thoại: +84 (28) 3841 0068
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Fax: +84 (28) 3841 0954
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Email: info@mihong.vn
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Giấy chứng nhận đăng ký kinh doanh:
									0304663538
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Đăng ký: ngày 20/10/2006
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Đăng ký thay đổi: ngày 10/01/2013
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Nơi cấp: Sở Kế Hoạch Và Đầu Tư Thành Phố Hồ
									Chí Minh
								</p>
								<h1 className="text-[2.4rem] text-blue-text font-medium">
									Ngành nghề kinh doanh chính:
								</h1>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									- Sản xuất kinh doanh Vàng Bạc Trang sức, đá
									quý
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									- Mua bán Vàng miếng
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									- Dịch vụ Cầm đồ
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									- Kinh doanh bất động sản
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Xem thêm tại{' '}
									<a
										className=" text-blue-text hover:opacity-80"
										href="https://mihong.vn/vi/trang-chu"
										target="_blank"
										title="Website Mi Hồng"
									>
										https://mihong.vn/vi/trang-chu
									</a>
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

export default MiHongView;
