import { useRouter } from 'next/router';
import React from 'react';

function VerifyTokenEmail() {
	const router = useRouter();
	console.log(router);
	return <div>VerifyTokenEmail</div>;
}

export default VerifyTokenEmail;
