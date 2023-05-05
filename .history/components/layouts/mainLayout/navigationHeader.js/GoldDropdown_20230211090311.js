import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
import { useOnHoverOutside } from '@utils/useOnHoverOutside';

function Menu() {
	return (
		<div className=" absolute top-[54px] left-0 bg-white shadow-shadow-custom w-[20rem] text-[1.4rem]">
			<div className=" relative">
				<div className=" cursor-pointer hover:bg-blue-200 px-[20px] py-[10px]">
					SJC
				</div>
				<div className=" cursor-pointer hover:bg-blue-200 px-[20px] py-[10px]">
					PNJ
				</div>
				<div className=" cursor-pointer hover:bg-blue-200 px-[20px] py-[10px]">
					DOJI
				</div>
				<div className=" cursor-pointer hover:bg-blue-200 px-[20px] py-[10px]">
					Phú Quý
				</div>
				<div className=" cursor-pointer hover:bg-blue-200 px-[20px] py-[10px]">
					Bảo Tín Minh Châu
				</div>
				<div className=" cursor-pointer hover:bg-blue-200 px-[20px] py-[10px]">
					Mi Hồng
				</div>
			</div>
			<div className=" absolute bg-yellow-200 w-[20rem] h-[22px] -top-[22px]  "></div>
		</div>
	);
}

