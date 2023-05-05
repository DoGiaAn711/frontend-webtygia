import Loading from '@components/UI/Loading';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function VerifyTokenEmail() {
	const [message, setMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (!router.isReady) return;

		// codes using router.query
		const { userid, token } = router.query;
		const fetchVerifyEmailToken = async () => {
			// const res = await axios
			// 	.get(`http://localhost:5000/api/v1/${userid}/verify/${token}`)
			// 	.then((res) => res.data)
			// 	.catch((err) => console.log(err));
			// if (res?.status === 'fail') {
			// 	setMessage(res?.message);
			// 	return;
			// }
			// if (res?.status === 'ok') {
			// 	router.push('/authentication');
			// }
		};
		fetchVerifyEmailToken();
	}, [router.isReady]);
	return (
		<div className="text-center">
			<Loading />
			<span className="text-[22px] font-medium">jknggjdkfn</span>
		</div>
	);
}

export default VerifyTokenEmail;
