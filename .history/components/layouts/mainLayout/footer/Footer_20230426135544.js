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
										Web Giá cập nhật nhanh nhất giá vàng, tỷ
										giá ngân hàng, tỷ giá ngoại tệ, lãi suất
										ngân hàng, tỷ giá tiền điện tử, giá xăng
										dầu trong nước và quốc tế.
									</p>
									<p className="text-[13px]">
										Đội ngũ chúng tôi cập nhật liên tục,
										không ngừng nghỉ. Đem đến cho bạn những
										thông tin nhanh chóng, tức thời.
									</p>
								</div>
							</div>
							<div className="">
								<div className="kilimanjaro_part">
									<h5>Thông tin</h5>
									<ul className="kilimanjaro_links">
										<li>
											<a href="#">
												<i
													className="fa fa-angle-right"
													aria-hidden="true"
												></i>
												Tiền điện tử
											</a>
										</li>
										<li>
											<a href="#">
												<i
													className="fa fa-angle-right"
													aria-hidden="true"
												></i>
												Cổ phiếu
											</a>
										</li>
										<li>
											<a href="#">
												<i
													className="fa fa-angle-right"
													aria-hidden="true"
												></i>
												Giá vàng
											</a>
										</li>

										<li>
											<a href="#">
												<i
													className="fa fa-angle-right"
													aria-hidden="true"
												></i>
												Lãi suất ngân hàng
											</a>
										</li>

										<li>
											<a href="#">
												<i
													className="fa fa-angle-right"
													aria-hidden="true"
												></i>
												Tỷ giá ngoại tệ
											</a>
										</li>
										<li>
											<a href="#">
												<i
													className="fa fa-angle-right"
													aria-hidden="true"
												></i>
												Xăng, dầu
											</a>
										</li>
										<li>
											<a href="#">
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
									<h5>Tags</h5>
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
