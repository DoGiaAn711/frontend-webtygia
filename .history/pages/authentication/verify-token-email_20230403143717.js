import Loading from '@components/UI/Loading';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function VerifyTokenEmail() {
	const [message, setMessage] = useState('');
	const [isOpenRedirectLogin, setIsOpenRedirectLogin] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (!router.isReady) return;

		// codes using router.query
		const { userid, token } = router.query;
		const fetchVerifyEmailToken = async () => {
			setIsLoading(true);
			const res = await axios
				.get(
					`${process.env.NEXT_PUBLIC_PRODUCT_URL}/${userid}/verify/${token}`
				)
				.then((res) => res.data)
				.catch((err) => {
					setMessage(err.message);
				});
			if (res?.status === 'fail') {
				setIsLoading(false);
				setMessage(res?.message);
				return;
			}
			if (res?.status === 'ok') {
				setIsLoading(false);
				// router.push('/authentication');
				setMessage(res?.message);
				setIsOpenRedirectLogin(true);

				return;
			}
			setIsLoading(false);
		};
		fetchVerifyEmailToken();
	}, [router.isReady]);
	return (
		<div className="text-center mt-[40px]">
			{isLoading && <Loading />}
			<span className="text-[22px] font-medium">{message}</span>
			<div>Đăng nhập</div>
		</div>
	);
}

export default VerifyTokenEmail;
