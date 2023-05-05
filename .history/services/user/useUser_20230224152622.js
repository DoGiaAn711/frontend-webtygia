import { useQuery } from 'react-query';
import axios from 'axios';

const useUser = (email) => {
	// if (email) {
	// let pagePagination = page || 1;
	const fetchUser = async () => {
		return axios
			.get(`${process.env.PRODUCT}/user/${email}`)
			.then((res) => res.data.data[0])
			.catch((err) => console.log(err));
	};

	return useQuery(`/user/${email}`, fetchUser, {
		cacheTime: Infinity,
		// refetchOnWindowFocus: false,
		staleTime: 0,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
	// }

	// return { data: '' };
};

const useUserPopulate = (email, populateField) => {
	const fetchUser = async () => {
		return axios
			.get(
				`${process.env.PRODUCT}/user-populate/${email}?populate=${populateField}`
			)
			.then((res) => res.data.data[0])
			.catch((err) => console.log(err));
	};

	return useQuery(`/user/${email}`, fetchUser, {
		cacheTime: Infinity,
		// refetchOnWindowFocus: false,
		staleTime: 0,
		// refetchInterval: 5000,
	});
};

const useUserPopulateSymbolStock = (email) => {
	// if (email) {
	// let pagePagination = page || 1;
	const fetchUser = async () => {
		return axios
			.get(`${process.env.PRODUCT}/user-populate-symbol-stock/${email}`)
			.then((res) => res.data.data[0])
			.catch((err) => console.log(err));
	};

	return useQuery(`/user-populate-symbol-stock/${email}`, fetchUser, {
		cacheTime: Infinity,
		// refetchOnWindowFocus: false,
		staleTime: 0,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
	// }

	// return { data: '' };
};

const useUserFollowAndInterest = (email) => {
	// if (email) {
	// let pagePagination = page || 1;
	const fetchUser = async () => {
		return axios
			.post(
				`${process.env.PRODUCT}/user-follow-and-interest/`,
				{ email },
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			.then((res) => res.data)
			.catch((err) => console.log(err));
	};

	return useQuery(`/user-follow-and-interest/`, fetchUser, {
		cacheTime: Infinity,
		// refetchOnWindowFocus: false,
		staleTime: 0,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
	// }

	// return { data: '' };
};

export {
	useUser,
	useUserPopulate,
	useUserPopulateSymbolStock,
	useUserFollowAndInterest,
};
