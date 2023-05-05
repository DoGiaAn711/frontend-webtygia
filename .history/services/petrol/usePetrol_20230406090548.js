import { useQuery } from 'react-query';
import axios from 'axios';

export const usePetrolimex = () => {
	const fetchPetrol = async () => {
		return axios
			.get(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/petrol/petrolimex`)
			.then((res) => res.data)
			.catch((err) => console.log(err));
	};

	return useQuery(`/petrol/petrolimex`, fetchPetrol, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 1800000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};

export const usePetrol = (days) => {
	const fetchPetrol = async () => {
		return axios
			.get(
				`${process.env.NEXT_PUBLIC_PRODUCT_URL}/petrol/chart/petrolimex?days=${days}`
			)
			.then((res) => res.data.data[0])
			.catch((err) => console.log(err));
	};

	return useQuery(`/petrol/chart/petrolimex?days=${days}`, fetchPetrol, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 300000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};
