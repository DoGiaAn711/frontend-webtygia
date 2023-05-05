import LinkIcon from '@mui/icons-material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';
import MainLayout from '@components/layouts/mainLayout';
import ExchangeRate from '@components/detail/stock/exchangeRate';
// import ChartCoin from '@components/chart/coin/ChartCoin';
import PriceDetail from '@components/detail/stock/priceDetail';
import { useRouter } from 'next/router';
import { useStockPriceDetail } from '@services/stock/useStock';

function StockPageDetailView() {
	const router = useRouter();
	const symbol = router.asPath.split('/')[2];

	const { data, isLoading, isError, error, isFetching } =
		useStockPriceDetail(symbol);
	console.log(data);
	if (isLoading) {
		return <MainLayout />;
	}
	if (data) {
		return (
			<MainLayout>
				<div className='className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom"'>
					<div>
						<PriceDetail stock={data} />
						<ExchangeRate />
						{/* <ChartCoin
							coin={{ nameId: 'bitcoin', symbol: 'btc' }}
						/> */}
						{/* <ChartStock
							coin={{ nameId: 'bitcoin', symbol: 'btc' }}
						/> */}
						<div className="mt-[3.5rem] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[2rem] text-center">
							<div className=""></div>
							<div className=""></div>
							<div className=""></div>
							<div className=""></div>
							<div className=""></div>
						</div>
					</div>
				</div>
			</MainLayout>
		);
	}
}

export default StockPageDetailView;
