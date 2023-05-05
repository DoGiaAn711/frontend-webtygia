import { useQuery } from 'react-query';
import axios from 'axios';

export const useGold = (name) => {
	const fetchCoins = async () => {
		return axios
			.get(`${process.env.PRODUCT}/gold/${name}`)
			.then((res) => res.data.data)
			.catch((err) => console.log(err));
	};

	return useQuery(`/gold/${name}`, fetchCoins, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 1800000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};

export const useGoldChart = (days) => {
	const fetchGold = async () => {
		return axios
			.get(`${process.env.PRODUCT}/gold/chart/sjc?days=${days}`)
			.then((res) => res.data.data[0].data)
			.catch((err) => console.log(err));
	};

	return useQuery(`/coin/chart/sjc?days=${days}`, fetchGold, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 300000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};
