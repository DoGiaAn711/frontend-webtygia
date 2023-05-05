import React from 'react';

function TablePrice({ stock }) {
	return (
		<div className="mx-[2rem] mt-[4rem]">
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
				<div>
					<div className="mb-[2rem]">
						<div className="text-[13px] text-[#8D8D8D]">Mở cửa</div>
						<div className="text-[20px] font-medium">
							{stock?.openPrice}
						</div>
					</div>
					<div className="mb-[2rem]">
						<div className="text-[13px] text-[#8D8D8D]">
							Thấp nhất
						</div>
						<div className="text-[20px] font-medium">
							{stock?.low}
						</div>
					</div>
					<div className="mb-[2rem]">
						<div className="text-[13px] text-[#8D8D8D]">
							Cao nhất
						</div>
						<div className="text-[20px] font-medium">
							{stock?.high}
						</div>
					</div>
					<div className="mb-[2rem]">
						<div className="text-[13px] text-[#8D8D8D]">
							Tham chiếu
						</div>
						<div className="text-[20px] font-medium">
							{stock?.reference}
						</div>
					</div>
				</div>
				<div>
					<div className="mb-[2rem]">
						<div className="text-[13px] text-[#8D8D8D]">
							Vốn hoá
						</div>
						<div className="text-[20px] font-medium">
							{parseFloat(stock?.marketcap).toFixed(2)}
						</div>
					</div>
					<div className="mb-[2rem]">
						<div className="text-[13px] text-[#8D8D8D]">
							Cao 52 tuần
						</div>
						<div className="text-[20px] font-medium">
							{stock?.high52Week}
						</div>
					</div>
					<div className="mb-[2rem]">
						<div className="text-[13px] text-[#8D8D8D]">
							Thấp 52 tuần
						</div>
						<div className="text-[20px] font-medium">
							{stock?.low52Week}
						</div>
					</div>
					<div className="mb-[2rem]">
						<div className="text-[13px] text-[#8D8D8D]">
							Giá thay đổi 1 tuần
						</div>
						<div
							className={` ${
								+stock?.percentPriceChange1Week.slice(0, -1) > 0
									? 'text-price-increase'
									: 'text-price-decrease'
							}  whitespace-nowrap text-[20px] font-medium`}
						>
							{stock?.priceChange1Week}(
							{stock?.percentPriceChange1Week.slice(0, 5) > 0
								? '+'
								: ''}
							{stock?.percentPriceChange1Week.slice(0, 5)}% )
						</div>
					</div>
				</div>
				<div>
					<div className="mb-[2rem]">
						<div className="text-[13px] text-[#8D8D8D]">
							Giá thay đổi 1 tháng
						</div>
						<div
							className={` ${
								+stock?.percentPriceChange1Month.slice(0, -1) >
								0
									? 'text-price-increase'
									: 'text-price-decrease'
							}  whitespace-nowrap text-[20px] font-medium`}
						>
							{stock?.priceChange1Month}(
							{stock?.percentPriceChange1Month.slice(0, 5) > 0
								? '+'
								: ''}
							{stock?.percentPriceChange1Month.slice(0, 5)}% )
						</div>
					</div>
					<div className="mb-[2rem]">
						<div className="text-[13px] text-[#8D8D8D]">
							Giá thay đổi 3 tháng
						</div>
						<div
							className={` ${
								+stock?.percentPriceChange3Month.slice(0, -1) >
								0
									? 'text-price-increase'
									: 'text-price-decrease'
							}  whitespace-nowrap text-[20px] font-medium`}
						>
							{stock?.priceChange3Month}(
							{stock?.percentPriceChange3Month.slice(0, 5) > 0
								? '+'
								: ''}
							{stock?.percentPriceChange3Month.slice(0, 5)}% )
						</div>
					</div>
					<div className="mb-[2rem]">
						<div className="text-[13px] text-[#8D8D8D]">
							Giá thay đổi 6 tháng
						</div>
						<div
							className={` ${
								+stock?.percentPriceChange6Month.slice(0, -1) >
								0
									? 'text-price-increase'
									: 'text-price-decrease'
							}  whitespace-nowrap text-[20px] font-medium`}
						>
							{stock?.priceChange6Month}(
							{stock?.percentPriceChange6Month.slice(0, 5) > 0
								? '+'
								: ''}
							{stock?.percentPriceChange6Month.slice(0, 5)}% )
						</div>
					</div>
					<div className="mb-[2rem]">
						<div className="text-[13px] text-[#8D8D8D]">
							Giá thay đổi 1 năm
						</div>
						<div
							className={` ${
								+stock?.percentPriceChange1Year.slice(0, -1) > 0
									? 'text-price-increase'
									: 'text-price-decrease'
							}  whitespace-nowrap text-[20px] font-medium`}
						>
							{stock?.priceChange1Year}(
							{stock?.percentPriceChange1Year.slice(0, 5) > 0
								? '+'
								: ''}
							{stock?.percentPriceChange1Year.slice(0, 5)}% )
						</div>
					</div>
				</div>
				<div>
					<div className="mb-[2rem]">
						<div className="text-[13px] text-[#8D8D8D]">
							Khối lượng giao dịch
						</div>
						<div className="text-[20px] font-medium">
							{stock?.turnOver}
						</div>
					</div>
					<div className="mb-[2rem]">
						<div className="text-[13px] text-[#8D8D8D]">
							Khối lượng trung bình 10 ngày
						</div>
						<div className="text-[20px] font-medium">
							{stock?.averageVolume10Day}
						</div>
					</div>
					<div className="mb-[2rem]">
						<div className="text-[13px] text-[#8D8D8D]">EPS</div>
						<div className="text-[20px] font-medium">
							{parseFloat(stock?.eps).toFixed(4)}
						</div>
					</div>
					<div className="mb-[2rem]">
						<div className="text-[13px] text-[#8D8D8D]">PE</div>
						<div className="text-[20px] font-medium">
							{parseFloat(stock?.pe).toFixed(4)}
						</div>
					</div>
				</div>
				<div>
					<div className="mb-[2rem]">
						<div className="text-[13px] text-[#8D8D8D]">PB</div>
						<div className="text-[20px] font-medium">
							{parseFloat(stock?.pb).toFixed(4)}
						</div>
					</div>
					<div className="mb-[2rem]">
						<div className="text-[13px] text-[#8D8D8D]">ROE</div>
						<div className="text-[20px] font-medium">
							{parseFloat(stock?.roe).toFixed(4)}
						</div>
					</div>
					<div className="mb-[2rem]">
						<div className="text-[13px] text-[#8D8D8D]">
							Cổ phiếu đang lưu hành
						</div>
						<div className="text-[20px] font-medium">
							{stock?.outstandingShare}
						</div>
					</div>
					<div className="mb-[2rem]">
						<div className="text-[13px] text-[#8D8D8D]">
							Tỷ lệ free-float
						</div>
						<div className="text-[20px] font-medium">
							{stock?.freeFloat}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TablePrice;
