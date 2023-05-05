import { useUsd } from '@services/foreignCurrency/useUsd';
import React from 'react';

function PriceTable() {
	const { data, isLoading, isError, error, isFetching } = useUsd();

	return (
		<div className="overflow-x-auto w-full mt-[4rem]">
			<div className="flex justify-end w-[104rem] text-[12px] text-grey-text">
				Giá x 1000 VNĐ. Khối lượng x 10 cổ phiếu.
			</div>
			<table className="w-[104rem] border-separate border-spacing-y-[6px]">
				<thead className="text-[1.8rem] font-medium h-[5.6rem] text-blue-text ">
					<tr>
						<th className="w-[25rem] bg-back-ground-1 rounded-[6px]">
							Ngân hàng
						</th>
						<th className="w-[20px] bg-white h-auto "></th>
						<th className=" bg-back-ground-1 text-center rounded-l-[6px]">
							Mua tiền mặt
						</th>
						<th className=" bg-back-ground-1 text-center ">
							Mua chuyển khoản
						</th>
						<th className=" bg-back-ground-1 text-center ">
							Bán tiền mặt
						</th>
						<th className=" bg-back-ground-1 text-center rounded-r-[6px]">
							Bán chuyển khoản
						</th>
					</tr>
					<tr className="bg-white h-[6px]">
						<th></th>
						<th></th>
						<th></th>
						<th></th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody className=" h-[4.5rem] text-[1.6rem]">
					{data &&
						data.data.map((item, index) => (
							<tr key={index}>
								<td className=" bg-back-ground-1 text-center py-[1rem] font-medium rounded-[6px]">
									{item.name}
								</td>
								<td className="w-[20px] bg-white h-auto"></td>
								<td className=" bg-back-ground-1 text-center py-[1rem] font-medium rounded-l-[6px]">
									{item.buyCast}
								</td>
								<td className=" bg-back-ground-1 text-center py-[1rem] font-medium">
									{item.buyTransfer}
								</td>
								<td className=" bg-back-ground-1 text-center py-[1rem] font-medium">
									{item.sellCast}
								</td>
								<td className=" bg-back-ground-1 text-center py-[1rem] font-medium rounded-r-[6px]">
									{item.sellTransfer}
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}

export default PriceTable;
