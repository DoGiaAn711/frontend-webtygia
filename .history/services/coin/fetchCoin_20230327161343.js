import axios from 'axios';

export const fetchCoinDescription = async (nameId) => {
	return axios
		.get(`${process.env.PRODUCT}/coin/description/${nameId}`)
		.then((res) => res.data)
		.catch((err) => console.log(err));
};
