import axios from 'axios';

export const fetchStockDescription = async (symbol) => {
	return axios
		.get(`${process.env.PRODUCT}/stock/description/${symbol}`)
		.then((res) => res.data)
		.catch((err) => console.log(err));
};
