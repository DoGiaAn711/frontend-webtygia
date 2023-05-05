import React from 'react';

function BaoTinMinhChauPriceTable({ data }) {
	return (
		<div className="w-full">
			<div className="flex justify-end w-full text-[12px] text-grey-text">
				Đơn vị: 1000.000 VND
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.8rem] font-medium text-blue-text bg-grey-4 rounded-[4px]">
				<div className=" col-span-1 p-[1rem]">Thương phẩm</div>
				<div className=" col-span-2 p-[1rem]">Loại vàng</div>
				<div className=" col-span-1 p-[1rem]">Mua vào</div>
				<div className=" col-span-1 p-[1rem]">Bán ra</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Vàng Rồng Thăng Long</div>
				<div className=" col-span-2 p-[1rem]">
					Vàng miếng 999.9 (24k)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangRongThangLong?.vangMiengVRTLBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangRongThangLong?.vangMiengVRTLSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Nhẫn tròn trơn 999.9 (24k)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangRongThangLong?.nhanTronTronBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangRongThangLong?.nhanTronTronSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Quà Mừng Vàng</div>
				<div className=" col-span-2 p-[1rem]">
					Quà mừng bản vị vàng 999.9 (24k)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.quaMungVang?.quaMungBanViVangBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.quaMungVang?.quaMungBanViVangBuy / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Vàng SJC</div>
				<div className=" col-span-2 p-[1rem]">
					Vàng miếng 999.9 (24k)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangSjc?.vangMiengSjcBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangSjc?.vangMiengSjcSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Vàng BTMC</div>
				<div className=" col-span-2 p-[1rem]">
					Trang sức bằng Vàng Rồng Thăng Long 999.9 (24k)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangBTMC?.trangSucBangVangRongThangLong9999Buy /
						1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangBTMC?.trangSucBangVangRongThangLong9999Sell /
						1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Trang sức bằng Vàng Rồng Thăng Long 99.9 (24k)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangBTMC?.trangSucBangVangRongThangLong999Buy /
						1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangBTMC?.trangSucBangVangRongThangLong999Sell /
						1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Vàng HTBT</div>
				<div className=" col-span-2 p-[1rem]">Vàng 999.9 (24k)</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangHTBT?.vangHTBTBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangHTBT?.vangHTBTSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Vàng Thị Trường</div>
				<div className=" col-span-2 p-[1rem]">Vàng nguyên liệu</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangThiTruong?.vangNguyenLieuBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangThiTruong?.vangNguyenLieuSell / 1000000}
				</div>
			</div>
		</div>
	);
}

export default BaoTinMinhChauPriceTable;
