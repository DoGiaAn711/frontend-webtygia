import { useQuery } from 'react-query';
import axios from 'axios';
import { useQueryClient } from 'react-query';
import config from '../../utils/TokenBearHeaderAxios';

const useNewsList = (page, category) => {
	// let pagePagination = page || 1;
	const fetchNews = async (page, category) => {
		return axios
			.get(
				`${process.env.NEXT_PUBLIC_PRODUCT_URL}/get-list-news/category?category=${category}&per_page=2&page=${page}`
			)
			.then((res) => res.data.data)
			.catch((err) => console.log(err));
	};

	return useQuery(
		[
			`get-list-news/category?category=${category}&per_page=8&page=${page}`,
			page,
			category,
		],
		() => fetchNews(page, category),
		{
			cacheTime: 3600000,
			// refetchOnWindowFocus: false,
			staleTime: 3600000,
			// refetchInterval: 5000,
		}
	);
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
