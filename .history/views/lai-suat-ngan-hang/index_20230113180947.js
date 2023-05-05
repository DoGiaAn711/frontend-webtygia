import MainLayout from '@components/layouts/mainLayout';
import Head from 'next/head';

function LaiSuatNganHangView() {
	return (
		<>
			<MainLayout>
				<div className="mt-[4.6rem] mb-[2.5rem]">
					<InterestRateNavigation />
				</div>
			</MainLayout>
		</>
	);
}

export default LaiSuatNganHangView;
