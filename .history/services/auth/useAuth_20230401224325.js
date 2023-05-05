import { useQuery } from 'react-query';
import axios from 'axios';

export const fetchLogin = async (body) => {
	// const fetchCoins = async () => {
	return axios
		.post(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/login`, body)
		.then((res) => res.data)
		.catch((err) => console.log(err));
	// };
};

export const fetchSignup = async (body) => {
	// const fetchCoins = async () => {
	return axios
		.post(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/register`, body)
		.then((res) => res.data)
		.catch((err) => console.log(err));
	// };
};
