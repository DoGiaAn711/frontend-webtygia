import NameHeader from '@components/detail/gold/NameHeader';
import DojiPriceTable from '@components/detail/gold/priceTable/DojiPriceTable';
import MainLayout from '@components/layouts/mainLayout';
import GoldNavigation from '@components/navigation/GoldNavigation';
import Loading from '@components/UI/Loading';
import { useGold } from '@services/gold/useGold';
import { fetchUpdateScoreAndView } from '@services/updateScoreAndView/fetchUpdateScoreAndView';
import { useUser } from '@services/user/useUser';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function DojiView() {
	const [email, setEmail] = useState();
	const [user, setUser] = useState();
	const { isSuccess, data, isLoading, isError } = useGold('doji');
	const imageURL =
		'https://gigamall.com.vn/data/2019/09/20/16350118_LOGO-DOJI.png';
	const name = 'Giá vàng DOJI';

	const { data: userFromDb } = useUser(email);

	useEffect(() => {
		setUser(userFromDb);
	}, [typeof window, userFromDb]);

	useEffect(() => {
		setEmail(localStorage.getItem('email'));

		// if (email && data) {
		// 	fetchUpdateScoreAndView(email, data[0]?._id, 'gold', 'Doji');
		// }
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
					<div className=" h-auto   bg-white-text rounded-[1.5rem] px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
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
							<DojiPriceTable data={data[0]} />
							<div className=" mt-[4rem] text-black-text">
								<h1 className="text-[2.4rem] text-blue-text font-medium">
									Giới thiệu về Tập đoàn Vàng Bạc Đá Quý DOJI
								</h1>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Tập đoàn Vàng Bạc Đá Quý DOJI (DOJI) được
									thành lập ngày 28/07/1994.
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Tập đoàn DOJI đã tạo một dấu ấn mạnh mẽ
									trong cộng đồng doanh nghiệp Việt Nam nói
									chung và trong lĩnh vực vàng bạc đá quý nói
									riêng. Với tốc độ tăng trưởng doanh thu ấn
									tượng và giá trị thương hiệu ngày càng lớn
									mạnh. Chiếm lĩnh thị trường nội địa với hệ
									thống kinh doanh Vàng miếng, phân phối Kim
									cương và trang sức cao cấp khắp ba miền Bắc
									– Trung – Nam. Thương hiệu DOJI đang bước đi
									vững chãi trong lộ trình chinh phục khách
									hàng bằng uy tín và chất lượng sản phẩm.
									Luôn chú trọng đầu tư thiết bị và công nghệ
									sản xuất, Tập đoàn DOJI thể hiện nhiều lợi
									thế cạnh tranh so với các sản phẩm cùng phân
									khúc và thành danh với các thương hiệu nổi
									tiếng như: Trang sức Kim cương Diamond
									House, Trang sức Đá màu Gems City, Trang sức
									Cưới Wedding Land, Trang sức Bạc Silver
									d’amour, Trang sức Vàng ta Lộc Phát Tài.
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Với tầm nhìn chiến lược, quan điểm phát
									triển bền vững, tiềm lực hùng mạnh, Tập đoàn
									DOJI khẳng định đẳng cấp thương hiệu quốc
									gia Việt Nam, sẵn sàng tâm thế hội nhập và
									vươn xa trong khu vực cũng như quốc tế trong
									tương lai.
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

export default DojiView;
