import AgribankPriceTable from '@components/detail/exchange/AgribankPriceTable';
import NameHeader from '@components/detail/exchange/NameHeader';
import MainLayout from '@components/layouts/mainLayout';
import ExchangeRateNavigation from '@components/navigation/ExchangeRateNavigation';
import Loading from '@components/UI/Loading';
import { useExchange } from '@services/exchange/useExchange';
import { fetchUpdateScoreAndView } from '@services/updateScoreAndView/fetchUpdateScoreAndView';
import { useUser } from '@services/user/useUser';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AgribankExchangeView() {
	const [email, setEmail] = useState();
	const [user, setUser] = useState();
	const { isSuccess, data, isLoading, isError } = useExchange('agribank');
	const imageURL =
		'https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Agribank-V.png';
	const name = 'Tỷ giá ngoại tệ Agribank mới nhất';

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
				'AgribankExchange'
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
					detailModel: 'AgribankExchange',
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
					detailModel: 'AgribankExchange',
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
					<div className=" h-auto   bg-white-text rounded-[1.5rem] px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
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
							<AgribankPriceTable data={data} />
							<div className=" mt-[4rem] text-black-text">
								<h1 className="text-[2.4rem] text-blue-text font-medium">
									Giới thiệu về Agribank – Ngân hàng Nông
									nghiệp và Phát triển Nông thôn Việt Nam
								</h1>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Ngân hàng Nông nghiệp và Phát triển Nông
									thôn Việt Nam (Agribank) được thành lập theo
									Nghị định số 53-HĐBT ngày 26/03/1988 của Hội
									đồng Bộ trưởng (nay là Chính phủ). Trải qua
									mỗi thời kỳ phát triển với những tên gọi gắn
									với sứ mệnh khác nhau, xuyên suốt 33 năm xây
									dựng và phát triển, Agribank luôn khẳng định
									vị thế, vai trò của một trong những Ngân
									hàng Thương mại hàng đầu Việt Nam, đi đầu
									thực hiện chính sách tiền tệ, góp phần ổn
									định kinh tế vĩ mô, kiềm chế lạm phát, hỗ
									trợ tăng trưởng, luôn đồng hành cùng sự
									nghiệp phát triển nông nghiệp, nông dân,
									nông thôn, có nhiều đóng góp tích cực thúc
									đẩy quá trình tái cơ cấu nền kinh tế, xây
									dựng nông thôn mới và bảo đảm an sinh xã
									hội.
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Là một trong các ngân hàng thương mại nhà
									nước đóng vai trò chủ lực trong hệ thống
									ngân hàng, Agribank luôn phát huy vai trò
									tiên phong, gương mẫu của một Ngân hàng
									thương mại Nhà nước trong việc dẫn dắt hệ
									thống các tổ chức tín dụng thực thi nghiêm
									túc, có hiệu quả chính sách tiền tệ quốc gia
									và các chủ trương chính sách của Đảng, Nhà
									nước về tiền tệ, ngân hàng, nhất là chính
									sách tín dụng phục vụ phát triển nông
									nghiệp, nông thôn. Agribank đang triển khai
									hiệu quả 07 chương trình tín dụng chính sách
									(Cho vay theo chính sách tín dụng phục vụ
									phát triển nông nghiệp, nông thôn; Cho vay
									hộ gia đình, cá nhân thông qua Tổ vay vốn/tổ
									liên kết; Cho vay theo chính sách hỗ trợ
									nhằm giảm tổn thất trong nông nghiệp; Cho
									vay gia súc, gia cầm; Cho vay tái canh cà
									phê; Cho vay chính sách phát triển thủy sản;
									Tín dụng ưu đãi phục vụ “Nông nghiệp sạch”)
									và 02 Chương trình mục tiêu Quốc gia (xây
									dựng Nông thôn mới, giảm nghèo bền vững).
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Hoạt động phát triển SPDV được Agribank xác
									định lấy khách hàng là trung tâm, mở rộng cơ
									sở khách hàng, phát triển khách hàng mở tài
									khoản và sử dụng dịch vụ tiện ích, Agribank
									chính thức triển khai Đề án đẩy mạnh phát
									triển dịch vụ thẻ tại thị trường nông
									nghiệp, nông thôn, với mục tiêu gia tăng sự
									tiếp cận nguồn vốn ngân hàng của các cá
									nhân, gia đình cũng như các dịch vụ thanh
									toán văn minh, hiện đại trên địa bàn nông
									nghiệp, nông thôn, đẩy mạnh phát triển thanh
									toán không dùng tiền mặt tại Việt Nam. Thông
									qua các chương trình tín dụng và cung ứng
									sản phẩm dịch vụ ngân hàng tiện ích,
									Agribank đã cơ bản đáp ứng đủ vốn với lãi
									suất cho vay ưu đãi, phục vụ kịp thời nhu
									cầu sản xuất kinh doanh của người dân, doanh
									nghiệp, góp phần chung tay cùng các cấp, các
									ngành đẩy lùi tình trạng tín dụng đen, đồng
									thời tiếp tục khẳng định vai trò chủ đạo của
									NHTM Nhà nước trong việc cung ứng vốn và
									SPDV ngân hàng tiện ích phục vụ phát triển
									nông nghiệp, nông thôn và nông dân theo đúng
									mục tiêu cơ cấu lại, góp phần tạo những bước
									bứt phá trong tái cơ cấu nền nông nghiệp
									Việt Nam.
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Trải qua 34 năm xây dựng và trưởng thành,
									Agribank duy trì được sự tăng trưởng ổn định
									cả về quy mô, cơ cấu, chất lượng và hiệu quả
									hoạt động. Nhiều năm liên tiếp, Agribank nằm
									trong Top 10 doanh nghiệp lớn nhất Việt Nam
									và đạt nhiều giải thưởng do các tổ chức quốc
									tế trao tặng. Đặc biệt, đúng vào dịp kỷ niệm
									30 năm ngày thành lập 26/3/2018, Agribank
									vinh dự được đón nhận Huân chương Lao động
									hạng Nhất – phần thưởng cao quý nhất của
									Đảng, Nhà nước Việt Nam dành cho tập thể có
									công lao đóng góp vào công cuộc xây dựng đất
									nước, thành tích xuất sắc phục vụ phát triển
									kinh tế nông nghiệp, nông thôn và nông dân
									trong thời kỳ đổi mới.
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

export default AgribankExchangeView;
