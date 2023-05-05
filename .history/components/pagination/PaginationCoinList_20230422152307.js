import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';

function PaginationCoinList({ setPageNumber, page, pageNav, router }) {
	// const [pageNav, setPageNav] = useState(1);
	const handleChange = (event, value) => {
		setPageNumber(value);
		router.push(`?page=${value}`, undefined, { shallow: true });
		// setPageNav(value);
		// console.log(value);
	};
	useEffect(() => {
		if (router.query.page) {
			setPageNumber(parseInt(router.query.page));
		}
	}, [router.query.page]);
	return (
		<Stack
			display={'flex'}
			alignItems={'center'}
			justifyContent={'center'}
			sx={{ margin: '2rem auto' }}
			spacing={2}
		>
			<Pagination
				page={pageNav}
				onChange={handleChange}
				size="large"
				count={page}
				variant="outlined"
				color="primary"
				hidePrevButton
				hideNextButton
			/>
		</Stack>
	);
}

export default PaginationCoinList;
