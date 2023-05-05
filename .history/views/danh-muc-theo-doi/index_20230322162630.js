import CoinFollowTable from '@components/followTable/CoinFollowTable';
import NewsFollowTable from '@components/followTable/NewsFollowTable';
import MainLayout from '@components/layouts/mainLayout';
import {
	useUserPopulate,
	useUserPopulateAllFields,
} from '@services/user/useUser';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Head from 'next/head';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import StockFollowTable from '@components/followTable/StockFollowTable';
import Loading from '@components/UI/Loading';
import Link from 'next/link';

function DanhMucTheoDoiView() {
	const [email, setEmail] = useState();
	// const [populateField, setPopulateField] = useState('followNews');

	const { dataisSuccess, data, isLoading, isError } =
		useUserPopulateAllFields();

	// const handleChange = (e) => {
	// 	setPopulateField(e.target.value);
	// };
	console.log(data);

	return (
		<>
			<MainLayout>
				<div className=" h-auto sm:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem]  lg:px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
					<div className="text-[2.8rem] font-semibold mb-[60px]">
						Danh mục theo dõi
					</div>

					<div className="relative mb-[40px] px-[10px]">
						<span className=" absolute top-[0px] text-[18px] text-blue-text font-medium">
							Tiền điện tử
						</span>
						<CoinFollowTable
							data={data}
							populateField="followCoins"
						/>
						<div className=" absolute bottom-[-25px] w-full text-center text-[13px] text-grey-text font-medium ">
							<Link href="/danh-muc-theo-doi/coin">
								<span className="cursor-pointer hover:opacity-80">
									Xem thêm <ArrowRightIcon />
								</span>
							</Link>
						</div>
					</div>
					<div className="relative mb-[60px] px-[10px]">
						<span className=" absolute top-[5px] text-[18px] text-blue-text font-medium">
							Cổ phiếu
						</span>
						<StockFollowTable
							data={data}
							populateField="followStocks"
						/>
						<div className=" absolute bottom-[-25px]  w-full text-center text-[13px] text-grey-text font-medium cursor-pointer hover:opacity-80">
							Xem thêm <ArrowRightIcon />
						</div>
					</div>
					<div className=" mb-[40px]">
						<span className=" px-[10px] text-[18px] text-blue-text font-medium">
							Tin tức
						</span>
						<NewsFollowTable
							className="mx-[-10px]"
							data={data}
							populateField="followNews"
						/>
						<div className="px-[10px] mt-[19px]  w-full text-center text-[13px] text-grey-text font-medium cursor-pointer hover:opacity-80">
							Xem thêm <ArrowRightIcon />
						</div>
					</div>

					{isLoading && <Loading />}
				</div>
			</MainLayout>
		</>
	);
}

export default DanhMucTheoDoiView;

// function DanhMucTheoDoiView() {
// 	const [email, setEmail] = useState();
// 	const [populateField, setPopulateField] = useState('followNews');

// 	const { dataisSuccess, data, isLoading, isError } =
// 		useUserPopulate(populateField);

// 	const handleChange = (e) => {
// 		setPopulateField(e.target.value);
// 	};

// 	return (
// 		<>
// 			<MainLayout>
// 				<div className=" h-auto sm:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem]  lg:px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
// 					<div className="flex w-full lg:w-[200px]  items-center ">
// 						<Box className=" w-full min-w-[10rem] mt-[2rem] ">
// 							<FormControl fullWidth>
// 								<InputLabel
// 									id="demo-simple-select-label"
// 									sx={{ fontSize: 16 }}
// 								>
// 									Thể loại
// 								</InputLabel>
// 								<Select
// 									labelId="demo-simple-select-label"
// 									id="demo-simple-select"
// 									sx={{ fontSize: 14 }}
// 									value={populateField}
// 									label="type"
// 									onChange={handleChange}
// 								>
// 									<MenuItem
// 										sx={{ fontSize: 14 }}
// 										value={'followCoins'}
// 									>
// 										Coin
// 									</MenuItem>
// 									<MenuItem
// 										sx={{ fontSize: 14 }}
// 										value={'followStocks'}
// 									>
// 										Cổ phiếu
// 									</MenuItem>
// 									<MenuItem
// 										sx={{ fontSize: 14 }}
// 										value={'followNews'}
// 									>
// 										Tin tức
// 									</MenuItem>
// 								</Select>
// 							</FormControl>
// 						</Box>
// 					</div>

// 					{populateField === 'followCoins' && (
// 						<CoinFollowTable
// 							data={data}
// 							populateField={populateField}
// 						/>
// 					)}
// 					{populateField === 'followNews' && (
// 						<NewsFollowTable
// 							data={data}
// 							populateField={populateField}
// 						/>
// 					)}
// 					{populateField === 'followStocks' && (
// 						<StockFollowTable
// 							data={data}
// 							populateField={populateField}
// 						/>
// 					)}
// 					{isLoading && <Loading />}
// 				</div>
// 			</MainLayout>
// 		</>
// 	);
// }
