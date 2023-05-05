import LinkIcon from '@mui/icons-material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';
import MainLayout from '@components/layouts/mainLayout';
import ExchangeRate from '@components/detail/stock/exchangeRate';
import TablePrice from '@components/detail/stock/tablePrice';
// import ChartCoin from '@components/chart/coin/ChartCoin';
import PriceDetail from '@components/detail/stock/priceDetail';
import { useRouter } from 'next/router';
import { useStockPriceDetail } from '@services/stock/useStock';
import StockDescription from '@components/detail/stock/description';
// import ChartStock from '@components/chart/stock/ChartStock';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { fetchUpdateScoreAndView } from '@services/updateScoreAndView/fetchUpdateScoreAndView';
import Loading from '@components/UI/Loading';
const ChartStock = dynamic(
	() => import('../../../components/chart/stock/ChartStock'),
	{
		ssr: false,
	}
);

function StockPageDetailView({ description }) {
	// const [exchangeName, setExchangeName] = useState('');
	// const [email, setEmail] = useState();
	const router = useRouter();
	const symbol = router.asPath.split('/')[2];

	const { data, isLoading, isError, error, isFetching } =
		useStockPriceDetail(symbol);

	useEffect(() => {
		if (data) {
			fetchUpdateScoreAndView(data?._id, 'stock', 'StockDetail');

			// if (typeof window && !localStorage.getItem('email')) {
			// 	//update localstorage ko can dang nhap
			// 	let rank1Stock = JSON.parse(
			// 		localStorage.getItem('userInterest')
			// 	);
			// 	if (rank1Stock) {
			// 		const isExisted = rank1Stock.filter(
			// 			(item) => item.detail === data._id
			// 		);
			// 		if (isExisted.length > 0) {
			// 			const updatingScore = rank1Stock.map((item) => {
			// 				if (item.detail === data._id) {
			// 					item.score++;
			// 				}
			// 				return item;
			// 			});
			// 			localStorage.setItem(
			// 				'userInterest',
			// 				JSON.stringify(updatingScore)
			// 			);
			// 		} else {
			// 			const dataMax = rank1Stock.slice(0, 20);
			// 			dataMax.push({
			// 				category: ['stock'],
			// 				detailModel: 'StockDetail',
			// 				score: 1,
			// 				detail: data._id,
			// 				follow: 0,
			// 			});
			// 			localStorage.setItem(
			// 				'userInterest',
			// 				JSON.stringify(dataMax)
			// 			);
			// 		}
			// 	} else {
			// 		const arr = [];
			// 		arr.push({
			// 			category: ['stock'],
			// 			detailModel: 'StockDetail',
			// 			score: 1,
			// 			detail: data._id,
			// 			follow: 0,
			// 		});
			// 		localStorage.setItem('userInterest', JSON.stringify(arr));
			// 	}
			// }
		}
	}, [data]);

	if (isLoading) {
		return (
			<MainLayout>
				<Loading />
			</MainLayout>
		);
	}

	if (data) {
		return (
			<MainLayout>
				<div className=" h-auto lg:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom ">
					<div>
						<PriceDetail description={description} stock={data} />
						<ExchangeRate />
						<ChartStock stock={data} />
						<TablePrice stock={data} />
						<StockDescription description={description} />
					</div>
				</div>
			</MainLayout>
		);
	}
}

export default StockPageDetailView;
