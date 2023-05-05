import React from 'react';

function DojiPriceTable({ data }) {
	return (
		<div className=" overflow-x-auto">
			<div className="w-full min-w-[60rem]">
				<div className="flex justify-end w-full text-[12px] text-grey-text">
					Đơn vị: 1000.000 VND
				</div>
				<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.8rem] font-medium text-blue-text ">
					<div className=" col-span-2 p-[1rem]">Loại vàng</div>
					<div className=" col-span-2 p-[1rem]">Hà Nội</div>
					<div className=" col-span-2 p-[1rem]">Đà Nẵng</div>
					<div className=" col-span-2 p-[1rem]">Hồ Chí Minh</div>
				</div>
				<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.7rem] font-medium ">
					<div className=" col-span-2 p-[1rem]"></div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2 border-t border-opacity-30 border-grey-text">
						<div className=" col-span-1">Mua vào</div>
						<div className=" col-span-1">Bán ra</div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2 border-t border-opacity-30 border-grey-text">
						<div className=" col-span-1">Mua vào</div>
						<div className=" col-span-1">Bán ra</div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2 border-t border-opacity-30 border-grey-text">
						<div className=" col-span-1">Mua vào</div>
						<div className=" col-span-1">Bán ra</div>
					</div>
				</div>
				<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
					<div className=" col-span-2 p-[1rem]">SJC</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.sjcHNBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.sjcHNSell / 1000000}
						</div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.sjcDNBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.sjcDNSell / 1000000}
						</div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.sjcHCMBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.sjcHCMSell / 1000000}
						</div>
					</div>
				</div>
				<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
					<div className=" col-span-2 p-[1rem]">AVPL</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.AVPLHNBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.AVPLHNSell / 1000000}
						</div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.AVPLDNBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.AVPLDNSell / 1000000}
						</div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.AVPLHCMBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.AVPLHCMSell / 1000000}
						</div>
					</div>
				</div>
				<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
					<div className=" col-span-2 p-[1rem]">KTT + Kim Giáp</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.KTTKimGiapHNBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.KTTKimGiapHNSell / 1000000}
						</div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.KNTKTTKimGiapDNBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.KNTKTTKimGiapDNSell / 1000000}
						</div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.KNTKTTKimGiapHCMBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.KNTKTTKimGiapHCMSell / 1000000}
						</div>
					</div>
				</div>
				<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
					<div className=" col-span-2 p-[1rem]">Nhẫn H.T.V</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.nhanHTVHNBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.nhanHTVHNSell / 1000000}
						</div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.nhanHTVDNBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.nhanHTVDNSell / 1000000}
						</div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.nhanHTVHCMBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.nhanHTVHCMSell / 1000000}
						</div>
					</div>
				</div>
				<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
					<div className=" col-span-2 p-[1rem]">Nữ trang 9999</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.nuTrang9999HNBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.nuTrang9999HNSell / 1000000}
						</div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.nuTrang9999DNBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.nuTrang9999DNSell / 1000000}
						</div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.nuTrang9999HCMBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.nuTrang9999HCMSell / 1000000}
						</div>
					</div>
				</div>
				<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
					<div className=" col-span-2 p-[1rem]">Nữ trang 999</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.nuTrang999HNBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.nuTrang999HNSell / 1000000}
						</div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1"></div>
						<div className=" col-span-1"></div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.nuTrang999HCMBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.nuTrang999HCMSell / 1000000}
						</div>
					</div>
				</div>
				<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
					<div className=" col-span-2 p-[1rem]">Nữ trang 99</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.nuTrang99HNBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.nuTrang99HNSell / 1000000}
						</div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1"></div>
						<div className=" col-span-1"></div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.nuTrang99HCMBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.nuTrang99HCMSell / 1000000}
						</div>
					</div>
				</div>
				<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
					<div className=" col-span-2 p-[1rem]">Nữ trang 75</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1"></div>
						<div className=" col-span-1"></div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.nuTrang75DNBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.nuTrang75DNSell / 1000000}
						</div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.nuTrang75HCMBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.nuTrang75HCMSell / 1000000}
						</div>
					</div>
				</div>
				<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
					<div className=" col-span-2 p-[1rem]">Nữ trang 68</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1"></div>
						<div className=" col-span-1"></div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.nuTrang68DNBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.nuTrang68DNSell / 1000000}
						</div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1"></div>
						<div className=" col-span-1"></div>
					</div>
				</div>
				<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
					<div className=" col-span-2 p-[1rem]">Nữ trang 58.3</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1"></div>
						<div className=" col-span-1"></div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.nuTrang58_3DNBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.nuTrang58_3DNSell / 1000000}
						</div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1"></div>
						<div className=" col-span-1"></div>
					</div>
				</div>
				<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
					<div className=" col-span-2 p-[1rem]">Nữ trang 18k</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.nuTrang18kHNBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.nuTrang18kHNSell / 1000000}
						</div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1"></div>
						<div className=" col-span-1"></div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1"></div>
						<div className=" col-span-1"></div>
					</div>
				</div>
				<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
					<div className=" col-span-2 p-[1rem]">Nữ trang 14k</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.nuTrang14kHNBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.nuTrang14kHNSell / 1000000}
						</div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1"></div>
						<div className=" col-span-1"></div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1"></div>
						<div className=" col-span-1"></div>
					</div>
				</div>
				<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.7rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
					<div className=" col-span-2 p-[1rem]">Nữ trang 10k</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1">
							{data?.nuTrang10kHNBuy / 1000000}
						</div>
						<div className=" col-span-1">
							{data?.nuTrang10kHNSell / 1000000}
						</div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1"></div>
						<div className=" col-span-1"></div>
					</div>
					<div className=" col-span-2 p-[1rem] grid grid-cols-2">
						<div className=" col-span-1"></div>
						<div className=" col-span-1"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DojiPriceTable;
