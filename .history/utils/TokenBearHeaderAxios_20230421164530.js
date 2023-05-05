const config = {
	headers: {
		'Content-type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
	},
};

export default config;
