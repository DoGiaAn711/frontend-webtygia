import React from 'react';

function PriceTable({ data }) {
	return (
		<div className="w-full text-[1.7rem]">
			<div className="flex justify-end w-full text-[12px] text-grey-text">
				Đơn vị: VND
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.8rem] font-medium text-blue-text">
				<div className=" col-span-2 p-[1rem]">Sản phẩm</div>
				<div className=" col-span-1 p-[1rem]">Vùng 1</div>
				<div className=" col-span-1 p-[1rem]">Vùng 2</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Xăng RON 95-V</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.ron95v_1.replace('.', ',')}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.ron95v_1.replace('.', ',')}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Xăng RON 95-III</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.ron95III_1.replace('.', ',')}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.ron95III_2.replace('.', ',')}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Xăng E5 RON 92-II</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.ron92II_1.replace('.', ',')}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.ron92II_2.replace('.', ',')}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">DO 0,001S-V</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.do0001SV_1.replace('.', ',')}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.do0001SV_2.replace('.', ',')}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">DO 0,05S-II</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.do005SII_1.replace('.', ',')}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.do005SII_2.replace('.', ',')}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Dầu hỏa 2-K</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.dauhoa_1.replace('.', ',')}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.dauhoa_2.replace('.', ',')}
				</div>
			</div>
		</div>
	);
}

export default PriceTable;
