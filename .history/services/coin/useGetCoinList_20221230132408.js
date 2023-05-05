import { useQuery } from 'react-query';
import axios from 'axios';

const fetchCoins = async () => {
	return axios
		.get('http://66.42.58.72/api/v1/coin/markets?per_page=100&page=1')
		.then((res) => res.data.data.coinList)
		.catch((err) => console.log(err));
};

export const useGetCoinList = async () => {
	const getlistQuery = useQuery('coinList', fetchCoins, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 300000,
		// refetchInterval: 120000,
	});
	return getlistQuery;
};
