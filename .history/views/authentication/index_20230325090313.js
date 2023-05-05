import LoginForm from '@components/auth/LoginForm';
import SignupForm from '@components/auth/SignupForm';
import SlideImage from '@components/auth/SlideImage';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function AuthenticationView() {
	const [isSignup, setIsSignup] = useState(false);
	const router = useRouter();

	const changeIsSignup = () => {
		setIsSignup((prev) => !prev);
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const isLogin = localStorage.getItem('email');
			console.log(isLogin);
			if (isLogin) {
				router.push('/trang-chu');
				return;
			}
		}
	}, [typeof window]);
	return (
		<div className="lg:flex max-w-[1440px] mx-auto h-full">
			<div className="hidden lg:block h-full max-w-[100rem] relative">
				{/* <img
					className="h-full min-h-screen object-cover"
					src="https://thumbs.dreamstime.com/b/binance-logo-bitcoin-black-background-binance-one-largest-cryptocurrency-exchange-market-moscow-russia-260414550.jpg"
				/> */}
				<SlideImage />
			</div>
			<div className="  px-[1rem] w-full lg:w-[440px] mx-auto lg:mx-0">
				<div className="flex mt-[3rem] items-center ">
					<div
						onClick={changeIsSignup}
						className={
							isSignup
								? 'text-[18px] ml-[3rem] font-semibold opacity-60 cursor-pointer'
								: 'text-[32px] font-semibold ml-[3rem] cursor-pointer'
						}
					>
						Đăng nhập
					</div>
					<div
						onClick={changeIsSignup}
						className={
							!isSignup
								? 'text-[18px] ml-[3rem] font-semibold opacity-60 cursor-pointer'
								: 'text-[32px] font-semibold ml-[3rem] cursor-pointer'
						}
					>
						Đăng ký
					</div>
				</div>
				{isSignup ? <SignupForm /> : <LoginForm />}
			</div>
		</div>
	);
}

export default AuthenticationView;
