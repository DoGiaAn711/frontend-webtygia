import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchCoinDescription = async (nameId) => {
	return axios
		.get(`${process.env.NEXT_PUBLIC_BASE_URL}/coin/description/${nameId}`)
		.then((res) => res.data.data[0])
		.catch((err) => console.log(err));
};

function Description({ coin, descriptionData }) {
	console.log(descriptionData);
	return (
		<div className="mt-[3rem]">
			<h2 className="text-[2.4rem] font-semibold text-back-text">
				{coin?.symbol.toUpperCase()} Dữ liệu về giá theo thời gian thực
			</h2>
			<p className="text-[1.8rem] text-black-text mt-[1rem]">
				Giá{' ' + coin?.nameId.toUpperCase() + ' '}hôm nay là $
				{coin?.currentPrice + ' '}USD với khối lượng giao dịch trong 24
				giờ là ${coin?.volume24h.split('.')[0] + ' '}
				USD. Chúng tôi cập nhật
				{' ' + coin?.symbol.toUpperCase() + ' '} của chúng tôi sang giá
				USD theo thời gian thực.
				{' ' + coin?.nameId.toUpperCase() + ' '}
				{`${+coin?.priceChange24hPercent > 0 ? 'tăng ' : 'giảm '}`}
				{' ' +
					`${
						+coin?.priceChange24hPercent > 0
							? coin?.priceChange24hPercent
							: coin?.priceChange24hPercent.slice(0, 5)
					}`}
				% trong 24 giờ qua. Thứ hạng hiện tại trên là #{coin?.rank}, với
				vốn hóa thị trường là ${coin?.marketCap + ' '}USD. Lượng cung
				lưu hành là
				{' ' + coin?.circulatingSupply + ' '}
				{coin?.symbol.toUpperCase()} đồng coin và lượng cung tối đa là
				{' ' +
					coin?.totalSupply +
					' '} {coin?.symbol.toUpperCase()} đồng coin?.
			</p>
			{descriptionData?.description && (
				<h2 className="text-[2.4rem] font-semibold text-back-text mt-[2rem]">
					{coin?.symbol.toUpperCase() + ' '}là gì
				</h2>
			)}
			<div
				className="text-[1.8rem] text-black-text mt-[1rem]"
				dangerouslySetInnerHTML={{
					__html: descriptionData?.description,
				}}
			></div>
		</div>
	);
}

export default Description;
