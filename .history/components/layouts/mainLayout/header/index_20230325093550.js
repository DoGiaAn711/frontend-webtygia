import React, { useEffect, useRef, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavigationHeaderMenu from './NavigationHeaderMenu';
import axios from 'axios';
import Loading from '@components/UI/Loading';

function Header() {
	const [searchTerm, setSearchTerm] = useState('');
	const [listSearch, setListSearch] = useState();
	const [noResult, setNoResult] = useState(false);
	const [searchLoading, setSearchLoading] = useState(false);
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [avatar, setAvatar] = useState('');

	const [isOpenModal, setIsOpenModal] = useState(false);
	const [isOpenSearching, setIsOpenSearching] = useState(false);
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const inputEl = useRef(null);
	useEffect(() => {
		inputEl.current.focus();
	}, [isOpenSearching]);

	const router = useRouter();

	useEffect(() => {
		setEmail(localStorage.getItem('email'));
		setName(localStorage.getItem('name'));
		setAvatar(localStorage.getItem('avatar'));
	}, [typeof window]);

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			const fetchSearching = async () => {
				try {
					setSearchLoading(true);
					const data = await axios
						.post(`${process.env.PRODUCT}/search`, {
							payload: searchTerm,
						})
						.then((res) => res.data);

					setSearchLoading(false);
					if (data.data.length > 0) {
						setListSearch(data.data);
						setNoResult(false);
					} else {
						setListSearch(null);
						setNoResult(true);
					}
				} catch (error) {
					setSearchLoading(false);
					console.log(error);
				}
			};
			if (searchTerm) {
				fetchSearching();
			} else {
				setListSearch(null);
				setNoResult(false);
				setSearchLoading(false);
			}
		}, 1000);
		return () => clearTimeout(delayDebounceFn);
	}, [searchTerm]);
	//===modal===
	const modalRef = useRef();
	const arrowModalRef = useRef();
	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			// If the menu is open and the clicked target is not within the menu,
			// then close the menu
			if (
				isOpenModal &&
				modalRef.current &&
				!modalRef.current.contains(e.target) &&
				!arrowModalRef.current.contains(e.target)
			) {
				setIsOpenModal(false);
			}
		};

		document.addEventListener('mousedown', checkIfClickedOutside);

		return () => {
			// Cleanup the event listener
			document.removeEventListener('mousedown', checkIfClickedOutside);
		};
	}, [isOpenModal]);
	//=======
	const logout = () => {
		router.push('/authentication');
		localStorage.clear();
	};

	const toggleOpenSearching = () => {
		setIsOpenSearching(true);
		setSearchTerm(null);
		setListSearch(null);
		inputEl.current.value = '';
		setSearchLoading(false);
	};

	const toggleOpenModal = () => {
		setIsOpenModal((prev) => !prev);
	};
	const closeModal = () => {
		setIsOpenModal(false);
	};

	const toggleOpenMenu = () => {
		setIsOpenMenu((prev) => !prev);
	};
	const closeInput = async () => {
		setTimeout(() => {
			setIsOpenSearching((prev) => !prev);
			setSearchTerm(null);
			setListSearch(null);
			inputEl.current.value = '';
			setSearchLoading(false);
		}, 100);
	};
	return (
		<header
			id="header"
			className=" flex flex-col items-center w-full mx-auto top-0  z-50 h-[70px] bg-blue-2"
		>
			<div className="  w-full max-w-[144rem] my-auto flex justify-between h-[6rem] items-center px-[28px] lg:px-0">
				<div className="text-[2.4rem] font-black italic text-white">
					Tygia24h
				</div>
				<div className="flex h-[4rem]">
					{!isOpenSearching && (
						<div
							onClick={toggleOpenSearching}
							className="flex items-center justify-center w-[4rem] rounded-[1000px] bg-white hover:opacity-80 cursor-pointer"
						>
							<SearchIcon
								sx={{ fontSize: '2.2rem', color: '#868697' }}
							/>
						</div>
					)}

					<div
						className={` relative ${
							isOpenSearching ? 'flex ' : 'hidden'
						} items-center transition-all ease-in-out duration-[1500ms]`}
					>
						<input
							className=" w-[20rem] sm:w-[30rem] h-full text-[1.4rem] text-black bg-white rounded-[25px] pl-[10px] pr-[40px] outline-none"
							placeholder="Tìm kiếm"
							type="text"
							onChange={(e) => setSearchTerm(e.target.value)}
							onBlur={closeInput}
							ref={inputEl}
						/>
						<div
							onClick={toggleOpenSearching}
							className=" text-[#868697] absolute top-[6px] sm:top-[10px] cursor-pointer hover:opacity-80 right-[10px]"
						>
							<CloseIcon sx={{ fontSize: '22px' }} />
						</div>
						{listSearch && searchTerm && (
							<div
								className={`${
									searchLoading && 'hidden'
								} absolute left-0 top-[6rem] z-[1000] w-[400px] h-fit max-h-[500px] bg-white text-black rounded-[4px] shadow-shadow-custom border border-grey-boder overflow-y-scroll`}
							>
								{listSearch.map((item, index) => (
									<Link key={index} href={item.href}>
										<div className="flex items-center w-full px-[20px] py-[10px] h-[50px] hover:bg-grey-boder">
											{item.image && (
												<img
													src={item.image}
													className="w-[30px] h-[30px] rounded-[1000px]"
												/>
											)}
											<div className="text-[16px] ml-[20px]">
												{item.name ||
													item.nameId ||
													item.title}
												{item.symbol &&
													`(${item.symbol})`}
											</div>
										</div>
									</Link>
								))}
							</div>
						)}
						{noResult && (
							<div className=" absolute left-0 top-[6rem] z-[1000] w-[400px] h-fit max-h-[500px] bg-white text-black rounded-[4px] shadow-shadow-custom border border-grey-boder overflow-y-scroll">
								<div className="flex items-center w-full px-[20px] py-[10px] h-[50px] hover:bg-grey-boder">
									<div className="text-[16px] ml-[20px]">
										Không tìm thấy kết quả
									</div>
								</div>
							</div>
						)}
						{searchLoading && (
							<div className=" absolute left-0 top-[6rem] z-[1000] w-[400px] h-fit max-h-[500px] bg-white text-black rounded-[4px] shadow-shadow-custom border border-grey-boder overflow-y-scroll">
								<div className="flex items-center w-full px-[20px] py-[10px] h-[50px] hover:bg-grey-boder">
									<div className="text-[16px] ml-[20px]">
										<Loading />
									</div>
								</div>
							</div>
						)}
					</div>
					{email && (
						<div className="flex items-center justify-center w-[4rem] rounded-[1000px] bg-white ml-[9px] sm:ml-[15px] cursor-pointer hover:opacity-80">
							<NotificationsNoneIcon
								sx={{ fontSize: '2rem', color: '#868697' }}
							/>
						</div>
					)}
					<div className="flex relative items-center justify-between bg-white w-auto rounded-[25px] ml-[9px] sm:ml-[15px]">
						<Avatar
							sx={{ height: '4rem', width: '4rem' }}
							className="w-[36px] h-[36px] lg:w-[4rem] lg:h-full rounded-[1000px]"
							referrerPolicy="no-referrer"
							src={avatar ? avatar : ''}
						/>
						<div className="hidden sm:flex items-center justify-end ml-[0.5rem] md:ml-[2.5rem] mr-[1rem] text-[#868697]">
							{email ? (
								<div className="hidden md:block text-[1.4rem] font-medium mr-[1rem]">
									{name}
								</div>
							) : (
								<Link href="/authentication">
									<div className="hidden md:block text-[1.4rem] font-medium mr-[1rem] cursor-pointer hover:opacity-80">
										Đăng nhập/Đăng ký
									</div>
								</Link>
							)}
							<ExpandMoreIcon
								ref={arrowModalRef}
								onClick={toggleOpenModal}
								className={`cursor-pointer hover:opacity-80 ${
									isOpenModal ? 'rotate-180' : 'rotate-0'
								} transition-transform ease-in-out duration-500`}
								sx={{ fontSize: '2rem' }}
							/>
							{/* {isOpenModal && ( */}
							<div
								ref={modalRef}
								className={`${
									isOpenModal
										? ' visible opacity-100 translate-y-0 delay-300 '
										: ' invisible opacity-0 -translate-y-[1rem] -z-1'
								} transition-all ease-linear duration-100 hidden md:block absolute top-[55px] right-0 z-[1000] text-[14px] w-[25rem] bg-white shadow-2xl rounded-[5px]`}
							>
								<div
									onClick={closeModal}
									className=" text-end mr-[10px] cursor-pointer hover:opacity-80 pt-[1rem]"
								>
									<CloseIcon sx={{ fontSize: '2rem' }} />
								</div>
								<div className="px-[2rem] mx-[1rem] pb-[1rem] text-[16px] mb-[1rem] flex items-center border-b border-grey-text">
									{/* <div className=" text-grey-text pb-[1rem]">
                                                        Profile setting
                                                    </div>
                                                    <div>View profile</div> */}
									<div>
										<Avatar src={avatar} />
									</div>
									<div className="ml-[10px]">{name}</div>
								</div>
								<div className="px-[3rem] pb-[2rem] pt-[1rem]">
									{email && (
										<Link href="/ca-nhan">
											<div className="flex pb-[2rem] text-grey-text text-[16px] hover:opacity-80 cursor-pointer">
												<div>
													<PersonOutlineIcon
														sx={{
															fontSize: '20px',
														}}
													/>
												</div>
												<div className="pl-[1rem]">
													Cá nhân
												</div>
											</div>
										</Link>
									)}
									<Link href="/danh-muc-theo-doi">
										<div className="flex pb-[1rem] text-grey-text text-[16px] hover:opacity-80 cursor-pointer">
											<div>
												<BookmarkBorderIcon
													sx={{
														fontSize: '20px',
													}}
												/>
											</div>
											<div className="pl-[1rem]">
												Danh mục theo dõi
											</div>
										</div>
									</Link>
								</div>
								{email ? (
									<div
										onClick={logout}
										className="text-grey-text text-[16px] pb-[2rem] px-[3.5rem] hover:opacity-80 cursor-pointer"
									>
										Đăng xuất
									</div>
								) : (
									<Link href="/authentication">
										<div className="text-grey-text text-[16px] pb-[2rem] px-[3.5rem] hover:opacity-80 cursor-pointer">
											Đăng nhập/Đăng ký
										</div>
									</Link>
								)}
							</div>
							{/* )} */}
						</div>
					</div>
					<div className="relative my-auto">
						<div
							onClick={toggleOpenMenu}
							className="hidden sm:flex lg:hidden items-center justify-center ml-[9px] cursor-pointer hover:opacity-80"
						>
							<svg
								width="23"
								height="16"
								viewBox="0 0 23 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									width="23"
									height="3"
									rx="1.5"
									fill="white"
								/>
								<rect
									y="6"
									width="23"
									height="3"
									rx="1.5"
									fill="white"
								/>
								<rect
									y="13"
									width="23"
									height="3"
									rx="1.5"
									fill="white"
								/>
							</svg>
						</div>

						<NavigationHeaderMenu
							setIsOpenMenu={setIsOpenMenu}
							isOpenMenu={isOpenMenu}
						/>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
