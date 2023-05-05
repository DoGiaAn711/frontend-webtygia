import Loading from '@components/UI/Loading';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function Success() {
	const router = useRouter();
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		window.close();
	// 	}, 1000);
	// }, []);
	useEffect(() => {
		if (!router.isReady) return;

		// codes using router.query
		const { email, name, avatar, token, role } = router.query;
		if (email && name && avatar && token) {
			localStorage.setItem('email', email);
			localStorage.setItem('name', name);
			localStorage.setItem('avatar', avatar);
			localStorage.setItem('accessToken', token);
			localStorage.setItem('role', role);
			router.push('/trang-chu');
		}
	}, [router.isReady]);
	return (
		<div className="mt-[40px]">
			<Loading />
		</div>
	);
}

export default Success;
