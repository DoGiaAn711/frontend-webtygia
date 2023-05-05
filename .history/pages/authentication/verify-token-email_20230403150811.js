import Loading from '@components/UI/Loading';
import axios from 'axios';
import Link from 'next/link';
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
			{!isOpenRedirectLogin && (
				<Link href={`${process.env.NEXT_PUBLIC_FE_URL}/authentication`}>
					<div className="  flex justify-center items-center w-[200px] bg-[#20e277] font-medium mx-auto mt-[20px] rounded-[50px] text text-[#fff] text-[14px] px-[24px] py-[10px] cursor-pointer hover:opacity-80">
						ĐĂNG NHẬP NGAY
					</div>
				</Link>
			)}
			{/* <a
				// href="${text}"
				style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;"
			>
				Xác nhận tài khoản
			</a> */}
		</div>
	);
}

export default VerifyTokenEmail;
