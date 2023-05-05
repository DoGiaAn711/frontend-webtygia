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

function StockPageDetailView({ description }) {
	const router = useRouter();
	const symbol = router.asPath.split('/')[2];

	const { data, isLoading, isError, error, isFetching } =
		useStockPriceDetail(symbol);
	if (isLoading) {
		return <MainLayout />;
	}
	if (data) {
		return (
			<MainLayout>
				<div className='className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom"'>
					<div>
						<PriceDetail description={description} stock={data} />
						<ExchangeRate />
						{/* Chart */}
						<TablePrice stock={data} />
					</div>
				</div>
			</MainLayout>
		);
	}
}

export default StockPageDetailView;
