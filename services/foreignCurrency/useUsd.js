import axios from 'axios';
import { useQuery } from 'react-query';

export const useUsd = (symbol) => {
	const fetchStock = async () => {
		return axios
			.get(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/foreign-currency/usd`)
			.then((res) => res.data.data[0])
			.catch((err) => console.log(err));
	};

	return useQuery(`/foreign-currency/usd`, fetchStock, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 900000,
		refetchInterval: 900000,
	});
	// return getlistQuery;
};

export const useUsdVietcombankChart = (days) => {
	const fetchUsd = async () => {
		return axios
			.get(
				`${process.env.NEXT_PUBLIC_PRODUCT_URL}/foreign-currency/chart/usd?days=${days}`
			)
			.then((res) => res.data.data[0])
			.catch((err) => console.log(err));
	};

	return useQuery(`/foreign-currency/chart/usd?days=${days}`, fetchUsd, {
		cacheTime: 1800000,
		// refetchOnWindowFocus: false,
		staleTime: 1800000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};
