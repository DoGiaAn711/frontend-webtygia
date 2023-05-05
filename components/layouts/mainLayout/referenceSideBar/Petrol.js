import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPetrol = async () => {
	return axios
		.get(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/petrol/petrolimex`)
		.then((res) => res.data.data)
		.catch((err) => console.log(err));
};

function Petrol() {
	const { data, isLoading, isError, error, isFetching } = useQuery(
		'/petrol/petrolimex',
		fetchPetrol,
		{
			cacheTime: 3600000,
			// refetchOnWindowFocus: false,
			staleTime: 1800000,
			refetchInterval: 1800000,
		}
	);

	if (isLoading) {
		return <h2>Đang tải...</h2>;
	}
	if (isError) {
		return <h2>{error.message}</h2>;
	}
	return (
		<div className=" shadow-shadow-custom rounded-[1rem] bg-grey-text bg-opacity-5 mt-[2.4rem] ">
			<div className="pt-[1.5rem] pl-[1.7rem] text-[1.6rem]">
				<p className="text-blue-text text-[1.8rem] font-semibold cursor-pointer">
					Giá bán lẻ xăng dầu (VND)
				</p>
				<div className="py-[1.5rem]">
					<ul className="grid grid-cols-4 text-grey-text text-[1.4rem] font-semibold">
						<li className=" col-span-2">Sản phẩm</li>
						<li className="ml-[-3rem]">Vùng 1</li>
						<li className="ml-[-1rem]">Vùng 2</li>
					</ul>
					{data &&
						data.slice(0, 1).map((petrol) => (
							<div key={petrol.name}>
								<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
									<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer hover:opacity-80">
										RON95 III
									</li>
									<li className="text-[1.4rem] font-medium ml-[-3rem]">
										{petrol.ron95III_1?.replace('.', ',')}
									</li>
									<li className="text-[1.4rem] font-medium  ml-[-1rem]">
										{petrol.ron95III_2?.replace('.', ',')}
									</li>
								</ul>
								<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
									<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer hover:opacity-80">
										RON95 V
									</li>
									<li className="text-[1.4rem] font-medium ml-[-3rem]">
										{petrol.ron95v_1?.replace('.', ',')}
									</li>
									<li className="text-[1.4rem] font-medium  ml-[-1rem]">
										{petrol.ron95v_2?.replace('.', ',')}
									</li>
								</ul>
								<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
									<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer hover:opacity-80">
										RON92 II
									</li>
									<li className="text-[1.4rem] font-medium ml-[-3rem]">
										{petrol.ron92II_1?.replace('.', ',')}
									</li>
									<li className="text-[1.4rem] font-medium  ml-[-1rem]">
										{petrol.ron92II_2?.replace('.', ',')}
									</li>
								</ul>
								<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
									<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer hover:opacity-80">
										DO 0,05S-II
									</li>
									<li className="text-[1.4rem] font-medium ml-[-3rem]">
										{petrol.do005SII_1?.replace('.', ',')}
									</li>
									<li className="text-[1.4rem] font-medium  ml-[-1rem]">
										{petrol.do005SII_2?.replace('.', ',')}
									</li>
								</ul>
								<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
									<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer hover:opacity-80">
										DO 0,001S-V
									</li>
									<li className="text-[1.4rem] font-medium ml-[-3rem]">
										{petrol.do0001SV_1?.replace('.', ',')}
									</li>
									<li className="text-[1.4rem] font-medium  ml-[-1rem]">
										{petrol.do0001SV_2?.replace('.', ',')}
									</li>
								</ul>
								<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
									<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer hover:opacity-80">
										Dầu hoả
									</li>
									<li className="text-[1.4rem] font-medium ml-[-3rem]">
										{petrol.dauhoa_1?.replace('.', ',')}
									</li>
									<li className="text-[1.4rem] font-medium  ml-[-1rem]">
										{petrol.dauhoa_2?.replace('.', ',')}
									</li>
								</ul>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}

export default Petrol;
