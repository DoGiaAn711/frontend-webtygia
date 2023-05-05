export const useUsd = (symbol) => {
	const fetchStock = async () => {
		return axios
			.get(`${process.env.PRODUCT}/foreign-currency/usd`)
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
