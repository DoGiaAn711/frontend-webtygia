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
const ChartStock = dynamic(
	() => import('../../../components/chart/stock/ChartStock'),
	{
		ssr: false,
	}
);

function StockPageDetailView({ description }) {
	const [exchangeName, setExchangeName] = useState('');
	const router = useRouter();
	const symbol = router.asPath.split('/')[2];

	useEffect(() => {
		const name = localStorage.getItem('exchangeName');
		setExchangeName(name);

		// console.log(exchangeName);
	}, [localStorage.getItem('nameExchange')]);
	// console.log(exchangeName);

	const { data, isLoading, isError, error, isFetching } = useStockPriceDetail(
		symbol,
		exchangeName
	);
	if (isLoading) {
		return <MainLayout />;
	}
	if (isFetching) {
		return <MainLayout />;
	}
	// if (data) {
	return (
		<MainLayout>
			<div className='className=" h-auto sm:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom"'>
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
	// }
}

export default StockPageDetailView;
