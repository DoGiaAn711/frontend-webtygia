import { useQuery } from 'react-query';
import axios from 'axios';
import { useQueryClient } from 'react-query';

const useNewsList = (page) => {
	// let pagePagination = page || 1;
	const fetchNews = async (page) => {
		return axios
			.get(
				`${process.env.NEXT_PUBLIC_PRODUCT_URL}/get-list-news?per_page=16&page=${page}`
			)
			.then((res) => res.data.data)
			.catch((err) => console.log(err));
	};

	return useQuery(['newsList', page], () => fetchNews(page), {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 3600000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};

const useNewsLatest = () => {
	const fetchNews = async () => {
		return axios
			.get(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/get-latest-news`)
			.then((res) => res.data.data)
			.catch((err) => console.log(err));
	};

	return useQuery('get-latest-news', () => fetchNews(), {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 3600000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};

const useNewsdetail = (id) => {
	// let pagePagination = page || 1;
	const fetchNews = async () => {
		return axios
			.get(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/get-detail-news/${id}`)
			.then((res) => res.data.data)
			.catch((err) => console.log(err));
	};

	return useQuery(`/get-detail-news/${id}`, fetchNews, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 3600000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};

export { useNewsList, useNewsdetail, useNewsLatest };
