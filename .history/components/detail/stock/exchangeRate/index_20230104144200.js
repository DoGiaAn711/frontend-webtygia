import React from 'react';
import { useUsdToVnd } from '@services/stock/useStock';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function ExchangeRate() {
	const [age, setAge] = React.useState('');
	const { data, isLoading, isError, error, isFetching } = useUsdToVnd();

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	if (data) {
		return (
			<>
				<h2 className="text-[2.4rem] font-semibold">
					Công cụ chuyển đổi tiền tệ
				</h2>
				<div className="flex justify-between flex-col sm:flex-row mt-[3.5rem]">
					<div className=" justify-between ml-[3rem]  flex items-center">
						<div className="mr-[1rem] border-r border-black-text-2  w-full ">
							<input
								// ref={inputCoin}
								// onChange={convertCoinToUsd}
								className=" outline-none text-[2rem] w-full "
								placeholder="0"
							/>
						</div>
						<div className=" w-[6rem]  text-[2rem]">VND</div>
					</div>
					<div className=" justify-between ml-[3rem] flex items-center">
						<div className="mr-[1rem] border-r border-black-text-2 w-full">
							<input
								// ref={inputCoin}
								// onChange={convertCoinToUsd}
								className=" outline-none text-[2rem] w-full"
								placeholder="0"
							/>
						</div>
						<div className=" w-[6rem]  text-[2rem]">USD</div>
					</div>
					<div>
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
									value={age}
									label="Age"
									onChange={handleChange}
								>
									<MenuItem value={10}>Mua tiền mặt</MenuItem>
									<MenuItem value={20}>
										Mua chuyển khoản
									</MenuItem>
									<MenuItem value={30}>Bán</MenuItem>
								</Select>
							</FormControl>
						</Box>
					</div>
				</div>
			</>
		);
	}
}

export default ExchangeRate;
