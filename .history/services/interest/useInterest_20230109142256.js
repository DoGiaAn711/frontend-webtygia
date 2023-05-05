import { useQuery } from 'react-query';
import axios from 'axios';

export const useInterest = (name) => {
	const fetchInterest = async () => {
		return axios
			.get(`${process.env.PRODUCT}/interestRate/${name}`)
			.then((res) => res.data.data)
			.catch((err) => console.log(err));
	};

	return useQuery(`/interestRate/${name}`, fetchInterest, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 1800000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};
