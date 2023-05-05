import { useQuery } from 'react-query';
import axios from 'axios';
import { useQueryClient } from 'react-query';

const useCoinList = () => {
	const fetchCoins = async () => {
		return axios
			.get(
				`${process.env.PRODUCT}/coin/markets?per_page=100&page=1`
			)
			.then((res) => res.data.data.coinList)
			.catch((err) => console.log(err));
	};

	return useQuery('coinList', fetchCoins, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 300000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};
export  useCoinList;

// export const useGetFetchQuery = (key) => {
// 	const queryClient = useQueryClient();

// 	return queryClient.getQueryData(key);
// };
// export default useGetFetchQuery;