function GoldDropdown() {
	const dropdownRef = useRef(null); // Create a reference for dropdown container
	const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

	const router = useRouter();

	// Function to close dropdown
	const closeHoverMenu = () => {
		setMenuDropDownOpen(false);
	};

	useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook
	return (
		<div ref={dropdownRef} className=" relative flex flex-col items-center">
			<Link
				onMouseOver={() => setMenuDropDownOpen(true)}
				href="/gia-vang/sjc"
				className="mr-[1rem]"
			>
				<div
					className={`flex items-center h-fit px-[1.5rem] py-[1rem]  text-center align-middle   cursor-pointer  ${
						router.pathname.includes('/gia-vang')
							? 'text-blue-2'
							: ''
					}`}
				>
					<div>
						<svg
							width="19"
							height="20"
							viewBox="0 0 19 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3.06895 15.9991C2.99863 15.688 3.12055 15.4404 3.24985 15.1905C3.57253 14.566 3.8918 13.9399 4.20427 13.3105C4.4226 12.8708 4.76853 12.6632 5.26871 12.6643C8.09115 12.6688 10.9136 12.6688 13.7354 12.6643C14.2373 12.6632 14.5793 12.8764 14.7971 13.3149C15.1254 13.9755 15.4725 14.6272 15.7923 15.2912C15.8915 15.4971 15.9295 15.7309 16.0101 15.9997C16.2069 15.9997 16.4723 16.0097 16.7365 15.9975C17.2821 15.973 17.6439 16.2101 17.8769 16.692C18.1945 17.3499 18.5382 17.9954 18.8682 18.6472C19.2278 19.3579 18.8217 19.9984 18.0125 19.9984C14.3768 19.9984 10.7412 20.0007 7.10497 19.9929C6.91556 19.9929 6.72671 19.9077 6.53617 19.8693C6.47549 19.8571 6.40801 19.8599 6.34676 19.8721C6.16302 19.91 5.98098 19.9912 5.79781 19.9923C4.19236 20.0018 2.58635 19.9984 0.980901 19.9979C0.174491 19.9979 -0.227579 19.3551 0.133093 18.6422C0.468814 17.9776 0.812474 17.317 1.14309 16.6503C1.36483 16.2028 1.71586 15.9824 2.22454 15.9975C2.49845 16.0058 2.77292 15.9991 3.06838 15.9991H3.06895ZM6.43409 15.9991C7.24674 15.9991 8.05996 16.0008 8.8726 15.998C9.1346 15.9975 9.21796 15.865 9.10228 15.6357C8.75748 14.9528 8.40588 14.2738 8.06449 13.5893C7.97149 13.4023 7.83765 13.3288 7.62896 13.3305C6.8373 13.3366 6.04563 13.3366 5.25397 13.3305C5.04414 13.3288 4.91258 13.4056 4.82014 13.5921C4.48612 14.2649 4.14189 14.9322 3.8022 15.6023C3.661 15.8817 3.73642 15.9986 4.05853 15.9986C4.85019 15.9997 5.64186 15.9986 6.43353 15.9986L6.43409 15.9991ZM3.38142 19.3317C4.18045 19.3317 4.97893 19.3323 5.77796 19.3317C6.09497 19.3317 6.16812 19.2115 6.02465 18.9293C5.68553 18.2592 5.34187 17.5914 5.00671 16.9196C4.91825 16.7427 4.79292 16.6625 4.59047 16.6642C3.79199 16.6698 2.99296 16.6703 2.19392 16.6642C1.98296 16.6625 1.85423 16.7432 1.76236 16.9286C1.43174 17.5947 1.08978 18.2565 0.752929 18.9199C0.602649 19.2165 0.673535 19.3323 1.00585 19.3323C1.79752 19.3328 2.58918 19.3323 3.38085 19.3323L3.38142 19.3317ZM9.49868 19.3317C10.2977 19.3317 11.0962 19.3323 11.8952 19.3317C12.202 19.3317 12.2808 19.2104 12.1459 18.9438C11.8068 18.2737 11.4614 17.607 11.1285 16.9341C11.0321 16.7399 10.8971 16.6614 10.6788 16.6631C9.89451 16.6703 9.10965 16.6703 8.32479 16.6631C8.10702 16.6609 7.97035 16.7365 7.87395 16.9313C7.54106 17.6042 7.1957 18.2715 6.85658 18.9416C6.72104 19.2098 6.79703 19.3306 7.10327 19.3312C7.9023 19.3323 8.70077 19.3312 9.49981 19.3312L9.49868 19.3317Z"
								fill="#5646FF"
							/>
							<path
								d="M7.45711 5.82015C7.39473 5.87858 7.33859 5.92978 7.28415 5.98266C5.54827 7.68624 3.81239 9.38982 2.07594 11.0934C1.74022 11.4229 1.63644 11.4212 1.29505 11.0856C1.02511 10.8201 0.753473 10.5569 0.485237 10.2898C0.276546 10.0816 0.27371 9.91965 0.481267 9.71595C2.40145 7.82983 4.31937 5.94147 6.24579 4.06147C6.95466 3.36968 7.97884 3.38081 8.69451 4.07371C9.35972 4.71707 10.0164 5.36823 10.6759 6.01772C10.7304 6.07115 10.7752 6.13404 10.8075 6.17188C12.2383 4.76883 13.6464 3.38805 15.059 2.00225C14.8815 2.00225 14.6808 1.9939 14.4806 2.00337C13.3708 2.05624 13.1819 1.83084 13.2352 0.769507C13.2375 0.727766 13.2341 0.686025 13.2364 0.644841C13.2557 0.289766 13.529 0.00759793 13.8914 0.0059283C15.1577 -0.000750232 16.424 -0.00353295 17.6903 0.00704139C18.224 0.0114937 18.6606 0.445598 18.6646 0.972089C18.6743 2.20817 18.6714 3.4437 18.6658 4.67979C18.6641 5.04488 18.3748 5.32093 18.0028 5.33317C17.7697 5.34096 17.5355 5.3404 17.3025 5.33317C16.9214 5.32204 16.639 5.04154 16.6327 4.66476C16.6265 4.28631 16.6316 3.9073 16.6316 3.48711C16.5442 3.56725 16.4881 3.61567 16.4354 3.66688C15.0142 5.06102 13.5937 6.45516 12.1731 7.84986C11.3525 8.65518 10.3657 8.65407 9.54062 7.84597C8.86464 7.18423 8.18923 6.52083 7.51325 5.8591C7.50361 5.84964 7.49057 5.84296 7.45654 5.82015H7.45711ZM1.73001 10.5268C1.81167 10.4339 1.88937 10.3343 1.9784 10.2463C3.69783 8.55667 5.41897 6.86756 7.1401 5.17901C7.38736 4.93635 7.53764 4.93691 7.78546 5.17956C8.53119 5.91031 9.27635 6.64216 10.0221 7.37346C10.5863 7.92667 11.1313 7.92722 11.6967 7.37235C13.3475 5.75225 14.9983 4.13215 16.6486 2.51149C16.7745 2.38794 16.9032 2.28386 17.0949 2.36178C17.2832 2.43803 17.3138 2.5933 17.3121 2.77251C17.3081 3.33462 17.3104 3.89729 17.3104 4.45939V4.65697H17.9898V4.46496C17.9898 3.34742 17.9898 2.22932 17.9898 1.11178C17.9898 0.775629 17.8781 0.668772 17.5287 0.668772C16.3968 0.668772 15.2649 0.668772 14.133 0.668772C14.0649 0.668772 13.9969 0.674894 13.9311 0.677677V1.33496C14.5764 1.33496 15.2053 1.33718 15.8348 1.33384C16.0146 1.33273 16.1768 1.35277 16.2601 1.53698C16.3486 1.734 16.2357 1.86423 16.1053 1.99279C14.4636 3.60232 12.8235 5.21296 11.1824 6.82304C10.9345 7.06625 10.7848 7.06569 10.537 6.82304C9.78617 6.08729 9.03647 5.34987 8.28564 4.61411C7.74179 4.08095 7.18547 4.08094 6.64163 4.61467C4.86548 6.35721 3.08991 8.10031 1.31433 9.8434C1.26556 9.89127 1.21963 9.94247 1.16859 9.99645C1.34836 10.1662 1.51962 10.3282 1.73058 10.528L1.73001 10.5268Z"
								fill="#5646FF"
							/>
							<path
								d="M9.83998 10.1855C9.83998 10.4421 9.84338 10.6992 9.83884 10.9557C9.83544 11.185 9.70104 11.3303 9.50199 11.3314C9.30294 11.3325 9.16343 11.1873 9.16173 10.9596C9.15833 10.432 9.15833 9.90443 9.16173 9.37683C9.16343 9.14753 9.2984 9.00283 9.49802 9.00172C9.69764 9.0006 9.83487 9.14475 9.83884 9.37293C9.84338 9.64341 9.83998 9.91445 9.83998 10.1849V10.1855Z"
								fill="#5646FF"
							/>
							<path
								d="M7.13961 12.0445C7.02222 11.9754 6.92751 11.9404 6.8606 11.8764C6.53622 11.5675 6.21694 11.253 5.89994 10.9358C5.73264 10.7683 5.72584 10.5813 5.86875 10.4388C6.01165 10.2963 6.2056 10.3002 6.37516 10.4628C6.70351 10.7778 7.02732 11.0978 7.35 11.4183C7.46455 11.5319 7.51729 11.676 7.42145 11.8135C7.35737 11.9059 7.24168 11.9632 7.13961 12.0439V12.0445Z"
								fill="#5646FF"
							/>
							<path
								d="M11.5058 12.0233C11.4235 11.9593 11.2942 11.9059 11.2568 11.8157C11.216 11.7178 11.2137 11.543 11.2767 11.4751C11.6237 11.1033 11.9901 10.7472 12.3638 10.401C12.4908 10.283 12.6587 10.3086 12.7863 10.4288C12.9207 10.5557 12.9513 10.726 12.8243 10.8579C12.4721 11.2252 12.1024 11.577 11.7337 11.9293C11.6878 11.9732 11.6078 11.9827 11.5052 12.0228L11.5058 12.0233Z"
								fill="#5646FF"
							/>
						</svg>
					</div>
					<div className=" mt-[2px]  text-[1.4rem] font-medium text-grey  mx-[9px]">
						vàng
					</div>
					<div>
						<svg
							width="8"
							height="4"
							viewBox="0 0 8 4"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0 0.52605C0.0795644 0.327095 0.271252 0.205886 0.445235 0.0763666C0.587271 -0.0294311 0.817825 -0.0186955 0.965965 0.0820807C1.00035 0.105457 1.0319 0.132122 1.06323 0.158788C2.01821 0.971231 2.97319 1.78367 3.92755 2.59664C3.94933 2.61516 3.96459 2.63923 3.98575 2.66417C4.02319 2.63386 4.04558 2.61638 4.06715 2.59802C5.02945 1.77935 5.99175 0.960496 6.95426 0.141992C7.126 -0.00397734 7.33763 -0.048305 7.50937 0.0606095C7.66749 0.160866 7.81034 0.28623 7.9306 0.41956C8.04354 0.544924 8.01037 0.713923 7.89071 0.837902C7.8726 0.856603 7.85327 0.874784 7.83313 0.891926C6.67039 1.88151 5.50785 2.87091 4.34491 3.86032C4.17072 4.00854 3.96764 4.04075 3.77982 3.94759C3.73342 3.92456 3.69171 3.89253 3.65345 3.85997C2.4899 2.87091 1.32655 1.8822 0.166454 0.890368C0.0960471 0.830283 0.0547387 0.74561 0 0.672366V0.526223V0.52605Z"
								fill="#434A54"
							/>
						</svg>
					</div>
				</div>
			</Link>
			{isMenuDropDownOpen && <Menu />}
		</div>
	);
}

export default GoldDropdown;
