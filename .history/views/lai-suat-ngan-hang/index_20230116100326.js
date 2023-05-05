import ManyBanksPriceTable from '@components/detail/interest/priceTable/ManyBanksPriceTable';
import MainLayout from '@components/layouts/mainLayout';
import InterestRateNavigation from '@components/navigation/InterestRateNavigation';
import Head from 'next/head';

function LaiSuatNganHangView() {
	return (
		<>
			<MainLayout>
				<div className="mt-[4.6rem] mb-[2.5rem]">
					<InterestRateNavigation />
					<div className=" h-auto  mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
						<ManyBanksPriceTable />
					</div>
				</div>
			</MainLayout>
		</>
	);
}

export default LaiSuatNganHangView;
