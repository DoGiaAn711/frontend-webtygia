import LinkIcon from '@mui/icons-material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';
import { useUpdateScoreCoin } from '@services/coin/useCoin';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { data } from 'autoprefixer';

function PriceDetail({ coin, descriptionData }) {
	const [email, setEmail] = useState();

	// const { data, isLoading, isError, error, isFetching } = useUpdateScoreCoin(
	// 	email,
	// 	coin?._id
	// );
	// console.log(data);

	const fetchCoins = async (email, coinsId) => {
		try {
			const { data } = await axios.post(
				`${process.env.PRODUCT}/update-score-coins`,
				{
					email,
					coinsId,
				}
			);
			return data;
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(async () => {
		setEmail(localStorage.getItem('email'));
		if (email) {
			// fetchCoins(email, coin?._id);
			console.log('1');
		}
		// setUser(data);
	}, [typeof window]);
	return (
		<div className="  pb-[4rem]">
			<div className="flex flex-col sm:flex-row justify-between">
				<div>
					<div className="flex h-[10rem] items-center">
						<img src={coin?.image} className="w-[6rem] h-[6rem]" />
						<div className="ml-[2.25rem]">
							<h1 className="text-[2.8rem] font-semibold capitalize text-back-text w-fit">
								{coin?.nameId}({coin?.symbol.toUpperCase()})
								<p className=" text-[1.4rem] text-grey-text">
									#Xếp hạng {coin?.rank}
								</p>
							</h1>
						</div>
					</div>
					<div className="flex justify-around flex-wrap max-w-[28.3rem] text-[1.4rem] font-medium">
						<div className="flex p-[0.5rem] m-[0.5rem] bg-back-ground-1 rounded-lg cursor-pointer hover:opacity-80 items-center">
							<LinkIcon sx={{ fontSize: '2rem' }} />
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={descriptionData?.homepage}
								className="px-[0.5rem]"
							>
								Trang chủ
							</a>
							<OpenInNewIcon sx={{ fontSize: '2rem' }} />
							{/* <OpenInNewIcon fontSize="medium" /> */}
						</div>
						<div className="flex p-[0.5rem] m-[0.5rem] bg-back-ground-1 rounded-lg cursor-pointer hover:opacity-80 items-center">
							<GitHubIcon sx={{ fontSize: '2rem' }} />
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={descriptionData?.github}
								className="px-[0.5rem]"
							>
								Mã nguồn
							</a>
							<OpenInNewIcon sx={{ fontSize: '2rem' }} />
						</div>
						<div className="flex p-[0.5rem] m-[0.5rem] bg-back-ground-1 rounded-lg cursor-pointer hover:opacity-80 items-center">
							<PersonIcon sx={{ fontSize: '2rem' }} />
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={descriptionData?.official_forum_url}
								className="px-[0.5rem]"
							>
								Cộng đồng
							</a>
							<OpenInNewIcon sx={{ fontSize: '2rem' }} />
						</div>
					</div>
				</div>
				<div className="">
					<p className="text-[1.6rem] text-grey-text font-semibold">
						Giá {coin?.symbol.toUpperCase()}
					</p>
					<div className="flex items-center">
						<div className="text-black-text-2 text-[4.8rem] font-semibold">
							${parseFloat(coin?.currentPrice).toLocaleString()}
						</div>
						<div
							className={`${
								+coin?.priceChange24hPercent > 0
									? 'bg-price-increase'
									: 'bg-price-decrease'
							} text-white-text ml-[2rem] h-[3rem] text-center leading-[3rem] w-[5rem] rounded-[0.6rem] text-[1.5rem] font-medium`}
						>
							{+coin?.priceChange24hPercent > 0 ? '+' : ''}
							{coin?.priceChange24hPercent.split('.')[0] +
								'.' +
								coin?.priceChange24hPercent
									.split('.')[1]
									.slice(0, 2)}
							%
						</div>
					</div>
					<div className="flex">
						<div className=" text-grey-text text-[1.5rem] font-medium">
							Cao:
							<span className=" text-black-text-2 ml-[1rem]">
								${parseFloat(coin?.high24h).toLocaleString()}
							</span>
						</div>
						<div className=" text-grey-text text-[1.5rem] font-medium ml-[1rem]">
							Thấp:
							<span className=" text-black-text-2 ml-[1rem]">
								${parseFloat(coin?.low24h).toLocaleString()}{' '}
								(24h)
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-[3.5rem] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[2rem] text-center">
				<div className="">
					<p className="text-[2rem] font-medium text-back-text">
						$
						{parseFloat(
							coin?.marketCap.split('.')[0]
						).toLocaleString()}
					</p>
					<p className=" text-grey-text-2 text-[1.4rem] font-medium mt-[1rem]">
						Vốn hoá
					</p>
				</div>
				<div className="">
					<p className="text-[2rem] font-medium text-back-text">
						$
						{parseFloat(
							coin?.fullyDilutedValuation.split('.')[0]
						).toLocaleString()}
					</p>
					<p className=" text-grey-text-2 text-[1.4rem] font-medium mt-[1rem]">
						Vốn hoá thị trường pha loãng hoàn toàn
					</p>
				</div>
				<div className="">
					<p className="text-[2rem] font-medium text-back-text">
						$
						{parseFloat(
							coin?.circulatingSupply.split('.')[0]
						).toLocaleString()}
					</p>
					<p className=" text-grey-text-2 text-[1.4rem] font-medium mt-[1rem]">
						Lượng cung lưu hành
					</p>
				</div>
				<div className="">
					<p className="text-[2rem] font-medium text-back-text">
						$
						{parseFloat(
							coin?.totalSupply.split('.')[0]
						).toLocaleString()}
					</p>
					<p className=" text-grey-text-2 text-[1.4rem] font-medium mt-[1rem]">
						Tổng cung tối đa
					</p>
				</div>
				<div className="">
					<p className="text-[2rem] font-medium text-back-text">
						$
						{parseFloat(
							coin?.volume24h.split('.')[0]
						).toLocaleString()}
					</p>
					<p className=" text-grey-text-2 text-[1.4rem] font-medium mt-[1rem]">
						Khối lượng giao dịch 24h
					</p>
				</div>
			</div>
		</div>
	);
}

export default PriceDetail;
