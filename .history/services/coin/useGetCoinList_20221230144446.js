import { useQuery } from 'react-query';
import axios from 'axios';
import { useQueryClient } from 'react-query';

const useGetCoinList = () => {
	const fetchCoins = async () => {
		return axios
			.get('http://66.42.58.72/api/v1/coin/markets?per_page=100&page=1')
			.then((res) => res.data.data.coinList)
			.catch((err) => console.log(err));
	};

	return useQuery('coinList', fetchCoins, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 300000,
		// refetchInterval: 120000,
	});
	// return getlistQuery;
};
export default useGetCoinList;

// export const useGetFetchQuery = (key) => {
// 	const queryClient = useQueryClient();

// 	return queryClient.getQueryData(key);
// };
// export default useGetFetchQuery;
