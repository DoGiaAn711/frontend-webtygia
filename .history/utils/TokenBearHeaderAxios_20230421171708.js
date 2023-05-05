// const config = {
// 	headers: {
// 		'Content-type': 'application/json',
// 		Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
// 	},
// };

const config = (token) => {
	return {
		headers: {
			'Content-type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	};
};

export default config;
