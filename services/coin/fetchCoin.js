import axios from 'axios';

export const fetchCoinDescription = async (nameId) => {
	return axios
		.get(
			`${process.env.NEXT_PUBLIC_PRODUCT_URL}/coin/description/${nameId}`
		)
		.then((res) => res.data)
		.catch((err) => console.log(err));
};
