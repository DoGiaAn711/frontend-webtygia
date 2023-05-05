import MainLayout from '@components/layouts/mainLayout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function GiaVangView() {
	const router = useRouter();

	useEffect(() => {
		router.push('/gia-vang/sjc');
	}, []);
	return (
		<>
			<MainLayout>
				<div>Gia vang</div>
			</MainLayout>
		</>
	);
}

export default GiaVangView;
