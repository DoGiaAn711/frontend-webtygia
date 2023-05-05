import { useQuery } from 'react-query';
import axios from 'axios';

export const useLogin = async (body) => {
	// const fetchCoins = async () => {
	return axios
		.post(`${process.env.PRODUCT}/login`, body)
		.then((res) => res.data)
		.catch((err) => console.log(err));
	// };
};

export const useSignup = async (body) => {
	// const fetchCoins = async () => {
	return axios
		.post(`${process.env.PRODUCT}/register`, body)
		.then((res) => res.data)
		.catch((err) => console.log(err));
	// };
};
