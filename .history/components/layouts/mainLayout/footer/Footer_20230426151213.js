import React from 'react';
// import './footer.css';

function Footer() {
	return (
		<div className="mb-[64px] sm:mb-0">
			<footer className="kilimanjaro_area">
				{/* <!-- Top Footer Area Start --> */}
				<div className="foo_top_header_one section_padding_100_70 px-[20px]">
					<div className="">
						<div className="grid grid-cols-2  lg:grid-cols-3 gap-8">
							<div className="">
								<div class="kilimanjaro_part">
									<h5>Giới thiệu</h5>
									<p className="text-[13px]">
										Tygia24h là một trang web cung cấp thông
										tin cập nhật về giá tiền điện tử, cổ
										phiếu, lãi suất ngân hàng, tỷ giá ngoại
										tệ, vàng và tin tức liên quan tới các
										chủ đề này. Với giao diện thân thiện và
										dễ sử dụng, Tygia24h giúp người dùng có
										thể dễ dàng theo dõi và cập nhật thông
										tin mới nhất về các loại tài sản đầu tư
										này.
									</p>
									<br />
									<p className="text-[13px]">
										Trang web cập nhật thông tin từ các
										nguồn tin uy tín và đáng tin cậy, giúp
										người dùng có thể đưa ra quyết định đầu
										tư thông minh và hiệu quả. Bạn có thể
										tìm kiếm thông tin theo loại tài sản, để
										theo dõi tình hình của các thị trường
										mình quan tâm. Ngoài ra, Tygia24h cũng
										cung cấp biểu đồ phân tích giúp người
										dùng đánh giá và so sánh giá cả, xu
										hướng và biến động của các tài sản đầu
										tư.
									</p>
									<br />
									<p className="text-[13px]">
										Nếu bạn đang quan tâm đến các loại tài
										sản đầu tư trên thị trường, Tygia24h sẽ
										là một nguồn thông tin hữu ích và đáng
										tin cậy. Với Tygia24h, bạn sẽ không bỏ
										lỡ bất kỳ tin tức quan trọng nào về các
										tài sản đầu tư mình quan tâm. Hãy ghé
										thăm trang web và trải nghiệm ngay hôm
										nay!
									</p>
								</div>
							</div>
							<div className="">
								<div className="kilimanjaro_part">
									<h5>Thông tin</h5>
									<ul className="kilimanjaro_links">
										<li>
											<a
												href={`${process.env.NEXT_PUBLIC_FE_URL}/coin`}
											>
												<i
													className="fa fa-angle-right"
													aria-hidden="true"
												></i>
												Tiền điện tử
											</a>
										</li>
										<li>
											<a
												href={`${process.env.NEXT_PUBLIC_FE_URL}/co-phieu/hnx`}
											>
												<i
													className="fa fa-angle-right"
													aria-hidden="true"
												></i>
												Cổ phiếu
											</a>
										</li>
										<li>
											<a
												href={`${process.env.NEXT_PUBLIC_FE_URL}/gia-vang/sjc`}
											>
												<i
													className="fa fa-angle-right"
													aria-hidden="true"
												></i>
												Giá vàng
											</a>
										</li>

										<li>
											<a
												href={`${process.env.NEXT_PUBLIC_FE_URL}/lai-suat-ngan-hang`}
											>
												<i
													className="fa fa-angle-right"
													aria-hidden="true"
												></i>
												Lãi suất ngân hàng
											</a>
										</li>

										<li>
											<a
												href={`${process.env.NEXT_PUBLIC_FE_URL}/ty-gia-ngoai-te`}
											>
												<i
													className="fa fa-angle-right"
													aria-hidden="true"
												></i>
												Tỷ giá ngoại tệ
											</a>
										</li>
										<li>
											<a
												href={`${process.env.NEXT_PUBLIC_FE_URL}/gia-xang-dau`}
											>
												<i
													className="fa fa-angle-right"
													aria-hidden="true"
												></i>
												Xăng, dầu
											</a>
										</li>
										<li>
											<a
												href={`${process.env.NEXT_PUBLIC_FE_URL}/tin-tuc`}
											>
												<i
													className="fa fa-angle-right"
													aria-hidden="true"
												></i>
												Tin tức liên quan
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="">
								<div className="kilimanjaro_part">
									<h5>Tin tức nổi bật</h5>
									<ul className=" kilimanjaro_widget">
										<li>
											<a href="#">#crypto</a>
										</li>

										<li>
											<a href="#">#giavang</a>
										</li>
										<li>
											<a href="#">#cophieu</a>
										</li>
										<li>
											<a href="#">#laisuat</a>
										</li>
										<li>
											<a href="#">#usd</a>
										</li>
										<li>
											<a href="#">#tygiangoaite</a>
										</li>
										<li>
											<a href="#">#xangdau</a>
										</li>
									</ul>
								</div>
								<div className="kilimanjaro_part">
									<h5>Tải xuống</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Footer Bottom Area Start --> */}
				<div className=" kilimanjaro_bottom_header_one section_padding_50 text-center">
					<div className="w-full">
						<div className="row">
							<div className="flex items-center justify-center gap-8 flex-wrap text-white text-[14px]">
								<div className=" cursor-pointer hover:opacity-80">
									Giới thiệu
								</div>
								<div className=" cursor-pointer hover:opacity-80">
									Chính sách bảo mật
								</div>
								<div className=" cursor-pointer hover:opacity-80">
									Điều khoản
								</div>
								<div className=" cursor-pointer hover:opacity-80">
									Từ chối trách nhiệm
								</div>
								<div className=" cursor-pointer hover:opacity-80">
									Liên hệ
								</div>
							</div>
							<div className="col-12 mt-[8px]">
								<p>
									© All Rights Reserved by &nbsp;{' '}
									<a
										href={`${process.env.NEXT_PUBLIC_FE_URL}`}
									>
										Tygia24h
										<i className="fa fa-love"></i>
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
