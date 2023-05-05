import { useQuery } from 'react-query';
import axios from 'axios';

export const useExchange = (name) => {
	const fetchExchange = async () => {
		return axios
			.get(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/exchangeRate/${name}`)
			.then((res) => res.data.data[0])
			.catch((err) => console.log(err));
	};

	return useQuery(`/exchangeRate/${name}`, fetchExchange, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 1800000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};
