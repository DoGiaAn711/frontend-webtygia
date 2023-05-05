import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import React, { useState } from 'react';

function SelectOptionNews({ category, setCategory, setPageNumber, router }) {
	const handleCategory = (e) => {
		router.push(`?page=1`, undefined, { shallow: true });
		setCategory(e.target.value);
		setPageNumber(1);
	};
	return (
		<Box className=" w-full  ">
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label" sx={{ fontSize: 14 }}>
					Thể loại bài viết
				</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					sx={{ fontSize: 14 }}
					value={category}
					label="Category"
					onChange={handleCategory}
				>
					<MenuItem sx={{ fontSize: 14 }} value={'coin'}>
						Tiền điện tử
					</MenuItem>
					<MenuItem sx={{ fontSize: 14 }} value={'stock'}>
						Chứng khoán
					</MenuItem>
					<MenuItem sx={{ fontSize: 14 }} value={'interestRate'}>
						Lãi suất ngân hàng
					</MenuItem>
					<MenuItem sx={{ fontSize: 14 }} value={'exchangeRate'}>
						Ngoại tệ
					</MenuItem>
					<MenuItem sx={{ fontSize: 14 }} value={'gold'}>
						Vàng
					</MenuItem>
					<MenuItem sx={{ fontSize: 14 }} value={'petrol'}>
						Xăng, dầu
					</MenuItem>
					<MenuItem sx={{ fontSize: 14 }} value={'others'}>
						Khác
					</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}

export default SelectOptionNews;
