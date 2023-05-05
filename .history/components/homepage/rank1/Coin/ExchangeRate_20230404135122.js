import React, { useRef } from 'react';
import { useUsdToVnd } from '@services/stock/useStock';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function ExchangeRate({ data }) {
	const inputUsd = useRef();

	const inputCoin = useRef();

	const convertCoinToUsd = (e) => {
		let number = e.target.value;

		let result = number * data?.currentPrice;
		if (isNaN(result)) {
			inputUsd.current.value = 'Ngăn cách bằng dấu .';
		} else {
			inputUsd.current.value = result;
		}
	};

	const convertUsdToCoin = (e) => {
		let number = e.target.value;

		let result = number / data?.currentPrice;
		if (isNaN(result)) {
			inputCoin.current.value = 'Ngăn cách bằng dấu .';
		} else {
			inputCoin.current.value = result;
		}
	};
	if (data) {
		return (
			<>
				<div className="flex mt-[3.5rem] flex-col font-medium">
					<div className="flex justify-between flex-col   bg-grey-4 rounded-[4px] py-[2rem]  px-[1.5rem]  h-[18rem]  w-full mr-[2rem]">
						<div className=" justify-between  flex items-center bg-white h-[5rem] rounded-[6px] border border-grey-boder">
							<div className="flex  border-r border-black-text-2  w-full h-full ">
								<input
									ref={inputCoin}
									onChange={convertCoinToUsd}
									className="h-full outline-none text-[2rem] w-full  rounded-[6px] pl-[10px]"
									placeholder="0"
								/>
							</div>
							<div className=" w-[6rem] mx-[1rem] text-center text-[2rem] ">
								{data?.symbol && data?.symbol?.toUpperCase()}
							</div>
						</div>
						<div className="  items-center w-[3rem] ml-[0.2rem] ">
							<SyncAltIcon sx={{ fontSize: '3rem' }} />
						</div>
						<div className=" justify-between flex items-center bg-white h-[5rem] rounded-[6px] border border-grey-boder">
							<div className="flex  border-r border-black-text-2 w-full h-full">
								<input
									onChange={convertUsdToCoin}
									ref={inputUsd}
									className="h-full outline-none text-[2rem] w-full  rounded-[6px] pl-[10px]"
									placeholder="0"
								/>
							</div>
							<div className=" w-[6rem] mx-[1rem] text-center text-[2rem] ">
								USDT
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default ExchangeRate;
