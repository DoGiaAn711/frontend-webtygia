import React, { useRef } from 'react';
import { useUsdToVnd } from '@services/stock/useStock';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function ExchangeRate() {
	const [age, setAge] = React.useState('buyCast');
	const inputUsd = useRef();
	const inputVnd = useRef();
	const { data, isLoading, isError, error, isFetching } = useUsdToVnd();

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const convertUsdToVnd = (e) => {
		let number = e.target.value;
		if (age === 'buyCast') {
			let result = number * data?.usdBuyCast;
			if (isNaN(result)) {
				inputVnd.current.value = 'Ngăn cách bằng dấu .';
			} else {
				inputVnd.current.value = result;
			}
		}
		if (age === 'buyTransfer') {
			let result = number * data?.usdBuyTransfer;
			if (isNaN(result)) {
				inputVnd.current.value = 'Ngăn cách bằng dấu .';
			} else {
				inputVnd.current.value = result;
			}
		}
		if (age === 'sell') {
			let result = number * data?.usdSell;
			if (isNaN(result)) {
				inputVnd.current.value = 'Ngăn cách bằng dấu .';
			} else {
				inputVnd.current.value = result;
			}
		}
	};
	const convertVndToUsd = (e) => {
		let number = e.target.value;
		if (age === 'buyCast') {
			let result = number / data?.usdBuyCast;
			if (isNaN(result)) {
				inputUsd.current.value = 'Ngăn cách bằng dấu .';
			} else {
				inputUsd.current.value = result;
			}
		}
		if (age === 'buyTransfer') {
			let result = number / data?.usdBuyTransfer;
			if (isNaN(result)) {
				inputUsd.current.value = 'Ngăn cách bằng dấu .';
			} else {
				inputUsd.current.value = result;
			}
		}
		if (age === 'sell') {
			let result = number / data?.usdSell;
			if (isNaN(result)) {
				inputUsd.current.value = 'Ngăn cách bằng dấu .';
			} else {
				inputUsd.current.value = result;
			}
		}
	};
	if (data) {
		return (
			<>
				<h2 className="text-[2.4rem] font-semibold">
					Công cụ chuyển đổi tiền tệ
				</h2>
				<div className="flex justify-between flex-col sm:flex-row mt-[3.5rem] bg-grey-4">
					<div className=" justify-between ml-[3rem]  flex items-center h-[6rem]">
						<div className="mr-[1rem] border-r border-black-text-2  w-full ">
							<input
								ref={inputVnd}
								onChange={convertVndToUsd}
								className=" outline-none text-[2rem] w-full bg-grey-4"
								placeholder="0"
							/>
						</div>
						<div className=" w-[6rem]  text-[2rem]">VND</div>
					</div>
					<div className=" justify-between ml-[3rem] flex items-center">
						<div className="mr-[1rem] border-r border-black-text-2 w-full">
							<input
								ref={inputUsd}
								onChange={convertUsdToVnd}
								className=" outline-none text-[2rem] w-full bg-grey-4"
								placeholder="0"
							/>
						</div>
						<div className=" w-[6rem]  text-[2rem]">USD</div>
					</div>
					{/* <div>
						<Box className=" min-w-[10rem] mt-[2rem] sm:mt-0 ">
							<FormControl fullWidth>
								<InputLabel
									id="demo-simple-select-label"
									sx={{ fontSize: 16 }}
								>
									Loại USD
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									sx={{ fontSize: 14 }}
									value={age}
									label="Age"
									onChange={handleChange}
								>
									<MenuItem
										sx={{ fontSize: 14 }}
										value={'buyCast'}
									>
										Mua tiền mặt
									</MenuItem>
									<MenuItem
										sx={{ fontSize: 14 }}
										value={'buyTransfer'}
									>
										Mua chuyển khoản
									</MenuItem>
									<MenuItem
										sx={{ fontSize: 14 }}
										value={'sell'}
									>
										Bán
									</MenuItem>
								</Select>
							</FormControl>
						</Box>
					</div> */}
				</div>
			</>
		);
	}
}

export default ExchangeRate;
