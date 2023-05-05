import { useQuery } from 'react-query';
import axios from 'axios';
import { useQueryClient } from 'react-query';
import config from '../../utils/TokenBearHeaderAxios';

const useCoinList = (page) => {
	// let pagePagination = page || 1;
	const fetchCoins = async (page) => {
		const token = localStorage.getItem('accessToken');
		return axios
			.get(
				`${process.env.NEXT_PUBLIC_PRODUCT_URL}/coin/markets?per_page=50&page=${page}`,
				config(token)
			)
			.then((res) => res.data.data)
			.catch((err) => console.log(err));
	};

	return useQuery(['coinList', page], () => fetchCoins(page), {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 300000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};

const useCoinPriceDetail = (nameId) => {
	const fetchCoins = async () => {
		return axios
			.get(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/coin/detail/${nameId}`)
			.then((res) => res.data.data[0])
			.catch((err) => console.log(err));
	};

	return useQuery(`/coin/detail/${nameId}`, fetchCoins, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 300000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};

const useCoinDescription = (nameId) => {
	const fetchCoins = async (nameId) => {
		return axios
			.get(
				`${process.env.NEXT_PUBLIC_PRODUCT_URL}/coin/description/${nameId}`
			)
			.then((res) => res.data)
			.catch((err) => console.log(err));
	};

	return useQuery([`getCoinDescription`, nameId], () => fetchCoins(nameId), {
		cacheTime: Infinity,
		// refetchOnWindowFocus: false,
		staleTime: Infinity,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};

const useCoinChart = (nameId, days) => {
	const fetchCoins = async () => {
		return axios
			.get(
				`${process.env.NEXT_PUBLIC_PRODUCT_URL}/coin/chart/${nameId}?days=${days}`
			)
			.then((res) => res.data.data[0].data)
			.catch((err) => console.log(err));
	};

	return useQuery(`/coin/chart/${nameId}?days=${days}`, fetchCoins, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 300000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};

const useUpdateScoreCoin = (email, id) => {
	const fetchCoins = async () => {
		return axios
			.post(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/update-score-coins`, {
				email,
				coinsId: id,
			})
			.then((res) => res.data)
			.catch((err) => console.log(err));
	};

	return useQuery(`/update-score-coins/${id}`, fetchCoins, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 0,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};

const useUserCoinReference = () => {
	const fetchCoins = async () => {
		return axios
			.post(
				`${process.env.NEXT_PUBLIC_PRODUCT_URL}/coin/user-coin-reference`,
				{
					email: localStorage.getItem('email'),
				}
			)
			.then((res) => res.data)
			.catch((err) => console.log(err));
	};

	return useQuery(`/coin/user-coin-reference`, fetchCoins, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 0,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};

export {
	useCoinList,
	useCoinPriceDetail,
	useCoinDescription,
	useCoinChart,
	useUpdateScoreCoin,
	useUserCoinReference,
};

// export const useGetFetchQuery = (key) => {
// 	const queryClient = useQueryClient();

// 	return queryClient.getQueryData(key);
// };
// export default useGetFetchQuery;
