import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectStockExchange() {
	return (
		<div>
			<Box className=" min-w-[10rem] mt-[2rem] sm:mt-0 ">
				<FormControl fullWidth>
					<InputLabel
						id="demo-simple-select-label"
						sx={{ fontSize: 16 }}
					>
						Sàn
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						sx={{ fontSize: 14 }}
						// value={age}
						label="Age"
						// onChange={handleChange}
					>
						<MenuItem sx={{ fontSize: 14 }} value={'buyCast'}>
							Mua tiền mặt
						</MenuItem>
						<MenuItem sx={{ fontSize: 14 }} value={'buyTransfer'}>
							Mua chuyển khoản
						</MenuItem>
						<MenuItem sx={{ fontSize: 14 }} value={'sell'}>
							Bán
						</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</div>
	);
}

export default SelectStockExchange;
