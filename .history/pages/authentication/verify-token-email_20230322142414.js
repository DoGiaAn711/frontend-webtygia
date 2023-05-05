import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function VerifyTokenEmail() {
	const [message, setMessage] = useState('');
	const router = useRouter();

	useEffect(() => {
		if (!router.isReady) return;

		// codes using router.query
		const { userid, token } = router.query;
		const fetchVerifyEmailToken = async () => {
			const res = await axios
				.get(`http://localhost:5000/api/v1/${userid}/verfy/${token}`)
				.then((res) => res.data)
				.catch((err) => console.log(err));
			if (res.status === 'fail') {
				setMessage(res.message);
				return;
			}
			router.push('/authentication');
		};
		fetchVerifyEmailToken();
	}, [router.isReady]);
	return <div>{message}</div>;
}

export default VerifyTokenEmail;
