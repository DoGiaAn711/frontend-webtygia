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
						sx={{ fontSize: 12 }}
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
						<MenuItem sx={{ fontSize: 14 }} value={'hnx'}>
							HNX
						</MenuItem>
						<MenuItem sx={{ fontSize: 14 }} value={'hose'}>
							HOSE
						</MenuItem>
						<MenuItem sx={{ fontSize: 14 }} value={'hnx30'}>
							HNX30
						</MenuItem>
						<MenuItem sx={{ fontSize: 14 }} value={'vn30'}>
							VN30
						</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</div>
	);
}

export default SelectStockExchange;
