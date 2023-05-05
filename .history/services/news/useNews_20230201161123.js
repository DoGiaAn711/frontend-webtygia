import { useQuery } from 'react-query';
import axios from 'axios';
import { useQueryClient } from 'react-query';

const useNewsList = (page) => {
	// let pagePagination = page || 1;
	const fetchCoins = async (page) => {
		return axios
			.get(`${process.env.PRODUCT}/coin/markets?per_page=50&page=${page}`)
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

export { useNewsList };
