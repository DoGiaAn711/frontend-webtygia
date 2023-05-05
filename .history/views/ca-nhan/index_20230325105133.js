import MainLayout from '@components/layouts/mainLayout';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function PersonalView() {
	const router = useRouter();
	useEffect(() => {
		if (!JSON.parse(localStorage.getItem('email'))) {
			router.push('/authentication');
		}
	}, [typeof window]);
	return (
		<MainLayout>
			<div>PersonalView</div>
		</MainLayout>
	);
}

export default PersonalView;
