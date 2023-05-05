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
					<div className="text-[2.8rem] font-semibold mb-[30px]">
						Danh mục theo dõi
					</div>

					<div className="relative mb-[40px]">
						<span className=" absolute top-[5px] text-[18px] text-blue-text font-medium">
							Tiền điện tử
						</span>
						<CoinFollowTable
							data={data}
							populateField="followCoins"
						/>
						<span className=" absolute bottom-[-20px] text-[12px] text-grey-text font-medium cursor-pointer hover:opacity-80">
							Xem thêm ...
						</span>
					</div>
					<div className="relative mb-[40px]">
						<span className=" absolute top-[5px] text-[18px] text-blue-text font-medium">
							Cổ phiếu
						</span>
						<StockFollowTable
							data={data}
							populateField="followStocks"
						/>
						<span className=" absolute bottom-[-20px] text-[12px] text-grey-text font-medium cursor-pointer hover:opacity-80">
							Xem thêm ...
						</span>
					</div>
					<div className="relative mb-[40px]">
						<span className=" absolute top-[5px] text-[18px] text-blue-text font-medium">
							Tin tức
						</span>
						<NewsFollowTable
							data={data}
							populateField="followNews"
						/>
						<span className=" absolute bottom-[-20px] text-[12px] text-grey-text font-medium cursor-pointer hover:opacity-80">
							Xem thêm ...
						</span>
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
