import axios from 'axios';

export const fetchStockDescription = async (symbol) => {
	return axios
		.get(
			`${process.env.NEXT_PUBLIC_PRODUCT_URL}/stock/description/${symbol}`
		)
		.then((res) => res.data)
		.catch((err) => console.log(err));
};
